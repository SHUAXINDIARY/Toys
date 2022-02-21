import { Octokit } from "@octokit/core";
import cheerio from "cheerio";
import devicon from "devicon/devicon.json";
import { FollowProps, IconStyle, LanguageIcon, RepoProps } from "../types";

type ReqProps = {
  url: string;
  opts?: RequestInit;
  isJson?: boolean;
};

const req = async <Res = any>({
  url,
  opts,
  isJson = true,
}: ReqProps): Promise<Res | ResponseInit> => {
  try {
    const _res = await fetch(url, {
      ...opts,
    });
    if (isJson) {
      return await _res.json();
    }
    return _res;
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
  if (respos.length === 0) return [];
  return respos
    .sort((a, b) => {
      return a.stargazers_count! - b.stargazers_count!;
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

// 返回关注列表 -> 用户id大小排序过的
const newFollow = async (login: string, octokit: Octokit, total: number) => {
  let _pages = [];
  let _total = Math.ceil(total / 100);
  while (_total > 0) {
    _pages.push(_total);
    _total--;
  }
  const data = await Promise.all(
    _pages.map(async (page) => {
      return await octokit.request("GET /user/following", {
        username: login,
        per_page: 100,
        page: page,
      });
    })
  );
  return data.map((item) => item.data)[0];
};

const newFollowOrder = async (login: string) => {
  const _data: FollowProps[] = [];
  const res = await _.req({
    url: `https://github.com/${login}?tab=following`,
    isJson: false,
  });
  const $ = cheerio.load(await res.text());
  $(".position-relative .d-table").each((index, dom) => {
    if (index < 3) {
      const avatar_url = $(dom).find("img").attr("src") || "";
      const name = $($(dom)?.find("a")[0]).attr("href");
      const html_url = `https://github.com/${name}`;
      _data.push({
        html_url,
        avatar_url,
        name: name?.split("/")[1],
      });
    } else {
      return false;
    }
  });
  return _data;
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
  newFollowOrder,
};

export default _;
