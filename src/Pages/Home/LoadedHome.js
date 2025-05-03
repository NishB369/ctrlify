import React from "react";
import Header from "../../Components/Header/Header";
import MainCard from "../../Components/MainCard/MainCard";
import QuickActions from "../../Components/QuickActions/QuickActions";
import RecentTransactions from "../../Components/RecentTransactions/RecentTransactions";

const LoadedHome = () => {
  return (
    <div className="w-full h-full px-4 flex flex-col gap-4">
      <Header />
      <MainCard />
      <QuickActions />
      <RecentTransactions />
    </div>
  );
};

export default LoadedHome;
