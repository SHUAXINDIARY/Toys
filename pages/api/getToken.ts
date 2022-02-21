// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { is } from "cheerio/lib/api/traversing";
import type { NextApiRequest, NextApiResponse } from "next";
import config from "../../config";
import _ from "../../utils/index";

type Data = {
  data: any;
};

export type Succ = {
  access_token: string;
  scope: string;
  token_type: string;
};

// 获取token
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // 开发环境 ？本地配置：线上环境读取
  const _client_secret = _.isDev() ? config.client_secret : process.env.client_secret
  const _resData = await _.req<Succ>({
    url: `https://github.com/login/oauth/access_token?client_id=${
      config.client_id
    }&client_secret=${_client_secret}&code=${JSON.parse(req.body).code}`,
    opts: {
      headers: {
        Accept: "application/json",
      },
    },
  });
  res.status(200).json({ data: _resData });
}
