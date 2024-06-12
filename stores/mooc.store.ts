import type { Mooc } from '~/types';
import { defineStore } from 'pinia';
import { fetchEnrollments } from '~/services/enrollments.service';
import { fetchGradeReport } from '~/services/gradeReport.service';

interface MoocState {
    mooc: Mooc | null;
}

export const useMooc = defineStore('mooc', {
    state: (): MoocState => ({
        mooc: null
    }),
    
    getters: {
        totalEnrollments(): number | undefined {
            if (!this.mooc?.enrollments) return undefined;
            
            return this.mooc.enrollments.reduce((acc, { enrollments }) => acc + enrollments, 0) ?? 0;
        },
        
        totalActive(): number | undefined {
            if (!this.mooc || !this.mooc.gradeReport) return undefined;
            
            let activeUsers = 0;
            for (const line of this.mooc.gradeReport.report) {
                if (line.problemGradeReport.some(item => item.possible)) activeUsers++;
            }
            
            return activeUsers;
        },
        
        totalCurious(): number | undefined {
            if (!this.mooc || !this.mooc.gradeReport) return undefined;
            
            let curiousUsers = 0;
            for (const line of this.mooc.gradeReport.report) {
                if (line.problemGradeReport.some(item => item.possible !== undefined)) curiousUsers++;
            }
            
            return curiousUsers;
        },
        
        totalEligible(): number | undefined {
            if (!this.mooc || !this.mooc.gradeReport) return undefined;
            
            return this.mooc.gradeReport.report.filter(line => line.certificateEligible === 'Y').length;
        }
    },
    
    actions: {
        async fetchMooc() {
            const enrollments = await fetchEnrollments();
            this.mooc = { enrollments }
            this.mooc.gradeReport = await fetchGradeReport();
        },
    }
})