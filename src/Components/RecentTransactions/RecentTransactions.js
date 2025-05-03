import React from "react";
import RecentTransaction from "./RecentTransaction";

const RecentTransactions = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-between px-2 mb-2">
        <div className="font-semibold text-md">Recent Transactions</div>
        <div className="text-xs underline">View All</div>
      </div>
      <div className="flex flex-col gap-3 overflow-y-scroll max-h-[175px]">
        <RecentTransaction />
        <RecentTransaction />
        <RecentTransaction />
        <RecentTransaction />
        <RecentTransaction />
        <RecentTransaction />
        <RecentTransaction />
        <RecentTransaction />
        <RecentTransaction />
        <RecentTransaction />
        <RecentTransaction />
        <RecentTransaction />
        <RecentTransaction />
        <RecentTransaction />
        <RecentTransaction />
      </div>
    </div>
  );
};

export default RecentTransactions;
