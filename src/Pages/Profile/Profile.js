import React from "react";
import { Link } from "react-router";
import ProfileMainCard from "../../Components/ProfileMainCard/ProfileMainCard";

const Profile = () => {
  return (
    <div className="px-4 py-6 flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <Link to="/">
          <div className="w-8 h-8 border rounded-full flex items-center justify-center">
            <span className="bi bi-arrow-left mt-1"></span>
          </div>
        </Link>
        <div className="font-semibold text-xl">My Profile</div>
      </div>
      <ProfileMainCard/>
    </div>
  );
};

export default Profile;
