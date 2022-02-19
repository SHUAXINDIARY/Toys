// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
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
  const _resData = await _.req<Succ>({
    url: `https://github.com/login/oauth/access_token?client_id=${
      config.client_id
    }&client_secret=${config.client_secret}&code=${JSON.parse(req.body).code}`,
    opts: {
      headers: {
        Accept: "application/json",
      },
    },
  });
  res.status(200).json({ data: _resData });
}
