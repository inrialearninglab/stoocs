import { useMoocs } from '~/stores/moocs.store';

export default defineNuxtRouteMiddleware(async () => {
    const user = useUser();

    if (user.value) {
        const moocsStore = useMoocs();

        if (moocsStore.moocs.length === 0) {
            moocsStore.fetchMoocs();
        }

        if (user.value.rolename === 'ILL') {
            const usersStore = useUsers();
            if (!usersStore.users.data.length) {
                usersStore.fetchUsers();
            }
        }
    }
})
