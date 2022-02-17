import { FC, ReactElement } from "react";

type IDetailCard = {
    title: string;
    children?: ReactElement;
}
const DetailCard: FC<IDetailCard> = ({ title, children }) => {
    return (
        <div className="m-4">
            <div className="flex items-center mb-6">
                <span className="inline-block w-36 h-6 leading-6 text-white text-sm font-semibold text-center bg-[#545454] rounded-md">
                    {title}
                </span>
                <span className="bg-[#545454] w- h-[2px] inline-block w-2/4" />
            </div>
            <div className=" indent-1">{children}</div>
        </div>
    );
};
export default DetailCard;
