import React from "react";
import video from "../../../public/media/videos/OpeningAnimationmWeb.mp4";

const OpeningAnimation = ({ showContent }) => {
  return (
    <div className="h-full" style={{ display: showContent ? "none" : "block" }}>
      <video src={video} autoPlay muted className="object-cover h-full" />
    </div>
  );
};

export default OpeningAnimation;
