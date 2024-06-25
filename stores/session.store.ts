import type { GradeReport, Mooc, Session } from '~/types';
import { fetchGradeReport, fetchSessionById } from '~/services/sessions.service';
import { isUserActive, isUserCurious } from '~/utils';
import { postEnrollments } from '~/services/files.service';

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
            console.log('before if')
            if (!this.session.data?.enrollmentsDetails) return undefined;
            
            return this.session.data.enrollmentsDetails.reduce((acc, { enrollments }) => acc + enrollments, 0) ?? 0;
        },
    
        totalActive(): number | undefined {
            if (!this.gradeReport.data) return undefined;
            
            return this.gradeReport.data.gradeReportLines.filter(isUserActive).length
        },
        
        totalCurious(): number | undefined {
            if (!this.gradeReport.data) return undefined;
            
            return this.gradeReport.data.gradeReportLines.filter(isUserCurious).length
        },
        
        totalEligible(): number | undefined {
            if (!this.gradeReport.data) return undefined;
            
            return this.gradeReport.data.gradeReportLines.filter(line => line.certificateEligible === 'Y').length
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
            this.gradeReport.loading = true
            this.gradeReport.data = await fetchGradeReport(id);
            this.gradeReport.loading = false;
        },
        
        async addEnrollmentsReport(body: FormData) {
            if (!this.session.data) return;
            
            const updatedSession = await postEnrollments(body, this.session.data.id)
            this.session.data.enrollmentsDetails = updatedSession.enrollmentsDetails;
        }
    }
})