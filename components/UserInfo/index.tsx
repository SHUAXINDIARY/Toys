import { FC } from "react";
import { ToolTip } from "..";
import _ from "../../utils";

type IUserInfo = {
  avatar: string;
  name: string;
  company: string;
};
const UserInfo: FC<IUserInfo> = ({ avatar, name, company }) => {
  return (
    <div className=" w-[253px] flex m-auto mb-5">
      <img
        src={avatar as string}
        alt="avatar"
        className="w-[100px] h-[100px] rounded-[50%] mr-1"
      />
      <div className="flex flex-col justify-center w-full">
        <ToolTip text={name}>
          <p className="text-white text-xl w-full">
            {_.splitShow(name)}
          </p>
        </ToolTip>
        <p className=" text-xl text-[#CECACA] text-center">{company}</p>
      </div>
    </div>
  );
};
export default UserInfo;
