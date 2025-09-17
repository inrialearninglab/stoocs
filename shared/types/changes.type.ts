export interface CoursesChanges {
    deletions: {
        courseNumber: string;
        title: string;
    }[];
    updates: {
        courseNumber: string;
        title: {
            old: string;
            new: string;
        };
        organization: {
            old: string;
            new: string;
        };
    }[];
    insertions: {
        courseNumber: string;
        title: string;
        organization: string;
    }[];
}

export interface SessionsChanges {
    deletions: {
        mooc: {
            courseNumber: string;
            title: string;
        };
        sessionName: string;
    }[];
    updates: {
        courseNumber: string;
        title: string;
        sessionName: string;
        startDate: {
            old: string;
            new: string;
        };
        endDate: {
            old: string;
            new: string;
        };
        cutoffs: {
            old: string;
            new: string;
        };
        url: {
            old: string;
            new: string;
        };
    }[];
    insertions: {
        courseNumber: string;
        title: string;
        sessionName: string;
        startDate: string;
        endDate: string;
        cutoffs: string;
        url: string;
    }[];
}
