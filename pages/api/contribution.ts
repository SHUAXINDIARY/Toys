import { NextApiRequest, NextApiResponse } from "next";
import _ from "../../utils";
import { api } from "../../utils/constant";

type Data = {
  contribution?: any;
};

type ContributionProps = {
  date: string;
  count: number;
  level: number;
};

type ContributionListProps = {
  total: {
    lastYear: number;
  };
  contributions: ContributionProps[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { login } = JSON.parse(req.body);
  const { contributions } = await _.req<ContributionListProps>({
    url: `${api.getContributionForServer}${login}?y=last`,
  });
  const contribution: any = {};
  contributions?.forEach((item) => {
    contribution[item.date] = item.count;
  });
  res.status(200).json({ contribution });
}
