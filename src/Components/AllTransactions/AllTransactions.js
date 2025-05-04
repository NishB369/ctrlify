import React from "react";
import RecentTransaction from "../RecentTransactions/RecentTransaction";

const AllTransactions = ({ setAllTransactions, renderList }) => {
  const handleCloseTransactions = () => {
    setAllTransactions(false);
  };
  return (
    <div
      className="w-[92.5%] flex flex-col items-center justify-start
        bg-[#121826] absolute left-[3.75%] rounded-t-3xl px-6 pt-4 opacity-[97.5%] text-white gap-2 -bottom-20 h-full"
    >
      <div className="w-full flex items-center justify-between text-xl">
        <div className="font-semibold ">All Transactions</div>
        <span
          className="bi bi-x-circle-fill"
          onClick={handleCloseTransactions}
        ></span>
      </div>

      <div className="w-full flex items-center justify-center">
        <input
          placeholder="Search"
          className="bg-gray-100 rounded-l-lg py-2 w-[85%] text-black/50 pl-3 pt-3 font-semibold"
        ></input>
        <div className="bg-gray-100 w-[15%] rounded-r-lg py-2 pt-3 px-3 shadow-2xl shadow-black flex items-center justify-center">
          <span className="bi bi-search text-black"></span>
        </div>
      </div>

      <div className="flex flex-col gap-4 overflow-y-scroll w-full py-3">
        {renderList.length > 0
          ? renderList.map((transaction, index) => (
              <RecentTransaction
                key={index}
                bgOverlay={true}
                data={transaction}
              />
            ))
          : "No Transactions Yet"}
      </div>
    </div>
  );
};

export default AllTransactions;
