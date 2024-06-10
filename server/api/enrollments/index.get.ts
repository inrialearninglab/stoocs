import { getEnrollments } from '~/server/mocks';

export default defineEventHandler(async (event) => {
    const enrollments = await getEnrollments();
    
    return {
        enrollments,
    };
})