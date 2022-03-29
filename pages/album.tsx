import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Email, Github, Twitter } from "../public/svg";
import { QiniuData, QiniuItem } from "../types";
import { CardDataList } from "../utils/constant";
import Qiniu from "../utils/qiniu";

const Footer = [
    {
        icon: Email,
        text: "Email",
        link: "mailto:shuaxinjs@qq.com?subject=advice",
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

interface AlbumHomeProps {
    dataMap: any;
    handleOpenAlbum: (dist: string) => void;
}

const AlbumHome: FC<AlbumHomeProps> = ({ dataMap, handleOpenAlbum }) => {
    return (
        <Swiper
            navigation={true}
            modules={[Navigation]}
            className="h-full bg-white">
            {Object.keys(dataMap)?.map((key) => {
                const item = dataMap[key][0];
                return (
                    <SwiperSlide
                        key={item.md5}
                        className="text-center flex flex-row justify-center items-center">
                        {/* <img src={item.url} alt="img" className="m-auto" /> */}
                        <Image src={item.url} layout="fill" quality={10} />
                        <div className="text-white absolute text-7xl font-title w-full h-full z-50 bg-[#0000007d] backdrop-blur	 flex flex-row justify-center items-center">
                            <div>
                                <p>{key?.split("/")[0]?.toUpperCase()}</p>
                                <button
                                    className="btn btn-outline text-white btn-lg"
                                    onClick={() => handleOpenAlbum(key)}>
                                    MORE
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                );
            })}
        </Swiper>
    );
};

const PhotoModal: FC<{ src: string; closeFullModal: any }> = ({
    src,
    closeFullModal,
}) => {
    return (
        <div
            className="absolute w-screen h-screen flex justify-center items-center bg-[#000000c7]"
            onClick={() => closeFullModal(false)}>
            <img src={src} alt="image" className="h-5/6 object-contain" />
        </div>
    );
};

const Album: NextPage<QiniuData> = ({ dataMap }) => {
    const { pathname } = useRouter();
    // 当前查看的目录
    const [photoList, setPhotoList] = useState<QiniuItem[]>([]);
    // 展示目录还是首页
    const [isOpenAlbumHome, setIsOpenAlbumHome] = useState<boolean>(true);
    // 查看大图
    const [isFull, setIsFull] = useState<boolean>(false);
    // 大图
    const [fullSrc, setFullSrc] = useState("");
    // 打开某个目录
    const handleOpenAlbum = (distName: string) => {
        setIsOpenAlbumHome(false);
        setPhotoList(dataMap[distName]);
    };
    return (
        <div className="flex flex-row h-screen w-screen">
            <div className="w-0 md:w-1/5 bg-black flex flex-col justify-around text-center text-white overflow-y-hidden">
                <img
                    className="rounded-[50%] w-1/2 mx-auto"
                    src="https://img.shuaxindiary.cn/newavatar.jpg"
                    alt="avatar"
                />
                <ul className="text-[18px] font-next h-52 w-1/2 mx-auto text-left text-gray-700">
                    {CardDataList?.map((item) => {
                        return (
                            <li
                                key={item.url}
                                className={`py-1 cursor-pointer h-10 leading-10 ${
                                    item.url === pathname && "text-white"
                                }`}>
                                <Link href={item.url}>
                                    <span className="hover:text-white transition-all duration-200 ">
                                        {item.title.toUpperCase()}
                                    </span>
                                </Link>
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
            <div className="w-full md:w-4/5 overflow-y-scroll">
                {isOpenAlbumHome ? (
                    <AlbumHome
                        dataMap={dataMap}
                        handleOpenAlbum={handleOpenAlbum}
                    />
                ) : (
                    <div className="grid p-5 gap-3 md:grid-cols-5 md:gap-6">
                        {photoList.map((item) => {
                            return (
                                <div className="h-full flex justify-center items-center bg-gray-100">
                                    <img
                                        key={item.key}
                                        src={item.url}
                                        alt="image"
                                        className="cursor-pointer"
                                        onClick={() => {
                                            setIsFull(true);
                                            setFullSrc(item.url);
                                        }}
                                    />
                                </div>
                            );
                        })}
                        <button
                            className="btn absolute bottom-4 right-4"
                            onClick={() => setIsOpenAlbumHome(true)}>
                            BACK
                        </button>
                    </div>
                )}
            </div>
            {isFull && (
                <PhotoModal
                    src={fullSrc}
                    closeFullModal={setIsFull}></PhotoModal>
            )}
        </div>
    );
};

export default Album;

export const getServerSideProps = async () => {
    // 获取空间下的目录
    const { dist } = await Qiniu.getData({
        formate: false,
    });
    // 只聚合目录下的照片 根目录下的不做展示
    const allData = await Promise.all(
        dist.map((item) => {
            return Qiniu.getData({
                dist: item,
                formate: true,
            });
        })
    );
    return {
        props: {
            // data: allData.reduce((total, item) => {
            //     total.push(...item.data);
            //     return total;
            // }, [] as QiniuItem[]),
            dataMap: allData.reduce((total: any, item, i) => {
                total[dist[i]] = item.data;
                return total;
            }, {}),
            dist,
        },
    };
};
