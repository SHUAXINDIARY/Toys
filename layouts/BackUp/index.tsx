import { ReactNode } from "react";

interface BackUpProps {
  children?: ReactNode;
  backNode?: ReactNode;
}

const BackBtn = () => {
  return <button>back up</button>;
};
const BackUp = ({ children, backNode }: BackUpProps) => {
  return (
    <div className="w-screen h-screen">
      <div>{children}</div>
      <div className="absolute right-0 bottom-0 text-red-600">
        {/* <div>{backNode || BackBtn()}</div> */}
        12312
      </div>
    </div>
  );
};
export default BackUp;
