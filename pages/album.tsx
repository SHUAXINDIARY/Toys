import { NextPage } from "next";
import Link from "next/link";
import { Email, Github, Twitter } from "../public/svg";
import { QiniuData } from "../types";
import Qiniu from "../utils/qiniu";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles

interface AlbumProps {
    data: QiniuData;
}

const Footer = [
    {
        icon: Email,
        text: "Email",
        link: "shuaxinjs@qq.com",
    },
    {
        icon: Twitter,
        text: "Twitter",
        link: `https://twitter.com/qq_tf`,
    },
    {
        icon: Github,
        text: "Github",
        link: "https://github.com/SHUAXINDIARY",
    },
];

const Album: NextPage<AlbumProps> = ({ data }) => {
    console.log(data);
    return (
        <div className="flex flex-row h-screen w-screen overflow-hidden">
            <div className="w-1/5 bg-black flex flex-col justify-around text-center text-white">
                <img
                    className="rounded-[50%] w-1/2 mx-auto"
                    src="https://img.shuaxindiary.cn/newavatar.jpg"
                    alt="avatar"
                />
                <ul className="text-[18px] font-next h-52 w-1/2 mx-auto">
                    {data?.dist?.map((item) => {
                        return (
                            <li key={item} className="py-1 cursor-pointer">
                                <span className="hover:text-[28px] transition-all duration-300">
                                    {item?.split("/")?.[0]?.toUpperCase()}
                                </span>
                            </li>
                        );
                    })}
                </ul>
                <div className="flex flex-row w-1/2 mx-auto justify-around items-center">
                    {Footer.map(({ icon, text, link }) => {
                        return (
                            <a href={link} target="_blank">
                                <img
                                    src={icon.src}
                                    alt="icon"
                                    key={text}
                                    className="cursor-pointer hover:scale-150 transition-all duration-300"
                                />
                            </a>
                        );
                    })}
                </div>
            </div>
            <div className="w-4/5">
                <Swiper
                    navigation={true}
                    modules={[Navigation]}
                    className="h-full bg-red-400">
                    <SwiperSlide className="text-center">Slide 1</SwiperSlide>
                    <SwiperSlide className="text-center">Slide 2</SwiperSlide>
                    <SwiperSlide className="text-center">Slide 3</SwiperSlide>
                    <SwiperSlide className="text-center">Slide 4</SwiperSlide>
                    <SwiperSlide className="text-center">Slide 5</SwiperSlide>
                    <SwiperSlide className="text-center">Slide 6</SwiperSlide>
                    <SwiperSlide className="text-center">Slide 7</SwiperSlide>
                    <SwiperSlide className="text-center">Slide 8</SwiperSlide>
                    <SwiperSlide className="text-center">Slide 9</SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default Album;

export const getServerSideProps = async () => {
    const data = await Qiniu.getData();
    return {
        props: {
            data,
        },
    };
};
