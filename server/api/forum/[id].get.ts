import { z } from 'zod';
import { prisma } from '~/prisma/db';

const routeSchema = z.object({
    id: z.string(),
});

export default defineEventHandler(async (event) => {
    const { id } = await getValidatedRouterParams(event, routeSchema.parse);

    const moocSession = await prisma.moocSession.findUnique({
        where: { id }
    });

    if (!moocSession) {
        throw createError({ status: 404, message: 'No Session found' })
    }

    if (!moocSession.forumInstanceName) {
        throw createError({ status: 404, message: 'No forum found for this session' })
    }

    const forum = await prisma.forum.findUnique({
        where: { instanceName: moocSession.forumInstanceName }
    })

    if (!forum) {
        throw createError({ status: 404, message: 'No Forum found for this session' })
    }

    try {
        const data = await $fetch(`${process.env.DISCOURSE_URL!}/${forum.instanceName}/about.json`, {
            headers: {
                'Api-Key': forum.apiKey,
                'Api-Username': process.env.DISCOURSE_USER!,
            }
        })

        return {
            title: data.about.title,
            users: data.about.stats.user_count,
            posts: data.about.stats.post_count,
            topics: data.about.stats.topic_count,
            moderators: data.about.moderators.map((moderator) => {
                return {
                    name: moderator.name,
                    username: moderator.username,
                    avatar: moderator.avatar_template.replace('{size}', '45'),
                    title: moderator.title
                }
            }),
            admins: data.about.admins.map((admin) => {
                return {
                    name: admin.name,
                    username: admin.username,
                    avatar: admin.avatar_template.replace('{size}', '45'),
                    title: admin.title
                }
            })
        }
    } catch(e) {
        throw createError({ status: 500, message: 'Error fetching forum data' })
    }
})
