enum EUserType {
    USER = 'User',
    ORGANIZATION = 'Organization',
}

export interface IGibthubUserInfo {
    avatar_url: string;
    bio: string;
    blog: string;
    company: string | null;
    email: string | null;
    followers: number;
    following: number;
    hireable: boolean | null;
    id: number;
    location: string;
    login: string;
    name: string;
    public_repos: number;
    twitter_username: string | null;
    type: EUserType;
    url: string;
}
