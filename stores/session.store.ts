import type { GradeReport, Mooc, Session } from '~/types';
import { fetchGradeReport, fetchSessionById } from '~/services/sessions.service';
import { postEnrollments, postGradeReports } from '~/services/files.service';
import { useToast } from '~/components/ui/toast';
import { formatDate, getParsedDate } from '~/utils';

interface SessionDetails extends Session {
    mooc: Mooc;
}

interface SessionState {
    session: {
        data: SessionDetails | null;
        loading: boolean;
    },
    gradeReport: {
        data: GradeReport | null;
        loading: boolean;
    }
}

export const useSession = defineStore('session', {
    state: (): SessionState => ({
        session: { data: null, loading: false },
        gradeReport: { data: null, loading: false }
    }),
    
    getters: {
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
        }
    },
    
    actions: {
        async getSession(id: string) {
            this.session.data = null
            this.gradeReport.data = null
            this.session.loading = true
            this.session.data = await fetchSessionById(id);
            this.session.loading = false;
            
            if (this.session.data.gradeReports && this.session.data.gradeReports.length) {
                const lastGradeReport = this.session.data.gradeReports[this.session.data.gradeReports.length - 1];
                this.getGradeReport(lastGradeReport.id);
            }
        },
        
        async getGradeReport(id: string) {
            console.time('getGradeReport')
            this.gradeReport.loading = true
            this.gradeReport.data = await fetchGradeReport(id);
            this.gradeReport.loading = false;
            console.timeEnd('getGradeReport')
        },
        
        async addEnrollmentsReport(body: FormData) {
            if (!this.session.data) return;
            const { toast } = useToast();
            
            const updatedSession = await postEnrollments(body, this.session.data.id)
            
            if (!updatedSession) {
                
                toast({
                    title: 'Erreur',
                    description: 'Erreur lors de l\'envoi du rapport d\'inscriptions',
                    variant: 'destructive'
                });
                
                return;
            }
            
            this.session.data.enrollmentsDetails = updatedSession.enrollmentsDetails;
            toast({
                title: 'Succès',
                description: 'Rapport d\'inscriptions correctement envoyé',
            })
        },
        
        async addGradeReports(body: FormData){
            console.time('addGradeReports');
            if (!this.session.data) return;
            const { toast } = useToast();
            
            const updatedSession = await postGradeReports(body, this.session.data.id);
            
            if (!updatedSession) {
                toast({
                    title: 'Erreur',
                    description: 'Erreur lors de l\'envoi du rapport de notes',
                    variant: 'destructive'
                });
                
                return
            }
            if (!this.session.data.gradeReports) this.session.data.gradeReports = [];
            
            this.session.data.gradeReports.push(updatedSession.gradeReports[updatedSession.gradeReports.length - 1]);
            const lastGradeReport = this.session.data.gradeReports[this.session.data.gradeReports.length - 1];
            await this.getGradeReport(lastGradeReport.id);
            toast({
                title: 'Succès',
                description: 'Rapport de notes correctement envoyé',
            })
            console.timeEnd('addGradeReports');
        }
    }
    
})