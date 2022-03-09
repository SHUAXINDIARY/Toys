import "devicon";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { ReactElement, useContext, useEffect, useState } from "react";
import Calendar from "react-github-contribution-calendar";
import { DetailCard, MsgBar, ToolTip, UserInfo } from "../components/index";
import { StoreCtx } from "../context";
import BackUp from "../layouts/BackUp";
import { Location } from "../public/svg";
import { LayoutType, RepoProps, ResumeProps } from "../types/index";
import _ from "../utils";
import { api, basicInfo, mockData, panelColors } from "../utils/constant";

const until = "2022-02-20";

// common css
const styles = {
    listHover: "hover:scale-[1.5] text-center transition-all duration-150",
    count: "flex flex-col text-center mr-2",
    common: "rounded-xl h-full hover:shadow-2xl hover:scale-[1.06] overflow-y-scroll",
    trans: "transition-all duration-300",
};

const Resume: NextPage<ResumeProps> & LayoutType = ({
    userInfo,
    language,
    topRepo,
    starList,
    followList,
}) => {
    const _basicInfo = basicInfo(userInfo!);
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
        userInfo?.login && getContribution(userInfo?.login);
    }, []);
    const handleGenImg = () => {
        _.dowImg(document.querySelector("#image")!);
    };
    const handleCopyImg = () => {
        _.copy(document.querySelector("#image")!);
    };
    return (
        <div
            className="h-screen flex flex-col justify-center bg-gradient-to-b from-indigo-500 via-purple-500 to-pink-500"
            id="image">
            {/* <div className="w-[700px] max-h-[700px] flex flex-row m-auto items-center"> */}
            <div className="w-[700px] small:max-h-[700px] big:max-h-[850px] flex flex-row m-auto items-center">
                <div className={`cursor-pointer flex flex-col justify-around`}>
                    <p
                        className={`${styles.trans} p-[10px] text-center rounded-xl hover:bg-[#80808091] !text-white hover:scale-150 mb-2`}
                        onClick={handleGenImg}>
                        <i className="iconfont icon-xiazai !text-2xl inline-block"></i>
                    </p>
                    <p
                        className={`${styles.trans} p-[10px] text-center rounded-xl hover:bg-[#80808091] !text-white hover:scale-150`}
                        onClick={handleCopyImg}>
                        <i className="iconfont icon-fuzhi !text-2xl inline-block"></i>
                    </p>
                </div>
                <div
                    className={`p-5 ml-[14px] mr-[20px] bg-[#8080806b] hover:bg-[#80808091] ${styles.common} ${styles.trans}`}>
                    <UserInfo
                        name={userInfo?.login || ""}
                        company={userInfo?.company || ""}
                        avatar={userInfo?.avatar_url || ""}
                    />
                    <div className="mb-3 flex w-[260px] m-auto justify-between">
                        {_basicInfo.map(
                            ({ icon, link, hover, callBack }, i) => {
                                return (
                                    <ToolTip key={link || "" + i} text={hover}>
                                        <MsgBar
                                            icon={icon}
                                            link={link}
                                            callBack={callBack}
                                        />
                                    </ToolTip>
                                );
                            }
                        )}
                    </div>
                    <MsgBar
                        icon={Location}
                        text={userInfo?.location || "Earth"}
                    />
                    <MsgBar title="Introduction">
                        <p className="indent-3">{userInfo?.bio}</p>
                    </MsgBar>
                    <MsgBar title="Basic Info">
                        <ul className="flex flex-row justify-center">
                            <a
                                href={`https://github.com/${userInfo?.login}?tab=repositories`}
                                target="_blank"
                                rel="noreferrer">
                                <li className={`${styles.count}`}>
                                    <span>{userInfo?.public_repos}</span>
                                    <span>Repos</span>
                                </li>
                            </a>
                            <a
                                href={`https://github.com/${userInfo?.login}?tab=following`}
                                target="_blank"
                                rel="noreferrer">
                                <li className={`${styles.count}`}>
                                    <span>{userInfo?.following}</span>
                                    <span>Following</span>
                                </li>
                            </a>
                            <a
                                href={`https://github.com/${userInfo?.login}?tab=followers`}
                                target="_blank"
                                rel="noreferrer">
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
                                        className={`${styles.listHover} group`}>
                                        <ToolTip text={item.language}>
                                            <i className={iconUrl} />
                                        </ToolTip>
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
                            monthNames={[
                                1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,
                            ].map((mon) => String(mon))}
                            dateFormat="YYYY-MM-DD"
                            weekLabelAttributes={null}
                            monthLabelAttributes={null}
                            panelColors={panelColors}
                            panelAttributes
                        />
                    </MsgBar>
                </div>
                <div
                    className={`bg-white ${styles.common} ${styles.trans}`}>
                    <DetailCard title="Time Section">
                        <div>
                            <div className="flex justify-around items-center">
                                <div>
                                    <span className="text-xl font-bold">
                                        Joined Github
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        {_.formatDate(userInfo?.created_at!)}
                                    </span>
                                </div>
                            </div>
                            <div className="flex justify-around items-center">
                                <div>
                                    <span className="text-xl font-bold">
                                        Last Commit
                                    </span>
                                </div>
                                <div>
                                    <span>
                                        {_.formatDate(userInfo?.updated_at!)}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </DetailCard>
                    <DetailCard title="Top.3 Repo">
                        <>
                            {topRepo?.map((item, index) => {
                                const LevelColors: any = {
                                    1: "text-fuchsia-800",
                                    2: "text-fuchsia-600",
                                    3: "text-fuchsia-400",
                                };
                                const color = LevelColors[index + 1];
                                return (
                                    <div
                                        key={item.description}
                                        className="mb-6">
                                        <p
                                            className={`font-[800] text-4xl ${color}`}>
                                            {item.stargazers_count}
                                        </p>
                                        <p className="text-[#1f2937] text-base">
                                            <a
                                                href={item.html_url}
                                                target="_blank"
                                                rel="noreferrer">
                                                {item.name}
                                            </a>
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
                                    <div
                                        key={item.description}
                                        className="mb-6">
                                        <a
                                            href={item.html_url}
                                            target="_blank"
                                            rel="noreferrer">
                                            <h3 className="mb-3 text-left flex justify-center items-center">
                                                <div className="w-[136px]">
                                                    <ToolTip text={item.name}>
                                                        <span className="text-xl font-bold inline-block">
                                                            {_.splitShow(
                                                                item.name
                                                            )}
                                                        </span>
                                                    </ToolTip>
                                                </div>
                                                <div className="w-1/2">
                                                    <span className="text-sm">
                                                        {item.stargazers_count}
                                                    </span>
                                                </div>
                                            </h3>
                                        </a>
                                    </div>
                                );
                            })}
                        </>
                    </DetailCard>
                    <DetailCard title="New Follow">
                        <div className="flex justify-around flex-wrap w-full">
                            {followList?.map((item) => {
                                return (
                                    <div
                                        key={item.avatar_url}
                                        className="flex flex-col items-center">
                                        <a
                                            href={item.html_url}
                                            target="_blank"
                                            rel="noreferrer">
                                            <img
                                                src={item.avatar_url}
                                                alt="avatar"
                                                className=" w-14 h-14 rounded-[50%] m-auto"
                                            />
                                        </a>
                                        <ToolTip text={item.name as string}>
                                            <p className="indent-0">
                                                {_.splitShow(
                                                    item.name as string,
                                                    5
                                                )}
                                            </p>
                                        </ToolTip>
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
    const router = useRouter();
    useEffect(() => {
        if (!_.isDev()) {
            if (!token || token.length <= 0) {
                router.replace("/loginGithub");
            }
        }
    }, []);
    if (_.isDev()) {
        return <Resume {...mockData} token={token} />;
    }
    return token && <Resume {...resumeData} token={token} />;
};

export default _Resume;

// 布局组件
_Resume.getLayout = (page: ReactElement) => {
    return <BackUp>{page}</BackUp>;
};
