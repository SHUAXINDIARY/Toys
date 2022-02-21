import { FC, ReactElement } from "react";

type IMsgBar = {
  text?: string;
  link?: string;
  icon?: any;
  title?: string | ReactElement;
  children?: any;
  callBack?: () => void;
};

const MsgBar: FC<IMsgBar> = ({
  text,
  link,
  icon,
  title,
  children,
  callBack,
}) => {
  // 内容
  const contentClass = "w-[260px]";
  // icon链接
  const iconClass = "flex items-center justify-center h-[38px] w-[38px]";
  // icon text
  const iconTextClass = `${contentClass} flex items-center group`;
  const _link = !link || link.trim().length === 0;
  return (
    <div
      className={`${
        children ? contentClass : text ? iconTextClass : iconClass
      } ${
        _link ? "cursor-not-allowed" : "cursor-pointer"
      } rounded-[10px] bg-[#d5d5d529] m-auto mt-[5px] text-white leading-[38px] transition-all duration-300 hover:scale-[1.03] hover:shadow-xl`}
    >
      {children ? (
        <>
          <p className="text-xl font-bold ml-5 pt-2">{title}</p>
          <div className="p-2">{children}</div>
        </>
      ) : (
        <>
          <a
            href={_link ? "javascript:void(0);" : link}
            target={_link ? "" : "_blank"}
            rel="noreferrer"
            className={`${_link ? "cursor-not-allowed" : ""}`}
            onClick={callBack}
          >
            <img
              className={`w-6 h-6 text-[15px] group ${
                text && "ml-[18px] mr-8"
              }`}
              src={icon.src}
              alt="icon"
            />
          </a>
          {text && <span>{text}</span>}
        </>
      )}
    </div>
  );
};
export default MsgBar;
