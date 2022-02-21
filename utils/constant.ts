import { Email, Github, Twitter, Website } from "../public/svg";
import { HomeCardProps } from "../types/index";
import { UserInfoProps } from "../types/index";

export const LevelColors: any = {
    1: "text-fuchsia-500",
    2: "text-fuchsia-400",
    3: "text-fuchsia-300",
};

export const panelColors: string[] = [
    // "#fdf4ff",
    // "#fae8ff",
    // "#f5d0fe",
    // "#f0abfc",
    // "#e879f9",
    // "#d946ef",
    // "#c026d3",
    // "#a21caf",
    // "#86198f",
    // "#701a75",
    "#ebedf0",
    "#9be9a8",
    "#40c463",
    "#30a14e",
    "#216e39",
];

export const CardDataList: HomeCardProps[] = [
    {
        title: "Github Resume",
        // url: `https://github.com/login/oauth/authorize?client_id=${config.client_id}&scope=${config.scope}&redirect_uri=${config.redirect_uri}`,
        url: "/loginGithub",
        desc: "Generate resume by your github message.",
    },
    {
        title: "Couplet",
        url: "/couplet",
        desc: "Happy New Year !",
    },
    {
        title: "Blog",
        url: "https://blog.shuaxindiary.cn",
        desc: "My blog",
    },
    // {
    //   title: "Github",
    //   url: "https://github.com/SHUAXINDIARY",
    //   desc: "My Github",
    // },
    {
        title: "Stella",
        url: "https://stella.shuaxinjs.cn/about/",
        desc: "vuepress-theme",
    },
];

export const api = {
    baseUrl:
        process.env.NODE_ENV === "production"
            ? "https://toy.shuaxinjs.cn"
            : "http://localhost:3000",
    getToken: "/api/getToken",
    getContributionForServer:
        "https://github-contributions-api.jogruber.de/v4/",
    getContributionForClient: "/api/contribution",
    getResumeData: "/api/getResumeData",
};

// github部分语言和devicon的不一样
export const githubToDevicon: any = {
    scss: "sass",
    shell: "bash",
    go: "go",
};

export const basicInfo = (userInfo: UserInfoProps) => {
    return [
        {
            icon: Email,
            // link: userInfo?.email,
            hover: "Email:" + userInfo?.email,
            callBack: async () => {
                try {
                    const copyObj = await navigator.clipboard;
                    await copyObj.writeText(userInfo?.email || "");
                    alert("复制邮箱地址成功");
                } catch (error) {
                    console.log(error);
                }
            },
        },
        {
            icon: Website,
            link: userInfo?.blog,
            hover: "WebSite",
        },
        {
            icon: Twitter,
            link: `https://twitter.com/${userInfo?.twitter_username}`,
            hover: "Twitter",
        },
        {
            icon: Github,
            link: userInfo?.html_url,
            hover: "Github",
        },
    ];
};
