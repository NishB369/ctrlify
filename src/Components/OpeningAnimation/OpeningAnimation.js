import { useState, useEffect } from "react";
import mWebvideo from "../../../public/media/videos/OpeningAnimationmWeb.mp4";
import webVideo from "../../../public/media/videos/OpeningAnimationWeb.mp4";

const OpeningAnimation = ({ showContent }) => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkScreenSize();

    window.addEventListener("resize", checkScreenSize);

    // why cleanup???
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <div
      className="h-full w-full"
      style={{ display: showContent ? "none" : "block" }}
    >
      <video
        src={isMobile ? mWebvideo : webVideo}
        autoPlay
        muted
        className="object-cover h-full w-full"
      />
    </div>
  );
};

export default OpeningAnimation;
