import React from "react";

const MainCardBanner = () => {
  return (
    <div className="w-full h-[150px] rounded-b-3xl bg-[#121826] -mt-12 flex items-center justify-center pt-24 md:pt-[105px] gap-4 py-16">
      <div className="bi bi-calendar text-[#ffa900] text-6xl mt-2"></div>
      <div className="flex flex-col justify-center items-start text-white">
        <div className="text-lg font-semibold">New Month Started</div>
        <div className="text-sm leading-tight">
          Time to analyze!
          <br />
          Set goals for June?
        </div>
      </div>
    </div>
  );
};

export default MainCardBanner;
