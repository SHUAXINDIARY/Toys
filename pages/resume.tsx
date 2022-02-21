import "devicon";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { ReactElement, useContext, useEffect, useState } from "react";
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
import {
  LanguageIcon,
  LayoutType,
  RepoProps,
  UserInfoProps
} from "../types/index";
import _ from "../utils";
import { api, panelColors } from "../utils/constant";

const until = "2022-02-20";

// 一些通用 css
const styles = {
  listHover: "hover:scale-[1.5] text-center transition-all duration-150",
  count: "flex flex-col text-center mr-2",
  common:
    "mt-[10px] rounded-xl h-[830px] transition-all duration-300 hover:shadow-2xl hover:scale-[1.06]",
};

type ResumeProps = {
  userInfo?: UserInfoProps;
  language?: LanguageIcon[];
  topRepo?: RepoProps[];
  starList?: any[];
  followList?: any[];
  token: string;
};
const Resume: NextPage<ResumeProps> & LayoutType = ({
  userInfo,
  language,
  topRepo,
  starList,
  followList,
  token,
}) => {
  const basicInfo = [
    {
      icon: Email,
      link: userInfo?.email,
    },
    {
      icon: Website,
      link: userInfo?.blog,
    },
    {
      icon: Twitter,
      link: `https://twitter.com/search?q=${userInfo?.twitter_username}&src=typed_query&f=user`,
    },
    {
      icon: Github,
      link: userInfo?.html_url,
    },
  ];
  const router = useRouter();
  const [contribution, setContribution] = useState({});
  const getContribution = async (login: string) => {
    const _contributions = await _.req({
      url: api.getContributionForClient,
      opts: {
        method: "POST",
        body: JSON.stringify({
          login,
        }),
      },
    });
    _contributions && setContribution(_contributions.contribution);
  };
  useEffect(() => {
    if (!token || token.length <= 0) {
      router.replace("/loginGithub");
    }
    console.log(userInfo);
    console.log(topRepo);
    console.log(followList);
    console.log(language);
    userInfo?.login && getContribution(userInfo?.login);
  }, []);
  return (
    <div className="h-screen overflow-y-scroll flex flex-col justify-center bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500">
      <div className="w-[700px] max-h-[850px] flex flex-row m-auto">
        <div
          className={`w-[320px] ml-[14px] mr-[20px] bg-[#8080806b] hover:bg-[#80808091] ${styles.common}`}
        >
          <UserInfo
            name={userInfo?.name || ""}
            nickName={userInfo?.login || ""}
            avatar={userInfo?.avatar_url || ""}
          />
          <div className="mb-3 flex w-[260px] m-auto">
            {basicInfo.map(({ icon, link }, i) => {
              return <MsgBar key={link || "" + i} icon={icon} link={link} />;
            })}
          </div>
          <MsgBar icon={Location} text={userInfo?.location} />
          {userInfo?.company && (
            <MsgBar icon={Company} text={userInfo?.company} />
          )}
          <MsgBar title="Introduction">
            <p className="indent-3">{userInfo?.bio}</p>
          </MsgBar>
          <MsgBar title="Basic Info">
            <ul className="flex flex-row justify-center">
              <a
                href={`https://github.com/${userInfo?.login}?tab=repositories`}
                target="_blank"
                rel="noreferrer"
              >
                <li className={`${styles.count}`}>
                  <span>{userInfo?.public_repos}</span>
                  <span>Repos</span>
                </li>
              </a>
              <a
                href={`https://github.com/${userInfo?.login}?tab=following`}
                target="_blank"
                rel="noreferrer"
              >
                <li className={`${styles.count}`}>
                  <span>{userInfo?.following}</span>
                  <span>Following</span>
                </li>
              </a>
              <a
                href={`https://github.com/${userInfo?.login}?tab=followers`}
                target="_blank"
                rel="noreferrer"
              >
                <li className={`${styles.count}`}>
                  <span>{userInfo?.followers}</span>
                  <span>Followers</span>
                </li>
              </a>
            </ul>
          </MsgBar>
          <MsgBar title="Language">
            <ul className="indent-4 text-2xl flex flex-wrap">
              {language?.map((item) => {
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
              until={until}
              values={contribution}
              weekNames={[]}
              monthNames={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((mon) =>
                String(mon)
              )}
              dateFormat="YYYY-MM-DD"
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
          <DetailCard title="Time Section">
            <div>
              <p>
                <span className="text-xl font-bold">
                  {_.formatDate(userInfo?.created_at!)}
                </span>{" "}
                - <span>Joined Github</span>
              </p>
              <p>
                <span className="text-xl font-bold">
                  {_.formatDate(userInfo?.updated_at!)}
                </span>{" "}
                - <span>Last Commit</span>
              </p>
            </div>
          </DetailCard>
          <DetailCard title="Top.3 Repo By Star">
            <>
              {topRepo?.map((item) => {
                return (
                  <div key={item.description} className="mb-6">
                    <p className="text-[#1f2937] text-base">
                      <a href={item.html_url} target="_blank" rel="noreferrer">
                        {item.name}
                      </a>
                    </p>
                    <p className="font-[800] text-4xl">
                      {item.stargazers_count}
                    </p>
                  </div>
                );
              })}
            </>
          </DetailCard>
          <DetailCard title="New Starred">
            <>
              {starList?.map((item) => {
                return (
                  <div key={item.description} className="mb-6">
                    <a href={item.html_url} target="_blank" rel="noreferrer">
                      <h3 className="mb-3">
                        <span className="text-xl font-bold">{item.name}</span> -{" "}
                        <span className="text-sm">{item.stargazers_count}</span>
                      </h3>
                    </a>
                  </div>
                );
              })}
            </>
          </DetailCard>
          <DetailCard title="New Follow">
            <div className="flex justify-around flex-wrap w-[300px] mt-[-10px]">
              {followList?.map((item) => {
                return (
                  <div key={item.avatar_url} className=" ml-5 mb-3">
                    <a href={item.html_url} target="_blank" rel="noreferrer">
                      <img
                        src={item.avatar_url}
                        alt="avatar"
                        className=" w-14 h-14 rounded-[50%] m-auto"
                      />
                    </a>
                    {/* <p className="w-full text-center">{item.login}</p> */}
                  </div>
                );
              })}
            </div>
          </DetailCard>
        </div>
      </div>
    </div>
  );
};

const _Resume = () => {
  const { token, resumeData } = useContext(StoreCtx);
  console.log(token);
  console.log(resumeData);
  return <Resume {...resumeData} token={token} />;
};

export default _Resume;

// 布局组件
Resume.getLayout = (page: ReactElement) => {
  return <BackUp>{page}</BackUp>;
};

