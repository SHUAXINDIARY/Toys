import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export type LayoutType = {
    getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
    Component: {
        getLayout?: (page: ReactElement) => ReactNode;
    };
};

// devicon style
export enum IconStyle {
    LINE = "line",
    LINEWORDMARK = "line-wordmark",
    PLAIN = "plain",
    PLAINWORDMARK = "plain-wordmark",
}

export type LanguageIcon = {
    style?: IconStyle | string;
    language: string;
    colored?: boolean;
};

export type HomeCardProps = {
    title: string;
    url: string;
    desc?: string;
    openNewTag?: Boolean;
};

export type UserInfoProps = {
    login?: string;
    name?: string;
    avatar_url?: string;
    followers?: number;
    followers_url?: string;
    following?: number;
    following_url?: string;
    blog?: string;
    company?: string;
    twitter_username?: string;
    public_repos?: number;
    // github url
    html_url?: string;
    // 签名
    bio?: string;
    email?: string;
    location?: string;
    // join date
    created_at?: string;
    // last update date
    updated_at?: string;
};

export type RepoProps = {
    name?: string;
    description?: string;
    stargazers_count?: number;
    html_url?: string;
};

export type FollowProps = {
    avatar_url: string;
    // github homepage url
    html_url: string;
    name?: string;
};

export type ResumeProps = {
    userInfo?: UserInfoProps;
    language?: LanguageIcon[];
    topRepo?: RepoProps[];
    starList?: any[];
    followList?: FollowProps[];
    token?: string;
};

export type QiniuItem = {
    key: string;
    hash: string;
    fsize: number;
    md5: string;
    putTime: number;
};

export type QiniuData = {
    data: QiniuItem[];
    total: number;
    dist: string[];
};
