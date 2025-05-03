import React, { useState } from "react";
// why url: works?
import profilePicUrl from "url:../../../public/media/images/UserProfilePic1.png";

const Header = () => {
  const [notificationCount, setNotificationCount] = useState(0);

  return (
    <div className="flex items-center justify-between py-2 pt-4">
      <div className="flex items-center justify-center gap-3">
        <img src={profilePicUrl} className="w-8 h-8 rounded-full" />
        <div>
          <div className="font-bold text-xl">Hello, User</div>
          <div className="text-xs -mt-1">Welcome Back!</div>
        </div>
      </div>
      <div className="w-8 h-8 border rounded-full flex items-center justify-center mr-2 mb-1">
        <span className="bi bi-bell mt-1"></span>
        {notificationCount>0 && (
          <div className="bg-[#0171ff] top-3 right-5 w-4 h-4 absolute rounded-full text-[10px] font-bold text-white flex items-center justify-center pt-[2px]">
            {notificationCount}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
