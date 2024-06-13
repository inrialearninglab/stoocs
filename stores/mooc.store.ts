import type { Mooc } from '~/types';
import { defineStore } from 'pinia';
import { fetchEnrollments } from '~/services/enrollments.service';
import { fetchGradeReport } from '~/services/gradeReport.service';
import { isUserActive, isUserCurious } from '~/utils';

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
            
            return this.mooc.gradeReport.report.filter(isUserActive).length;
        },
        
        totalCurious(): number | undefined {
            if (!this.mooc || !this.mooc.gradeReport) return undefined;
            
            return this.mooc.gradeReport.report.filter(isUserCurious).length;
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