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
    const allData = await Promise.all([
      _.newStar(_userInfos.login, octokit),
      _.newFollowOrder(_userInfos.login),
    ]);
    res.status(200).send({
      userInfo: { ..._userInfos },
      language: language,
      topRepo: _.topThreeRepoByStar(repoInfos),
      starList: allData[0].splice(0, 3),
      followList: allData[1].splice(0, 6),
    });
  } catch (error) {
    console.log(error);
    res.status(200).send({
      code: 1,
      error,
    });
  }
}
