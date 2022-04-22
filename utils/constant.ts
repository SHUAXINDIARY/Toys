import { Email, Github, Twitter, Website } from "../public/svg";
import { HomeCardProps, UserInfoProps } from "../types/index";

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
        url: "https://shuaxindiary.cn",
        desc: "My blog",
        openNewTag: true,
    },
    {
        title: "Album",
        url: "/album",
        desc: "photo album",
    },
    {
        title: "Stella",
        url: "https://stella.shuaxinjs.cn/about/",
        desc: "vuepress-theme",
        openNewTag: true,
    },
    {
        title: "JsonEdit",
        url: "/jsonEdit",
        desc: "Structural diff for JSON files",
        openNewTag: true,
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
    getImgList: "/api/getImgList",
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
            hover: `Email：${userInfo?.email}`,
            link: "mailto:shuaxinjs@qq.com?subject=advice",
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

export const mockData: any = {
    userInfo: {
        login: "SHUAXINDIARY",
        id: 32100575,
        node_id: "MDQ6VXNlcjMyMTAwNTc1",
        avatar_url: "https://avatars.githubusercontent.com/u/32100575?v=4",
        gravatar_id: "",
        url: "https://api.github.com/users/SHUAXINDIARY",
        html_url: "https://github.com/SHUAXINDIARY",
        followers_url: "https://api.github.com/users/SHUAXINDIARY/followers",
        following_url:
            "https://api.github.com/users/SHUAXINDIARY/following{/other_user}",
        gists_url: "https://api.github.com/users/SHUAXINDIARY/gists{/gist_id}",
        starred_url:
            "https://api.github.com/users/SHUAXINDIARY/starred{/owner}{/repo}",
        subscriptions_url:
            "https://api.github.com/users/SHUAXINDIARY/subscriptions",
        organizations_url: "https://api.github.com/users/SHUAXINDIARY/orgs",
        repos_url: "https://api.github.com/users/SHUAXINDIARY/repos",
        events_url:
            "https://api.github.com/users/SHUAXINDIARY/events{/privacy}",
        received_events_url:
            "https://api.github.com/users/SHUAXINDIARY/received_events",
        type: "User",
        site_admin: false,
        name: "SHUAXIN",
        company: null,
        blog: "https://toy.shuaxinjs.cn/",
        location: "Beijing",
        email: "shuaxinjs@qq.com",
        hireable: null,
        bio: "Ordinary Software Engineer（FE now）\r\n\r\nkeep curiosity",
        twitter_username: "qq_tf",
        public_repos: 54,
        public_gists: 1,
        followers: 26,
        following: 94,
        created_at: "2017-09-19T13:46:29Z",
        updated_at: "2022-02-28T17:00:35Z",
    },
    language: [
        {
            style: "plain",
            language: "javascript",
            colored: true,
        },
        {
            style: "plain",
            language: "html5",
            colored: true,
        },
        {
            style: "plain",
            language: "css3",
            colored: true,
        },
        {
            style: "plain",
            language: "typescript",
            colored: true,
        },
        {
            style: "plain",
            language: "bash",
            colored: true,
        },
        {
            style: "plain",
            language: "sass",
            colored: true,
        },
    ],
    topRepo: [
        {
            html_url: "https://github.com/SHUAXINDIARY/vuepress-theme-stella",
            name: "vuepress-theme-stella",
            description: "vuepress-theme-stella",
            stargazers_count: 10,
        },
        {
            html_url: "https://github.com/SHUAXINDIARY/Toys",
            name: "Toys",
            description: "Some interesting attempts for me",
            stargazers_count: 5,
        },
        {
            html_url: "https://github.com/SHUAXINDIARY/Weibo-plugin",
            name: "Weibo-plugin",
            description: "批量删除微博的Chrome扩展",
            stargazers_count: 3,
        },
    ],
    starList: [
        {
            id: 54994103,
            node_id: "MDEwOlJlcG9zaXRvcnk1NDk5NDEwMw==",
            name: "floating-ui",
            full_name: "floating-ui/floating-ui",
            private: false,
            owner: {
                login: "floating-ui",
                id: 58035617,
                node_id: "MDEyOk9yZ2FuaXphdGlvbjU4MDM1NjE3",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/58035617?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/floating-ui",
                html_url: "https://github.com/floating-ui",
                followers_url:
                    "https://api.github.com/users/floating-ui/followers",
                following_url:
                    "https://api.github.com/users/floating-ui/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/floating-ui/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/floating-ui/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/floating-ui/subscriptions",
                organizations_url:
                    "https://api.github.com/users/floating-ui/orgs",
                repos_url: "https://api.github.com/users/floating-ui/repos",
                events_url:
                    "https://api.github.com/users/floating-ui/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/floating-ui/received_events",
                type: "Organization",
                site_admin: false,
            },
            html_url: "https://github.com/floating-ui/floating-ui",
            description:
                "A low-level toolkit to position floating elements while intelligently keeping them in view. Tooltips, popovers, dropdowns, menus, and more",
            fork: false,
            url: "https://api.github.com/repos/floating-ui/floating-ui",
            forks_url:
                "https://api.github.com/repos/floating-ui/floating-ui/forks",
            keys_url:
                "https://api.github.com/repos/floating-ui/floating-ui/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/floating-ui/floating-ui/collaborators{/collaborator}",
            teams_url:
                "https://api.github.com/repos/floating-ui/floating-ui/teams",
            hooks_url:
                "https://api.github.com/repos/floating-ui/floating-ui/hooks",
            issue_events_url:
                "https://api.github.com/repos/floating-ui/floating-ui/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/floating-ui/floating-ui/events",
            assignees_url:
                "https://api.github.com/repos/floating-ui/floating-ui/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/floating-ui/floating-ui/branches{/branch}",
            tags_url:
                "https://api.github.com/repos/floating-ui/floating-ui/tags",
            blobs_url:
                "https://api.github.com/repos/floating-ui/floating-ui/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/floating-ui/floating-ui/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/floating-ui/floating-ui/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/floating-ui/floating-ui/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/floating-ui/floating-ui/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/floating-ui/floating-ui/languages",
            stargazers_url:
                "https://api.github.com/repos/floating-ui/floating-ui/stargazers",
            contributors_url:
                "https://api.github.com/repos/floating-ui/floating-ui/contributors",
            subscribers_url:
                "https://api.github.com/repos/floating-ui/floating-ui/subscribers",
            subscription_url:
                "https://api.github.com/repos/floating-ui/floating-ui/subscription",
            commits_url:
                "https://api.github.com/repos/floating-ui/floating-ui/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/floating-ui/floating-ui/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/floating-ui/floating-ui/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/floating-ui/floating-ui/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/floating-ui/floating-ui/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/floating-ui/floating-ui/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/floating-ui/floating-ui/merges",
            archive_url:
                "https://api.github.com/repos/floating-ui/floating-ui/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/floating-ui/floating-ui/downloads",
            issues_url:
                "https://api.github.com/repos/floating-ui/floating-ui/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/floating-ui/floating-ui/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/floating-ui/floating-ui/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/floating-ui/floating-ui/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/floating-ui/floating-ui/labels{/name}",
            releases_url:
                "https://api.github.com/repos/floating-ui/floating-ui/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/floating-ui/floating-ui/deployments",
            created_at: "2016-03-29T17:00:47Z",
            updated_at: "2022-03-03T23:40:50Z",
            pushed_at: "2022-03-03T13:24:11Z",
            git_url: "git://github.com/floating-ui/floating-ui.git",
            ssh_url: "git@github.com:floating-ui/floating-ui.git",
            clone_url: "https://github.com/floating-ui/floating-ui.git",
            svn_url: "https://github.com/floating-ui/floating-ui",
            homepage: "https://floating-ui.com",
            size: 15176,
            stargazers_count: 20071,
            watchers_count: 20071,
            language: "TypeScript",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: false,
            has_pages: false,
            forks_count: 1298,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 18,
            license: {
                key: "mit",
                name: "MIT License",
                spdx_id: "MIT",
                url: "https://api.github.com/licenses/mit",
                node_id: "MDc6TGljZW5zZTEz",
            },
            allow_forking: true,
            is_template: false,
            topics: [
                "dropdown",
                "hacktoberfest",
                "popover",
                "popovers",
                "position",
                "positioning",
                "positioning-engine",
                "tooltip",
                "tooltip-position",
            ],
            visibility: "public",
            forks: 1298,
            open_issues: 18,
            watchers: 20071,
            default_branch: "master",
            permissions: {
                admin: false,
                maintain: false,
                push: false,
                triage: false,
                pull: true,
            },
        },
        {
            id: 90916769,
            node_id: "MDEwOlJlcG9zaXRvcnk5MDkxNjc2OQ==",
            name: "Anime-Girls-Holding-Programming-Books",
            full_name: "cat-milk/Anime-Girls-Holding-Programming-Books",
            private: false,
            owner: {
                login: "cat-milk",
                id: 43044190,
                node_id: "MDQ6VXNlcjQzMDQ0MTkw",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/43044190?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/cat-milk",
                html_url: "https://github.com/cat-milk",
                followers_url:
                    "https://api.github.com/users/cat-milk/followers",
                following_url:
                    "https://api.github.com/users/cat-milk/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/cat-milk/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/cat-milk/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/cat-milk/subscriptions",
                organizations_url: "https://api.github.com/users/cat-milk/orgs",
                repos_url: "https://api.github.com/users/cat-milk/repos",
                events_url:
                    "https://api.github.com/users/cat-milk/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/cat-milk/received_events",
                type: "User",
                site_admin: false,
            },
            html_url:
                "https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books",
            description: "Anime Girls Holding Programming Books",
            fork: false,
            url: "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books",
            forks_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/forks",
            keys_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/collaborators{/collaborator}",
            teams_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/teams",
            hooks_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/hooks",
            issue_events_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/issues/events{/number}",
            events_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/events",
            assignees_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/branches{/branch}",
            tags_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/tags",
            blobs_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/languages",
            stargazers_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/stargazers",
            contributors_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/contributors",
            subscribers_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/subscribers",
            subscription_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/subscription",
            commits_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/compare/{base}...{head}",
            merges_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/merges",
            archive_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/downloads",
            issues_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/labels{/name}",
            releases_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/cat-milk/Anime-Girls-Holding-Programming-Books/deployments",
            created_at: "2017-05-10T23:23:32Z",
            updated_at: "2022-03-04T00:19:30Z",
            pushed_at: "2022-03-03T21:12:25Z",
            git_url:
                "git://github.com/cat-milk/Anime-Girls-Holding-Programming-Books.git",
            ssh_url:
                "git@github.com:cat-milk/Anime-Girls-Holding-Programming-Books.git",
            clone_url:
                "https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books.git",
            svn_url:
                "https://github.com/cat-milk/Anime-Girls-Holding-Programming-Books",
            homepage: null,
            size: 356086,
            stargazers_count: 10636,
            watchers_count: 10636,
            language: null,
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 546,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 12,
            license: null,
            allow_forking: true,
            is_template: false,
            topics: ["anime"],
            visibility: "public",
            forks: 546,
            open_issues: 12,
            watchers: 10636,
            default_branch: "master",
            permissions: {
                admin: false,
                maintain: false,
                push: false,
                triage: false,
                pull: true,
            },
        },
        {
            id: 120965715,
            node_id: "MDEwOlJlcG9zaXRvcnkxMjA5NjU3MTU=",
            name: "polacode",
            full_name: "octref/polacode",
            private: false,
            owner: {
                login: "octref",
                id: 4033249,
                node_id: "MDQ6VXNlcjQwMzMyNDk=",
                avatar_url:
                    "https://avatars.githubusercontent.com/u/4033249?v=4",
                gravatar_id: "",
                url: "https://api.github.com/users/octref",
                html_url: "https://github.com/octref",
                followers_url: "https://api.github.com/users/octref/followers",
                following_url:
                    "https://api.github.com/users/octref/following{/other_user}",
                gists_url:
                    "https://api.github.com/users/octref/gists{/gist_id}",
                starred_url:
                    "https://api.github.com/users/octref/starred{/owner}{/repo}",
                subscriptions_url:
                    "https://api.github.com/users/octref/subscriptions",
                organizations_url: "https://api.github.com/users/octref/orgs",
                repos_url: "https://api.github.com/users/octref/repos",
                events_url:
                    "https://api.github.com/users/octref/events{/privacy}",
                received_events_url:
                    "https://api.github.com/users/octref/received_events",
                type: "User",
                site_admin: false,
            },
            html_url: "https://github.com/octref/polacode",
            description: "📸 Polaroid for your code",
            fork: false,
            url: "https://api.github.com/repos/octref/polacode",
            forks_url: "https://api.github.com/repos/octref/polacode/forks",
            keys_url:
                "https://api.github.com/repos/octref/polacode/keys{/key_id}",
            collaborators_url:
                "https://api.github.com/repos/octref/polacode/collaborators{/collaborator}",
            teams_url: "https://api.github.com/repos/octref/polacode/teams",
            hooks_url: "https://api.github.com/repos/octref/polacode/hooks",
            issue_events_url:
                "https://api.github.com/repos/octref/polacode/issues/events{/number}",
            events_url: "https://api.github.com/repos/octref/polacode/events",
            assignees_url:
                "https://api.github.com/repos/octref/polacode/assignees{/user}",
            branches_url:
                "https://api.github.com/repos/octref/polacode/branches{/branch}",
            tags_url: "https://api.github.com/repos/octref/polacode/tags",
            blobs_url:
                "https://api.github.com/repos/octref/polacode/git/blobs{/sha}",
            git_tags_url:
                "https://api.github.com/repos/octref/polacode/git/tags{/sha}",
            git_refs_url:
                "https://api.github.com/repos/octref/polacode/git/refs{/sha}",
            trees_url:
                "https://api.github.com/repos/octref/polacode/git/trees{/sha}",
            statuses_url:
                "https://api.github.com/repos/octref/polacode/statuses/{sha}",
            languages_url:
                "https://api.github.com/repos/octref/polacode/languages",
            stargazers_url:
                "https://api.github.com/repos/octref/polacode/stargazers",
            contributors_url:
                "https://api.github.com/repos/octref/polacode/contributors",
            subscribers_url:
                "https://api.github.com/repos/octref/polacode/subscribers",
            subscription_url:
                "https://api.github.com/repos/octref/polacode/subscription",
            commits_url:
                "https://api.github.com/repos/octref/polacode/commits{/sha}",
            git_commits_url:
                "https://api.github.com/repos/octref/polacode/git/commits{/sha}",
            comments_url:
                "https://api.github.com/repos/octref/polacode/comments{/number}",
            issue_comment_url:
                "https://api.github.com/repos/octref/polacode/issues/comments{/number}",
            contents_url:
                "https://api.github.com/repos/octref/polacode/contents/{+path}",
            compare_url:
                "https://api.github.com/repos/octref/polacode/compare/{base}...{head}",
            merges_url: "https://api.github.com/repos/octref/polacode/merges",
            archive_url:
                "https://api.github.com/repos/octref/polacode/{archive_format}{/ref}",
            downloads_url:
                "https://api.github.com/repos/octref/polacode/downloads",
            issues_url:
                "https://api.github.com/repos/octref/polacode/issues{/number}",
            pulls_url:
                "https://api.github.com/repos/octref/polacode/pulls{/number}",
            milestones_url:
                "https://api.github.com/repos/octref/polacode/milestones{/number}",
            notifications_url:
                "https://api.github.com/repos/octref/polacode/notifications{?since,all,participating}",
            labels_url:
                "https://api.github.com/repos/octref/polacode/labels{/name}",
            releases_url:
                "https://api.github.com/repos/octref/polacode/releases{/id}",
            deployments_url:
                "https://api.github.com/repos/octref/polacode/deployments",
            created_at: "2018-02-09T23:10:07Z",
            updated_at: "2022-03-03T11:27:18Z",
            pushed_at: "2021-10-07T10:10:32Z",
            git_url: "git://github.com/octref/polacode.git",
            ssh_url: "git@github.com:octref/polacode.git",
            clone_url: "https://github.com/octref/polacode.git",
            svn_url: "https://github.com/octref/polacode",
            homepage:
                "https://marketplace.visualstudio.com/items?itemName=pnp.polacode",
            size: 26618,
            stargazers_count: 6568,
            watchers_count: 6568,
            language: "JavaScript",
            has_issues: true,
            has_projects: true,
            has_downloads: true,
            has_wiki: true,
            has_pages: false,
            forks_count: 210,
            mirror_url: null,
            archived: false,
            disabled: false,
            open_issues_count: 68,
            license: null,
            allow_forking: true,
            is_template: false,
            topics: ["screenshot", "snippets", "visual-studio-code", "vscode"],
            visibility: "public",
            forks: 210,
            open_issues: 68,
            watchers: 6568,
            default_branch: "master",
            permissions: {
                admin: false,
                maintain: false,
                push: false,
                triage: false,
                pull: true,
            },
        },
    ],
    followList: [
        {
            html_url: "https://github.com//octref",
            avatar_url:
                "https://avatars.githubusercontent.com/u/4033249?s=100&v=4",
            name: "octref",
        },
        {
            html_url: "https://github.com//hax",
            avatar_url:
                "https://avatars.githubusercontent.com/u/159840?s=100&v=4",
            name: "hax",
        },
        {
            html_url: "https://github.com//jinzhu",
            avatar_url:
                "https://avatars.githubusercontent.com/u/6843?s=100&v=4",
            name: "jinzhu",
        },
    ],
};
