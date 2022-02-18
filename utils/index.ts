import { Octokit } from "@octokit/core";
import { IconStyle, LanguageIcon } from "../types";
import { deviconLang } from "./constant";
import devicon from "devicon/devicon.json";

type ReqProps = {
  url: string;
  opts?: RequestInit;
};

const req = async <Res = any>({ url, opts }: ReqProps): Promise<Res> => {
  try {
    const _res = await fetch(url, { ...opts });
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
): Promise<LanguageIcon[]> => {
  const languageMap: any = {};
  let page = [1];
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
    item.data.forEach(({ language }) => {
      if (language && languageMap[language]) {
        languageMap[language]++;
      } else if (language && !languageMap[language]) {
        languageMap[language] = 1;
      }
    });
  });
  return Object.keys(languageMap).map((item) => {
    return {
      style: IconStyle.PLAIN,
      language: filterLanguage(item.toLocaleLowerCase()),
      colored: true,
    };
  });
};

const _ = {
  req,
  isPlainObj,
  isNullObj,
  countLanguage,
};

export default _;
