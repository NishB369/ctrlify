import React from "react";
import video from "../../../public/media/videos/OpeningAnimationmWeb.mp4";

const OpeningAnimation = ({ showContent }) => {
  return (
    <video
      src={video}
      autoPlay
      muted
      style={{ display: showContent ? "none" : "block" }}
    />
  );
};

export default OpeningAnimation;
