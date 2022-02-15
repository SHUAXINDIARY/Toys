import { FC } from "react";

interface IUserInfo {
    avatar: string;
    name: string;
    nickName: string;
}
const UserInfo: FC<IUserInfo> = ({ avatar, name, nickName }) => {
    return (
        <div className=" w-[253px] flex justify-center m-auto pt-4 mb-5">
            <img
                src={avatar as string}
                alt="avatar"
                className="w-[110px] h-[110px] rounded-[50%] mr-5"
            />
            <div className=" flex flex-col justify-center">
                <p className=" text-white text-2xl">{name}</p>
                <p className=" text-xl text-[#CECACA]">{nickName}</p>
            </div>
        </div>
    );
};
export default UserInfo;
