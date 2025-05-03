import React from "react";
import profilePicUrl from "url:../../../public/media/images/UserProfilePic1.png";

const RecentTransaction = ({ bgOverlay }) => {
  return (
    <div
      className={`flex items-center justify-between w-full px-2 py-2 ${
        bgOverlay ? "bg-[#016fff8a] rounded-lg" : ""
      }`}
    >
      <div className="flex items-center justify-center gap-3">
        <img src={profilePicUrl} className="rounded-full w-8 h-8" />
        <div className="flex flex-col justify-center">
          <div className="font-semibold">To/From</div>
          <div className="flex items-center justify-between text-xs">
            <div>Date</div>
            <span>|</span>
            <div>Time</div>
          </div>
        </div>
      </div>
      <div>- ₹Amt</div>
    </div>
  );
};

export default RecentTransaction;
