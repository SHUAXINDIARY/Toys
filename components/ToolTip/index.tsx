import { FC, ReactElement } from "react";

const PositionType: any = {
  left: "tooltip-left",
  right: "tooltip-right",
  bottom: "tooltip-bottom",
};

interface ToolTipProps {
  position?: string;
  text: string;
  children: ReactElement;
}

const ToolTip: FC<ToolTipProps> = (props) => {
  const { text, position, children } = props;
  return (
    <div
      className={`tooltip ${position ? PositionType[position] : ""} indent-0`}
      data-tip={text}
    >
      <div className="cursor-pointer">{children}</div>
    </div>
  );
};
export default ToolTip;
