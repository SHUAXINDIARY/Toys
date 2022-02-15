import "devicon";
import { NextPage } from "next";
import Calendar from 'react-github-contribution-calendar';
import { DetailCard, MsgBar, UserInfo } from '../components/index';
import { Company, Email, Github, Location, Twitter, Website } from '../public/svg';

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
  "2022-1-23": 1,
  "2022-1-26": 2,
  "2022-1-27": 3,
  "2022-1-28": 4,
  "2022-1-29": 4,
};
const until = "2022-12-30";

const panelColors = [
  "#fdf4ff",
  "#fae8ff",
  "#f5d0fe",
  "#f0abfc",
  "#e879f9",
  "#d946ef",
  "#c026d3",
  "#a21caf",
  "#86198f",
  "#701a75",
];
// 一些通用 css
const styles = {
  listHover: "hover:scale-[1.5] text-center transition-all duration-150",
  count: "flex flex-col text-center mr-2",
  common: "mt-[10px] rounded-xl h-[830px] cursor-pointer transition-all duration-300 hover:shadow-2xl hover:scale-[1.06]",
};

const Resume: NextPage = () => {
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
                        return (
                            <MsgBar
                                key={link + i}
                                icon={icon}
                                link={link}
                            />
                        );
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
                        <li className={`${styles.listHover}`}>
                            <i className="devicon-typescript-plain colored"></i>
                        </li>
                        <li className={`${styles.listHover}`}>
                            <i className="devicon-css3-plain colored"></i>
                        </li>
                        <li className={`${styles.listHover}`}>
                            <i className="devicon-vuejs-plain colored"></i>
                        </li>
                        <li className={`${styles.listHover}`}>
                            <i className="devicon-javascript-plain colored"></i>
                        </li>
                        <li className={`${styles.listHover}`}>
                            <i className="devicon-react-original colored"></i>
                        </li>
                        <li className={`${styles.listHover}`}>
                            <i className="devicon-go-original-wordmark colored"></i>
                        </li>
                        <li className={`${styles.listHover}`}>
                            <i className="devicon-svelte-plain colored"></i>
                        </li>
                        <li className={`${styles.listHover}`}>
                            <i className="devicon-java-plain colored"></i>
                        </li>
                        <li className={`${styles.listHover}`}>
                            <i className="devicon-python-plain colored"></i>
                        </li>
                        <li className={`${styles.listHover}`}>
                            <i className="devicon-nodejs-plain colored"></i>
                        </li>
                    </ul>
                </MsgBar>
                <MsgBar title="Contribution">
                    <Calendar
                        until={until}
                        values={values}
                        weekNames={[]}
                        monthNames={[]}
                        dateFormat=''
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
}

export default Resume
