import React from "react";
import profilePicUrl from "url:../../../public/media/images/Notification.png";

const NotificationsMainCard = () => {
  return (
    <div className="mt-2 px-4">
      <div className="w-full mt-4 h-[140px] rounded-3xl bg-[#121826] flex items-center justify-center gap-4 relative">
        <div className="absolute -top-8">
          <img src={profilePicUrl} className="w-28 h-28 rounded-full" />
        </div>
        <div className="text-2xl mt-18 text-center text-white">
          See what all you <span className="italic font-semibold">Missed </span>!
        </div>
      </div>
    </div>
  );
};

export default NotificationsMainCard;
