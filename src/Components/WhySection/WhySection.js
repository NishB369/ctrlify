import React from "react";
import FlyingMoneyCard from "../../../public/media/videos/FlyingMoneyCard.mp4";
import featuresList from "./constants";

const WhySection = () => {
  return (
    <div className="py-20 px-30 flex items-center justify-center gap-16">
      <div className="w-1/2 flex flex-col gap-4 ">
        <div className="text-6xl font-semibold">Why Ctrilfy?</div>
        <div className="text-xl">
          Drowning in scattered income, missed expenses, and forgotten savings
          goals?
        </div>
        <div className="flex flex-col gap-2">
          {featuresList.map((feature, index) => (
            <div
              key={index}
              className={`w-full flex ${index % 2 == 0 ? "justify-end" : ""}`}
            >
              <div
                className={`bg-[#0171ff] border-[#121826] border-2 flex items-center justify-center text-white py-2 rounded-md w-[65%] font-semibold text-xl leading-6 ${
                  index % 2 == 0 ? "bg-[#121826]" : ""
                }`}
              >
                <div className="w-3/4">{feature}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-1/2 ">
        <video
          src={FlyingMoneyCard}
          autoPlay
          muted
          loop
          className="rounded-sm"
        />
      </div>
    </div>
  );
};

export default WhySection;
