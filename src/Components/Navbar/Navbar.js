import React from "react";
import Logo from "../../../public/media/images/LandingPage/Logo.png";

const Navbar = () => {
  return (
    <div className="bg-[#121826] w-full py-2 rounded-full px-4 flex items-center justify-between text-white sticky top-4 z-20">
      <img src={Logo} className="w-20" />
      <div className="flex items-center justify-between gap-20 cursor-pointer">
        <div>Why</div>
        <div>Features</div>
        <div>Demo</div>
      </div>
      <button
        className="text-[#121826] font-semibold px-4 py-2 rounded-full cursor-pointer"
        style={{
          background:
            "radial-gradient( circle at 0% 0%, #fff600, #ffd900, #ffd900, #ffd900, #ffa900)",
        }}
      >
        Get Started
      </button>
    </div>
  );
};

export default Navbar;
