import React, { useState, useEffect } from "react";
import video from "../../../public/media/videos/OpeningAnimationmWeb.mp4";

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
      <video
        src={video}
        autoPlay
        muted
        style={{ display: showContent ? "none" : "block" }}
      />
      <div
        style={{ display: showContent ? "block" : "none" }}
        className="w-screen h-screen"
      >
        <div>Welcome</div>
      </div>
    </div>
  );
};

export default Home;
