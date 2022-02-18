import { HomeCardProps, IconStyle, LanguageIcon } from "../types/index";

export const panelColors: string[] = [
  "#fdf4ff",
  "#fae8ff",
  "#f5d0fe",
  "#f0abfc",
  "#e879f9",
  "#d946ef",
  "#c026d3",
  "#a21caf",
  "#86198f",
  "#701a75",
];

export const languageIcon: LanguageIcon[] = [
  {
    style: IconStyle.PLAIN,
    language: "html5",
    colored: true,
  },
  {
    style: IconStyle.PLAIN,
    language: "css3",
    colored: true,
  },
  {
    style: IconStyle.PLAIN,
    language: "vuejs",
    colored: true,
  },
  {
    style: IconStyle.PLAIN,
    language: "react",
    colored: true,
  },
  {
    style: IconStyle.PLAIN,
    language: "go",
    colored: true,
  },
  {
    style: IconStyle.PLAIN,
    language: "svelte",
    colored: true,
  },
  {
    style: IconStyle.PLAIN,
    language: "java",
    colored: true,
  },
  {
    style: IconStyle.PLAIN,
    language: "python",
    colored: true,
  },
  {
    style: IconStyle.PLAIN,
    language: "nodejs",
    colored: true,
  },
  {
    style: IconStyle.PLAIN,
    language: "typescript",
    colored: true,
  },
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
  {
    title: "Github",
    url: "https://github.com/SHUAXINDIARY",
    desc: "My Github",
  },
];

