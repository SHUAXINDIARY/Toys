import { Octokit } from "@octokit/core";
import { NextApiRequest, NextApiResponse } from "next";
import _ from "../../utils";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { token } = JSON.parse(req.body);
  console.log(token);
  const octokit = new Octokit({
    auth: token,
    baseUrl: "https://api.github.com",
  });
  try {
    const { data: _userInfos } = await octokit.request("GET /user");
    const { language, repoInfos } = await _.countLanguage(
      _userInfos.public_repos,
      _userInfos.login,
      octokit
    );
    const starList = await _.newStar(_userInfos.login, octokit);
    const followList = await _.newFollow(
      _userInfos.login,
      octokit,
      _userInfos.following
    );
    res.status(200).send({
      userInfo: { ..._userInfos },
      language: language,
      topRepo: _.topThreeRepoByStar(repoInfos),
      starList: starList.splice(0, 3),
      followList: followList.splice(0, 6),
    });
  } catch (error) {
    console.log(error);
    res.status(200).send({
      code: 1,
      error,
    });
  }
}
