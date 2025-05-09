import React from "react";
import RecentTransaction from "./RecentTransaction";
import emptyVid from "../../../public/media/videos/Empty.mp4";

const RecentTransactions = ({ setAllTransactions, renderList }) => {
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
      <div className="flex flex-col gap-1 px-6 items-center justify-center">
        {renderList.length > 0 ? (
          renderList
            .slice(0, 3)
            .map((transaction, index) => (
              <RecentTransaction key={index} data={transaction} />
            ))
        ) : (
          <video
            src={emptyVid}
            autoPlay
            muted
            loop
            className="h-60 w-60 -mt-4"
          />
        )}
      </div>
    </div>
  );
};

export default RecentTransactions;
