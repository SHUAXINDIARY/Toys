import dynamic from "next/dynamic";

const DetailCard = dynamic(import('./DetailCard'))
const MsgBar = dynamic(import('./MsgBar'))
const UserInfo = dynamic(import('./UserInfo'))
const ToolTip = dynamic(import('./ToolTip'))
const PhotoModal = dynamic(import('./PhotoModal'))

export { DetailCard, MsgBar, UserInfo, ToolTip, PhotoModal };
