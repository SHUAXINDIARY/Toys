import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export enum STATUS {
    // 运行中
    RUNING = "running",
    // 装修中
    RENOVATED = "renovated",
}

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
    // 打开新标签页
    openNewTag?: Boolean;
    status?: STATUS;
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
    // 上传时间
    putTime: number;
    // 资源url
    url: string;
    // 图片所在目录
    currentDist?: string;
};

export type QiniuData = {
    // 所有指定目录下的照片
    data: QiniuItem[];
    // 照片总数
    total: number;
    // 所有目录
    dist: string[];
    // 服务端下发的所有目录和对应数据的映射
    dataMap?: Record<string, QiniuItem[]>;
    // 所有数据
    allData?: QiniuItem;
};

export interface AlbumHomeProps {
    handleOpenAlbum: (distName: string) => void;
    dataMap?: any;
}

export type CommObj = Record<string, any>;
