import { z } from 'zod';

const routeSchema = z.object({
    id: z.string(),
});

export default defineEventHandler(async (event) => {
    const { id } = await getValidatedRouterParams(event, routeSchema.parse);
    try {
        const response: any = await $fetch(
            `https://gitlab.inria.fr/api/v4/projects/${process.env.GITLAB_SCRAPPER_ID}/pipelines/${id}`,
            {
                headers: {
                    'PRIVATE-TOKEN': process.env.GITLAB_SCRAPPER_API_TOKEN!,
                },
            },
        );

        return { status: response.status };
    } catch (e) {
        console.error(e);
        throw createError({
            statusCode: 500,
        });
    }
});
