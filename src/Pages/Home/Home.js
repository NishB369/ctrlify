import React, { useState, useEffect } from "react";
import OpeningAnimation from "../../Components/OpeningAnimation/OpeningAnimation";
import LoadedHome from "./LoadedHome";

const Home = () => {
  // create a state variable to conditionally render the content
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      <OpeningAnimation showContent={showContent} />
      <div
        style={{ display: showContent ? "block" : "none" }}
        className="w-screen h-screen"
      >
        <LoadedHome />
      </div>
    </div>
  );
};

export default Home;
