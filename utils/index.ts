import { Octokit } from "@octokit/core";
import { IconStyle, LanguageIcon, RepoProps } from "../types";
import devicon from "devicon/devicon.json";

type ReqProps = {
  url: string;
  opts?: RequestInit;
};

const req = async <Res = any>({ url, opts }: ReqProps): Promise<Res> => {
  try {
    const _res = await fetch(url, {
      ...opts,
    });

    return await _res.json();
  } catch (error: any) {
    return error;
  }
};

const isPlainObj = (obj: any) => {
  if (!obj || Array.isArray(obj) || typeof obj !== "object") {
    return false;
  }
  return true;
};

const isNullObj = (obj: { [key: string]: any }) => {
  if (!obj) {
    return false;
  }
  return Object.keys(obj).length === 0;
};

const filterLanguage = (name: string): string => {
  if (name === "scss") return "sass";
  const iconList = devicon.map((item) => item.name);
  const val = name ? iconList.find((lang) => lang.includes(name)) : "";
  return val || name;
};

const countLanguage = async (
  repoTotal: number,
  userName: string,
  octokit: Octokit
): Promise<{
  language: LanguageIcon[];
  repoInfos: RepoProps[];
}> => {
  const languageMap: any = {};
  const repoInfos: any[] = [];
  let page = [];
  let total = Math.ceil(repoTotal / 100);
  while (total > 0) {
    page.push(total);
    total--;
  }
  // 一页一百 算出有几页 然后一次性请求拿到所有仓库
  const data = await Promise.all(
    page.map((item) => {
      return octokit.request("GET /users/{username}/repos", {
        username: userName,
        type: "owner",
        page: item,
        per_page: 100,
      });
    })
  );
  // 聚合所有仓库的语言
  data.forEach((item) => {
    item.data.forEach(
      ({ language, name, description, stargazers_count, html_url }) => {
        repoInfos.push({
          html_url,
          name,
          description,
          stargazers_count,
        });
        if (language && languageMap[language]) {
          languageMap[language]++;
        } else if (language && !languageMap[language]) {
          languageMap[language] = 1;
        }
      }
    );
  });
  return {
    language: Object.keys(languageMap).map((item) => {
      return {
        style: IconStyle.PLAIN,
        language: filterLanguage(item.toLocaleLowerCase()),
        colored: true,
      };
    }),
    repoInfos,
  };
};

const formatDate = (date: string) => {
  const d = new Date(date || "");
  return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
};

const topThreeRepoByStar = (respos: RepoProps[]) => {
  return respos
    .sort((a, b) => {
      return a.stargazers_count - b.stargazers_count;
    })
    .reverse()
    .splice(0, 3);
};

const newStar = async (login: string, octokit: Octokit) => {
  const { data } = await octokit.request("GET /users/{username}/starred", {
    username: login,
  });
  return data;
};

const newFollow = async (login: string, octokit: Octokit, total: number) => {
  let _pages = [];
  let _total = Math.ceil(total / 100);
  while (_total > 0) {
    _pages.push(_total);
    _total--;
  }
  const data = await Promise.all(
    _pages.map(async (page) => {
      // return await octokit.request("GET /users/{username}/following", {
      return await octokit.request("GET /user/following", {
        username: login,
        per_page: 100,
        page: page,
      });
    })
  );
  return data.map((item) => item.data)[0];
};

const _ = {
  req,
  isPlainObj,
  isNullObj,
  countLanguage,
  formatDate,
  topThreeRepoByStar,
  newStar,
  newFollow,
};

export default _;
