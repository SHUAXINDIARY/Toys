// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import config from "../../config";
import _ from "../../utils/index";

type Data = {
  data: any;
};
// 获取token
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const _resData = await _.req({
    url: `https://github.com/login/oauth/access_token?client_id=${
      config.client_id
    }&client_secret=${config.client_secret}&redirect_uri=${
      config.redirect_uri
    }&code=${JSON.parse(req.body).code}`,
    opts: {
      headers: {
        Accept: "application/json",
      },
    },
  });
  res.status(200).json({ data: _resData });
}
