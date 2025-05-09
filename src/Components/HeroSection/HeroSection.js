import React from "react";
import RightArrow from "../../../public/media/images/LandingPage/RightArrow.png";
import MainPhone from "../../../public/media/images/LandingPage/MainPhone.png";
import BalanceImg from "../../../public/media/images/LandingPage/BalanceImg.png";
import ChartImg from "../../../public/media/images/LandingPage/ChartImg.png";
import RsCoin from "../../../public/media/images/LandingPage/RsCoin.png";
// import GridLines from "../../../public/media/images/LandingPage/GridLines.png";

const HeroSection = () => {
  return (
    <div className="h-[510px] w-full mt-4 pt-6 flex flex-col items-center justify-center text-[#121826] relative">
      <div
        className="w-[100vw] h-[12.5%] absolute bottom-0 z-10"
        style={{
          background:
            "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #0171ff 250%)",
        }}
      ></div>
      <div className="text-center">
        <div
          className="text-7xl font-black tracking-wider"
          style={{ fontFamily: "agrandir-glight" }}
        >
          Financial
        </div>
        <div className="flex items-center justify-center font-semibold text-6xl -mt-2 gap-2 tracking-wide">
          <div>Chaos</div>
          <div className="bg-[#0171ff] px-10 py-2 rounded-full">
            <img src={RightArrow} className="w-20" />
          </div>
          <div>Ctrl</div>
        </div>
      </div>
      <div className="flex items-center justify-between gap-2 mt-4">
        <button
          className="text-[#121826] font-semibold px-6 py-2 rounded-sm border-2 cursor-pointer"
          style={{
            background:
              "radial-gradient( circle at 0% 0%, #fff600, #ffd900, #ffd900, #ffd900, #ffa900)",
          }}
        >
          Get Started
        </button>
        <button className="text-white font-semibold px-6 py-2 border-2 border-black rounded-sm cursor-pointer bg-[#121826]">
          Watch Demo
        </button>
      </div>
      <div className="overflow-hidden px-60 mt-6 relative">
        <img src={BalanceImg} className="w-60 absolute left-20 top-12" />
        <img src={ChartImg} className="w-50 absolute top-20 right-24" />
        <img src={RsCoin} className="w-30 absolute right-44" />
        <img src={MainPhone} className="w-96" />
      </div>
    </div>
  );
};

export default HeroSection;
