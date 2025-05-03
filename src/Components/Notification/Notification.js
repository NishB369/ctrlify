import React from "react";

const Notification = () => {
  return (
    <div className="flex items-center justify-start px-4 py-5 bg-[#0171ff] rounded-xl w-[98%] gap-4 text-white relative">
      <img src="" className="w-16 h-16 rounded-full bg-white" />
      <div className="w-[75%] leading-tight">
        <span className="font-semibold">Low balance alert</span>: Your tracked balance is below your ₹5,000 threshold.
      </div>
      <div className="flex items-center justify-center bg-[#121826] rounded-full py-[2px] px-2 absolute -top-4 -right-4 scale-75">
        <span className="bi bi-x text-2xl mt-1"></span>
      </div>
    </div>
  );
};

export default Notification;
