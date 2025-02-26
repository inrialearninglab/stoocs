import { type Mooc, type MoocSession } from '~/types';
import { fetchMoocs, pinMooc } from '~/services/moocs.service';
import { toast } from 'vue-sonner';
import type { DateValue } from '@internationalized/date';

interface MoocsState {
    moocs: Mooc[];
    filters: {
        search: string;
        sortBy: 'name' | 'enrollments' | 'status' | 'start' | 'end';
        status: Set<string>;
        moocs: Set<string>;
        startDate: {
            from?: DateValue;
            to?: DateValue;
        };
        endDate: {
            to?: DateValue;
            from?: DateValue;
        };
    };
}

export const useMoocs = defineStore('moocs', {
    state: (): MoocsState => ({
        moocs: [],
        filters: {
            search: '',
            sortBy: 'name',
            status: new Set(),
            moocs: new Set(),
            startDate: {},
            endDate: {},
        },
    }),

    getters: {
        filteredMoocs(): Mooc[] {
            return this.moocs.filter((mooc) => mooc.title.toLowerCase().includes(this.filters.search.toLowerCase()));
        },

        sessions(): MoocSession[] {
            return this.moocs.flatMap((mooc) => {
                return mooc.sessions.map((session) => {
                    return {
                        ...session,
                        courseNumber: mooc.courseNumber,
                        title: mooc.title,
                    };
                });
            });
        },

        isFilterNull(): boolean {
            return (
                this.filters.status.size === 0 &&
                this.filters.moocs.size === 0 &&
                this.filters.search === '' &&
                !this.filters.startDate.from &&
                !this.filters.startDate.to &&
                !this.filters.endDate.from &&
                !this.filters.endDate.to
            );
        },

        filteredSessions(): MoocSession[] {
            const matchesStatus = (session: MoocSession) => {
                // @ts-expect-error
                const status = this.getSessionStatus(session);
                return this.filters.status.size === 0 || this.filters.status.has(status);
            };

            const matchesSearch = (session: MoocSession) => {
                return session.title.toLowerCase().includes(this.filters.search.toLowerCase());
            };

            const matchesMooc = (session: MoocSession) => {
                return this.filters.moocs.size === 0 || this.filters.moocs.has(session.courseNumber);
            };

            const matchesStartDate = (session: MoocSession) => {
                const startDateMatchFrom =
                    !this.filters.startDate.from ||
                    // @ts-expect-error
                    new Date(session.startDate) >= new Date(this.filters.startDate.from);
                const startDateMatchTo =
                    // @ts-expect-error
                    !this.filters.startDate.to || new Date(session.startDate) <= new Date(this.filters.startDate.to);
                return startDateMatchFrom && startDateMatchTo;
            };

            const matchesEndDate = (session: MoocSession) => {
                const endDateMatchFrom =
                    !this.filters.endDate.from ||
                    // @ts-expect-error
                    (session.endDate ? new Date(session.endDate) >= new Date(this.filters.endDate.from) : true);
                const endDateMatchTo =
                    !this.filters.endDate.to ||
                    // @ts-expect-error
                    (session.endDate ? new Date(session.endDate) <= new Date(this.filters.endDate.to) : false);
                return endDateMatchFrom && endDateMatchTo;
            };

            const filteredSessions = this.sessions.filter(
                (session) =>
                    matchesStatus(session) &&
                    matchesSearch(session) &&
                    matchesMooc(session) &&
                    matchesStartDate(session) &&
                    matchesEndDate(session),
            );

            const sortSessions = (sessions: MoocSession[]) => {
                switch (this.filters.sortBy) {
                    case 'name':
                        return sessions.sort((a, b) => a.title.localeCompare(b.title));
                    case 'enrollments':
                        return sessions.sort(
                            (a, b) => Number(b.totalEnrollments ?? 0) - Number(a.totalEnrollments ?? 0),
                        );
                    case 'status':
                        const statusOrder = ['open', 'archived', 'closed'];
                        return sessions.sort(
                            (a, b) =>
                                // @ts-expect-error
                                statusOrder.indexOf(this.getSessionStatus(a)) -
                                // @ts-expect-error
                                statusOrder.indexOf(this.getSessionStatus(b)),
                        );
                    case 'start':
                        return sessions.sort(
                            // @ts-expect-error
                            (a, b) => new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
                        );
                    case 'end':
                        return sessions.sort((a, b) => {
                            const dateA = a.endDate ? new Date(a.endDate).getTime() : Infinity;
                            const dateB = b.endDate ? new Date(b.endDate).getTime() : Infinity;
                            return dateA - dateB;
                        });
                    default:
                        return sessions;
                }
            };

            return sortSessions(filteredSessions);
        },

        pinnedMoocs(): Mooc[] {
            const pinnedMoocs = this.filteredMoocs.filter((mooc) => {
                const user = useUser();

                return mooc.pinnedBy.some((pinnedBy) => pinnedBy.userId === user.value?.id);
            });

            return pinnedMoocs.sort((a, b) => (a.title > b.title ? 1 : -1));
        },

        unpinnedMoocs(): Mooc[] {
            const unpinnedMoocs = this.filteredMoocs.filter((mooc) => {
                const user = useUser();

                return !mooc.pinnedBy.some((pinnedBy) => pinnedBy.userId === user.value?.id);
            });

            return unpinnedMoocs.sort((a, b) => (a.title > b.title ? 1 : -1));
        },
    },

    actions: {
        async fetchMoocs() {
            const { data, error } = await fetchMoocs();
            if (!error && data) this.moocs = data;
        },

        async pin(moocId: string, pinned: boolean) {
            const { data, error } = await pinMooc(moocId, pinned);

            if (error) {
                toast.error("Erreur lors de l'épinglage du MOOC");
            } else if (data) {
                const mooc = this.moocs.find((mooc) => mooc.id === moocId);
                if (mooc) mooc.pinnedBy = data.pinnedBy ?? [];

                if (!pinned) toast.info('MOOC ajouté aux favoris');
                else toast.warning('MOOC retiré des favoris');
            }
        },

        getSessionStatus(session: MoocSession): 'open' | 'closed' | 'archived' {
            if (this.isSessionEnded(session)) {
                return 'closed';
            } else {
                if (session.sessionName === 'archiveouvert') {
                    return 'archived';
                } else {
                    return 'open';
                }
            }
        },

        isSessionEnded(session: MoocSession) {
            if (!session.endDate) return false;

            return new Date(session.endDate) < new Date();
        },

        reset() {
            this.moocs = [];
            this.filters.search = '';
        },

        resetFilters() {
            this.filters = {
                search: '',
                sortBy: 'name',
                status: new Set(),
                moocs: new Set(),
                startDate: {},
                endDate: {},
            };
        },
    },
});
