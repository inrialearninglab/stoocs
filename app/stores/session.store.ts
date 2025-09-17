import type { GradeReport, Mooc, Session, ForumInfo } from '~/types';
import { fetchGradeReport, fetchSessionById, fetchForumInfo, linkForum } from '~/services/sessions.service';
import { postEnrollments, postGradeReports } from '~/services/files.service';
import { formatDate, getParsedDate } from '~/utils';
import { toast } from 'vue-sonner';

interface SessionDetails extends Session {
    mooc: Mooc;
}

interface SessionState {
    session: {
        data: SessionDetails | null;
        loading: boolean;
    };
    gradeReport: {
        data: GradeReport | null;
        loading: boolean;
    };
    forum: {
        data: ForumInfo | null;
        loading: boolean;
    };
}

export const useSession = defineStore('session', {
    state: (): SessionState => ({
        session: { data: null, loading: true },
        gradeReport: { data: null, loading: false },
        forum: { data: null, loading: true },
    }),

    getters: {
        /**
         * Get the number of users from the enrollments report
         */
        totalEnrollments(): number | undefined {
            if (!this.session.data?.enrollmentsDetails) return undefined;

            return this.session.data.enrollmentsDetails.reduce((acc, { enrollments }) => acc + enrollments, 0) ?? 0;
        },

        totalActive(): number | undefined {
            if (!this.gradeReport.data) return undefined;

            return this.gradeReport.data.totalActive;
        },

        totalCurious(): number | undefined {
            if (!this.gradeReport.data) return undefined;

            return this.gradeReport.data.totalCurious;
        },

        totalEligible(): number | undefined {
            if (!this.gradeReport.data) return undefined;

            return this.gradeReport.data.totalEligible;
        },

        /**
         * Get the number of users from the grade report & problem grade report
         */
        totalUsers(): number | undefined {
            if (!this.gradeReport.data) return undefined;

            return this.gradeReport.data.totalUsers;
        },

        enrollmentsReportDate(): string | undefined {
            if (!this.session.data?.enrollmentsDetails) return undefined;

            const date = this.session.data.enrollmentsDetails.pop()?.date;

            if (!date) return undefined;

            return formatDate(getParsedDate(date));
        },

        gradeReportDate(): string | undefined {
            if (!this.gradeReport.data) return undefined;

            const date = this.gradeReport.data.date.toString().split('T')[0];

            return formatDate(getParsedDate(date));
        },

        isMoocPinned(): boolean {
            const user = useUser();
            if (!this.session.data) return false;

            return this.session.data.mooc.pinnedBy.some((pinned) => pinned.userId === user.value?.id);
        },
    },

    actions: {
        async getSession(id: string) {
            this.session.loading = true;
            this.forum.loading = true;

            this.session.data = null;
            this.gradeReport.data = null;
            this.forum.data = null;
            const { data, error } = await fetchSessionById(id);
            if (!error && data) this.session.data = data;
            this.session.loading = false;

            if (this.session?.data?.gradeReports && this.session.data.gradeReports.length) {
                const lastGradeReport = this.session.data.gradeReports[this.session.data.gradeReports.length - 1];
                this.getGradeReport(lastGradeReport.id);
            }

            const { data: forumData, error: forumError } = await fetchForumInfo(id);

            if (forumData && !forumError) {
                this.forum.data = forumData;
            }
            this.forum.loading = false;
        },

        async linkForum(instanceName: string, apiKey: string) {
            if (!this.session?.data?.id) return;

            this.forum.loading = true;
            const { data, error } = await linkForum(apiKey, this.session.data.id, instanceName);

            if (data && !error) {
                this.forum.data = data;
                toast.success('Forum ajouté avec succès');
            } else {
                toast.error("Une erreur est survenue lors de l'ajout du forum");
            }
            this.forum.loading = false;
        },

        async getGradeReport(id: string) {
            this.gradeReport.loading = true;
            const { data, error } = await fetchGradeReport(id);
            if (!error && data) this.gradeReport.data = data;
            this.gradeReport.loading = false;
        },

        async addEnrollmentsReport(body: FormData) {
            if (!this.session.data) return;

            const { data, error } = await postEnrollments(body, this.session.data.id);

            if (error) {
                toast.error("Erreur lors de l'envoi du rapport d'inscription");
            } else if (data) {
                this.session.data.enrollmentsDetails = data.enrollmentsDetails;
                toast.success("Rapport d'inscription envoyé");
            }
        },

        async addGradeReports(body: FormData) {
            console.time('addGradeReports');
            if (!this.session.data) return;

            const { data, error } = await postGradeReports(body, this.session.data.id);

            if (error) {
                toast.error("Erreur lors de l'envoi des rapports de notes");

                return;
            } else if (data && data.gradeReports) {
                if (!this.session.data.gradeReports) this.session.data.gradeReports = [];

                this.session.data.gradeReports.push(data.gradeReports[data.gradeReports.length - 1]);
                const lastGradeReport = this.session.data.gradeReports[this.session.data.gradeReports.length - 1];
                await this.getGradeReport(lastGradeReport.id);

                toast.success('Rapports de notes envoyés');

                console.timeEnd('addGradeReports');
            }
        },

        reset() {
            this.session = { data: null, loading: true };
            this.gradeReport = { data: null, loading: false };
        },
    },
});
