import React from "react";
import RecentTransaction from "./RecentTransaction";

const RecentTransactions = ({ setAllTransactions }) => {
  const handleViewAll = () => {
    setAllTransactions(true);
  };

  return (
    <div>
      <div className="w-full flex items-center justify-between px-6 mb-2">
        <div className="font-semibold text-md">Recent Transactions</div>
        <div className="text-xs underline" onClick={handleViewAll}>
          View All
        </div>
      </div>
      <div className="flex flex-col gap-1 px-4">
        <RecentTransaction />
        <RecentTransaction />
        <RecentTransaction />
      </div>
    </div>
  );
};

export default RecentTransactions;
