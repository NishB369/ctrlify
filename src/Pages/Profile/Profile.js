import React from "react";
import { Link } from "react-router";
import { useAppContext } from "../../Context/AppContext";
import ProfileMainCard from "../../Components/ProfileMainCard/ProfileMainCard";
import PersonalDetails from "../../Components/PersonalDetails/PersonalDetails";

const Profile = ({ shimmer }) => {
  const { isLoading, isSignedUp } = useAppContext();

  return (
    <div className={`px-4 py-2 flex flex-col ${shimmer ? "gap-0" : "gap-4"}`}>
      <div
        className={`flex items-center sticky top-0 bg-white z-10 py-4 w-full px-4 opacity-90 ${
          !isLoading && isSignedUp ? "justify-between" : "justify-center"
        }`}
      >
        {!isLoading && isSignedUp && (
          <Link to="/">
            <div className="w-8 h-8 border rounded-full flex items-center justify-center">
              <span className="bi bi-arrow-left mt-1"></span>
            </div>
          </Link>
        )}
        <div className="font-semibold text-xl">My Profile</div>
      </div>
      <ProfileMainCard shimmer={shimmer} />
      <PersonalDetails />
    </div>
  );
};

export default Profile;
