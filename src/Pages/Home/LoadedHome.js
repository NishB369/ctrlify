import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import MainCard from "../../Components/MainCard/MainCard";
import QuickActions from "../../Components/QuickActions/QuickActions";
import RecentTransactions from "../../Components/RecentTransactions/RecentTransactions";
import AllTransactions from "../../Components/AllTransactions/AllTransactions";

const LoadedHome = () => {
  const [allTransactions, setAllTransactions] = useState(false);

  return (
    <div className="w-full h-full px-4 flex flex-col gap-4 relative">
      <Header />
      <MainCard />
      <QuickActions />
      <RecentTransactions setAllTransactions={setAllTransactions} />
      {allTransactions && (
        <AllTransactions setAllTransactions={setAllTransactions} />
      )}
    </div>
  );
};

export default LoadedHome;
