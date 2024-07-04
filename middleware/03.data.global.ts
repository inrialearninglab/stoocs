import { useMoocs } from '~/stores/moocs.store';
import { useUsers } from '~/stores/users.store';

export default defineNuxtRouteMiddleware(async () => {
    const user = useUser();
    
    if (user.value) {
        const moocsStore = useMoocs();
        const usersStore = useUsers();
        
        if (moocsStore.moocs.length === 0) {
            moocsStore.fetchMoocs();
        }
        
        if (usersStore.users.data.length === 0) {
            usersStore.fetchUsers();
        }
    }
})