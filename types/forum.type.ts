export interface ForumInfo {
    title: string;
    users: number;
    posts: number;
    topics: number;
    moderators: ForumUserInfo[];
    admins: ForumUserInfo[];
}

export interface ForumUserInfo {
    name?: string;
    username: string;
    avatar: string;
    title?: string;
}

export interface DiscourseForumUserInfo {
    name?: string;
    username: string;
    avatar_template: string;
    title?: string;
}
