import Link from "next/link";
import { FC, ReactNode } from "react";

type BackUpProps = {
    children?: ReactNode;
    backNode?: ReactNode;
};

const GotoBtn = () => {
    return (
        <Link href="/" passHref>
            <button className="btn btn-primary">BACKHOME</button>
        </Link>
    );
};

interface JumpBtn {
    url: string;
    text: string;
}

const JumpBtn:FC<JumpBtn> = ({url,text}) => {
    return (
        <a href={url} target="_blank" rel="noreferrer">
            <button className="btn btn-primary">{text}</button>
        </a>
    );
};

const BackUp = ({ children, backNode }: BackUpProps) => {
    return (
        <>
            <div>{children}</div>
            <div className="absolute right-0 bottom-0 text-red-600 p-3 cursor-pointer flex space-x-4">
                <div>
                    <JumpBtn url="https://github.com/SHUAXINDIARY/Toys" text="Star" />
                </div>
                <div>{backNode || GotoBtn()}</div>
            </div>
        </>
    );
};
export default BackUp;
