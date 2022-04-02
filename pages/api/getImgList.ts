import { NextApiRequest, NextApiResponse } from "next";
import Qiniu from "../../utils/qiniu";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<any>
) {
    const { dist } = JSON.parse(req.body);
    if (dist) {
        const data = await Qiniu.getData({
            dist,
            formate: true,
        });
        res.status(200).json({
            ...data,
            data: data.data.sort((a, b) => {
                return b.putTime - a.putTime;
            }),
        });
    } else {
        res.status(200).json({});
    }
}
