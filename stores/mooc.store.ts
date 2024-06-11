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
    
    actions: {
        async fetchMooc() {
            const enrollments = await fetchEnrollments();
            this.mooc = { enrollments }
            this.mooc.gradeReport = await fetchGradeReport();
        }
    }
})