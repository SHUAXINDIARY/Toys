import Image from "next/image";
import { FC, useEffect, useState } from "react";
import Loading from "react-loading";

// 照片详情
const PhotoModal: FC<{
    src: string;
    closeFullModal: any;
}> = ({ src, closeFullModal }) => {
    const [loading, setLoading] = useState(true);
    return (
        <div
            className="absolute w-screen h-screen flex justify-center items-center bg-[#000000c7]"
            onClick={() => closeFullModal(false)}
            >
            {loading && <Loading type="spinningBubbles" />}
            <Image
                src={src}
                layout="fill"
                className="object-contain m-auto"
                // 优先加载
                loading="eager"
                onLoadingComplete={() => {
                    setLoading(false);
                }}
            />
        </div>
    );
};
export default PhotoModal;
