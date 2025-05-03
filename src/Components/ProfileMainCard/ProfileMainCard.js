import React from "react";
import profilePicUrl from "url:../../../public/media/images/UserProfilePic1.png";

const ProfileMainCard = () => {
  return (
    <div className="mt-2">
      <div className="w-full mt-4 h-[200px] rounded-3xl bg-[#121826] flex items-center justify-center gap-4 relative">
        <div className="absolute -top-8">
          <img src={profilePicUrl} className="w-28 h-28 rounded-full" />
        </div>
        <div className="text-white flex flex-col items-center justify-center gap-1 pt-12 mt-4">
            <div className="font-semibold text-3xl">UserName</div>
            <div>Designation</div>
        </div>
      </div>
    </div>
  );
};

export default ProfileMainCard;
