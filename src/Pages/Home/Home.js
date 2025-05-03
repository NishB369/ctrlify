import React, { useState, useEffect } from "react";
import OpeningAnimation from "../../Components/OpeningAnimation/OpeningAnimation";
import LoadedHome from "./LoadedHome";

const Home = () => {
  // create a state variable to conditionally render the content
  const [showContent, setShowContent] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-lvw h-lvh">
      <OpeningAnimation showContent={showContent} />
      <div
        style={{ display: showContent ? "block" : "none" }}
        className="w-full h-full"
      >
        <LoadedHome />
      </div>
    </div>
  );
};

export default Home;
