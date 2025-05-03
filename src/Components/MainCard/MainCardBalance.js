import React from "react";

const MainCardBalance = () => {
  return (
    <div>
      <div className="w-full h-[175px] rounded-3xl rounded-b-4xl bg-[#0171ff] relative flex flex-col items-center justify-center text-white gap-1">
        <div className="text-sm mb-2">Your Available Balance</div>
        <div className="text-6xl" style={{ fontFamily: "agrandir-gheavy" }}>
          ₹1234
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="text-lg font-semibold">₹1000</div>
          <div className="bg-white rounded-full text-xs text-[#121826] px-3 -mt-1 pt-1 items-center justify-center flex gap-1">
            <div className="bi bi-caret-up-fill "></div>
            <div>10%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCardBalance
