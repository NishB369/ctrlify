import React, { useEffect } from "react";
import { useAppContext } from "../../Context/AppContext";
import OpeningAnimation from "../../Components/OpeningAnimation/OpeningAnimation";
import LoadedHome from "./LoadedHome";
import Profile from "../Profile/Profile";

const Home = () => {
  const { isLoading, isSignedUp, userData, completeLoading } = useAppContext();

  useEffect(() => {
    completeLoading();
  }, []);

  return (
    <div className="w-lvw h-lvh">
      {isLoading && <OpeningAnimation />}

      {!isLoading && (
        <>
          {!isSignedUp && <Profile shimmer={true} />}

          {isSignedUp && <LoadedHome userData={userData} />}
        </>
      )}
    </div>
  );
};

export default Home;
