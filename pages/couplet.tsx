import { Fireworks } from "fireworks-js/dist/react";
import { NextPage } from "next";
import { CSSProperties, ReactElement } from "react";
import Typewriter from "typewriter-effect";
import BackUp from "../layouts/BackUp";
import { LayoutType } from "../types";

const commSty = {
  font: "text-center text-yellow-300 text-[35px] font-bold",
  bg: "bg-red-600 border-yellow-300 border-4 m-auto",
};

const fireWorkOptions = {
  speed: 3,
};
const fireWorkStyle: CSSProperties = {
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  position: "fixed",
  background: "#E7ECEF",
  zIndex: -1,
};

const _TypeWriter = (text: string, className: string, time: number) => {
  return (
    <Typewriter
      onInit={(typewriter) => {
        typewriter
          .pauseFor(time)
          .typeString(text)
          .callFunction(() => {
            const _dom = document.querySelector(className);
            if (_dom) {
              // @ts-ignore
              _dom.style.display = "none";
            }
          })
          .start();
      }}
    />
  );
};

const Couplet: NextPage & LayoutType = () => {
  const { top, left, right } = {
    top: "早点下班",
    left: "文档注释一应俱全",
    right: "脊柱腰椎早日康复",
  };

  return (
    <div className=" w-screen h-screen flex justify-center items-center font-[rush]">
      <div className="w-[700px] h-[600px] m-auto">
        <div className=" h-[100px] flex justify-center items-center">
          <div
            className={` w-[190px] h-[70px] leading-[60px] ${commSty.font} ${commSty.bg} topText`}
          >
            {_TypeWriter(top, ".topText .Typewriter__cursor", 3000)}
          </div>
        </div>
        <div className="flex justify-between items-center w-full h-full">
          <div
            className={`w-[70px] h-[470px] flex flex-col justify-center ${commSty.font} ${commSty.bg} leftText`}
          >
            <p>{_TypeWriter(left, ".leftText .Typewriter__cursor", 0)}</p>
          </div>
          <div
            className={`${commSty.bg} ${commSty.font} h-[100px] w-[100px] rotate-[135deg] flex justify-center items-center scale-125`}
          >
            <p className=" rotate-[45deg]">福</p>
          </div>
          <div
            className={`w-[70px] h-[470px] flex flex-col justify-center ${commSty.font} ${commSty.bg} rightText`}
          >
            <p>{_TypeWriter(right, ".rightText .Typewriter__cursor", 1500)}</p>
          </div>
        </div>
      </div>
      <Fireworks options={fireWorkOptions} style={fireWorkStyle} />
    </div>
  );
};

export default Couplet;

Couplet.getLayout = (page: ReactElement) => {
  return <BackUp>{page}</BackUp>;
};
