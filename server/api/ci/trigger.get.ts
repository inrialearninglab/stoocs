export default defineEventHandler(async (event) => {
    try {
        const response: any = await $fetch(`https://gitlab.inria.fr/api/v4/projects/${process.env.GITLAB_SCRAPPER_ID}/trigger/pipeline`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: {
                token: process.env.GITLAB_SCRAPPER_PIPELINE_TOKEN,
                ref: 'main'
            }
        });

        return { pipelineId: response.id }
    } catch (e) {
        console.error(e);
        throw createError({
            statusCode: 500,
        })
    }
})
