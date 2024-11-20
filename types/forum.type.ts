export interface ForumInfo {
    title: string;
    users: number;
    posts: number;
    topics: number;
    moderators: {
        name?: string;
        username: string;
        avatar: string;
        title?: string;
    }[],
    admins: {
        name?: string;
        username: string;
        avatar: string;
        title?: string;
    }[]
}
