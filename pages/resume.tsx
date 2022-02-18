import { Octokit } from "@octokit/core";
import "devicon";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { ReactElement, useContext, useEffect } from "react";
import Calendar from "react-github-contribution-calendar";
import { DetailCard, MsgBar, UserInfo } from "../components/index";
import { StoreCtx } from "../context";
import BackUp from "../layouts/BackUp";
import {
  Company,
  Email,
  Github,
  Location,
  Twitter,
  Website
} from "../public/svg";
import { LayoutType } from "../types/index";
import { languageIcon, panelColors } from "../utils/constant";

const basicInfo = [
  {
    icon: Email,
    link: "shuaxinjs@qq.com",
  },
  {
    icon: Website,
    link: "https://img.shuaxindiary.cn",
  },
  {
    icon: Twitter,
    link: "shuaxinjs@qq.com",
  },
  {
    icon: Github,
    link: "https://github.com/SHUAXINDIARY",
  },
];
const values = {
  "2022-01-23": 1,
  "2022-01-26": 2,
  "2022-01-27": 3,
  "2022-01-28": 4,
  "2022-01-29": 4,
};
const until = "2022-01-30";

// 一些通用 css
const styles = {
  listHover: "hover:scale-[1.5] text-center transition-all duration-150",
  count: "flex flex-col text-center mr-2",
  common:
    "mt-[10px] rounded-xl h-[830px] cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.06]",
};

const Resume: NextPage & LayoutType = (props) => {
  const { token } = useContext(StoreCtx);
  const router = useRouter();
  useEffect(() => {
    if (token || token.length <= 0) {
      router.replace("/loginGithub");
    }
  }, []);
  return (
    <div className="h-screen overflow-y-scroll flex flex-col justify-center bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-[700px] max-h-[850px] flex flex-row m-auto">
        <div
          className={`w-[320px] ml-[14px] mr-[20px] bg-[#8080806b] hover:bg-[#80808091] ${styles.common}`}
        >
          <UserInfo
            name="SHUAXIN"
            nickName="SHUAXINDIARY"
            avatar="https://img.shuaxindiary.cn/newavatar.jpg"
          />
          <div className="mb-3 flex w-[260px] m-auto">
            {basicInfo.map(({ icon, link }, i) => {
              return <MsgBar key={link + i} icon={icon} link={link} />;
            })}
          </div>
          <MsgBar icon={Location} text="Beijing." />
          <MsgBar icon={Company} text="ByteDance." />
          <MsgBar title="Introduction">
            <p className="indent-3">A self-funded solo founder.</p>
          </MsgBar>
          <MsgBar title="Basic Info">
            <ul className="flex flex-row">
              <li className={`${styles.count}`}>
                <span>99</span>
                <span>Repos</span>
              </li>
              <li className={`${styles.count}`}>
                <span>99</span>
                <span>Following</span>
              </li>
              <li className={`${styles.count}`}>
                <span>99</span>
                <span>Followers</span>
              </li>
              <li className={`${styles.count}`}>
                <span>99</span>
                <span>Stars</span>
              </li>
            </ul>
          </MsgBar>
          <MsgBar title="Language">
            <ul className="indent-4 text-2xl flex flex-wrap">
              {languageIcon.map((item) => {
                const iconUrl = item.colored
                  ? `devicon-${item.language}-${item.style} ${
                      item.colored ? "colored" : ""
                    }`
                  : `devicon-${item.language}-${item.style}`;
                return (
                  <li
                    key={item.language}
                    className={`${styles.listHover} group`}
                  >
                    <i className={iconUrl} />
                  </li>
                );
              })}
            </ul>
          </MsgBar>
          <MsgBar title="Contribution">
            <Calendar
              dateFormat="YYYY-MM-DD"
              until={until}
              values={values}
              weekNames={["s", "m", "t", "w", "t", "f", "s"].map((day) =>
                day.toLocaleUpperCase()
              )}
              monthNames={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((mon) =>
                String(mon)
              )}
              weekLabelAttributes={null}
              monthLabelAttributes={null}
              panelColors={panelColors}
              panelAttributes
            />
          </MsgBar>
        </div>
        <div
          className={`w-[380px] bg-white overflow-y-scroll ${styles.common}`}
        >
          <DetailCard title="Highlights">
            <p>最近关注的</p>
          </DetailCard>
          <DetailCard title="Get Around">
            <p>you get around</p>
          </DetailCard>
          <DetailCard title="New Friends">
            <p>最近关注的</p>
          </DetailCard>
          <DetailCard title="New Love">
            <p>最近关注的</p>
          </DetailCard>
        </div>
      </div>
    </div>
  );
};

export default Resume;

// 布局组件
Resume.getLayout = (page: ReactElement) => {
  return <BackUp>{page}</BackUp>;
};

// 构建客户端数据结构
export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const octokit = new Octokit({
    auth: query.token,
    baseUrl: "https://api.github.com",
  });
  try {
    const { data } = await octokit.request("GET /user");
    return {
      props: {
        userInfo: { ...data },
      },
    };
  } catch (error) {
    console.log(error);
    return {
      redirect: {
        destination: "/loginGithub",
        permanent: false,
      },
    };
  }
};
