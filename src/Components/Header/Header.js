import React, { useState } from "react";
// why url: works?
import profilePicUrl from "url:../../../public/media/images/UserProfilePic1.png";
import { Link } from "react-router";

const Header = () => {
  const [notificationCount, setNotificationCount] = useState(0);

  return (
    <div className="flex items-center justify-between py-2 pt-4">
      <div className="flex items-center justify-center gap-3">
        <Link to="/Profile">
          <img src={profilePicUrl} className="w-8 h-8 rounded-full" />
        </Link>
        <div>
          <div className="font-bold text-xl">Hello, User</div>
          <div className="text-xs -mt-1">Welcome Back!</div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-1">
        <Link to="/Notifications">
          <div className="w-8 h-8 border rounded-full flex items-center justify-center mr-2">
            <span className="bi bi-bell mt-1"></span>
            {notificationCount > 0 && (
              <div className="bg-[#0171ff] top-3 right-5 w-4 h-4 absolute rounded-full text-[10px] font-bold text-white flex items-center justify-center pt-[2px]">
                {notificationCount}
              </div>
            )}
          </div>
        </Link>

        <div className="w-8 h-8 border rounded-full flex items-center justify-center">
          <div className="bi bi-list mt-1"></div>
        </div>
      </div>
    </div>
  );
};

export default Header;
