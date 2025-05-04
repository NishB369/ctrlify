import React from "react";
import MainCardBalance from "./MainCardBalance";
import MainCardBanner from "./MainCardBanner";

const MainCard = () => {
  return (
    <div className="w-full px-4">
      <MainCardBalance />
      <MainCardBanner />
    </div>
  );
};

export default MainCard;
