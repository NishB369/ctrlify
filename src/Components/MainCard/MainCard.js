import React from "react";
import MainCardBalance from "./MainCardBalance";
import MainCardBanner from "./MainCardBanner";

const MainCard = () => {
  return (
    <div className="w-full px-4 md:px-0">
      <MainCardBalance />
      <MainCardBanner />
    </div>
  );
};

export default MainCard;
