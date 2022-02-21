import Link from "next/link";
import { ReactNode } from "react";

type BackUpProps = {
  children?: ReactNode;
  backNode?: ReactNode;
}

const BackBtn = () => {
  return (
    <Link href="/" passHref>
      <button className="btn btn-primary">BACKHOME</button>
    </Link>
  );
};

const BackUp = ({ children, backNode }: BackUpProps) => {
  return (
    <>
      <div>{children}</div>
      <div className="absolute right-0 bottom-0 text-red-600 p-3 cursor-pointer">
        <div>{backNode || BackBtn()}</div>
      </div>
    </>
  );
};
export default BackUp;
