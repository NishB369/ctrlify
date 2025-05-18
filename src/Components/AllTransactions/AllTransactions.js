import React, { useState, useEffect } from "react";
import RecentTransaction from "../RecentTransactions/RecentTransaction";

const AllTransactions = ({ setAllTransactions, renderList, ctrlPosition }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTransactions, setFilteredTransactions] = useState(renderList);

  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredTransactions(renderList);
      return;
    }

    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    const filtered = renderList.filter((transaction) => {
      return (
        transaction.Entity.toLowerCase().includes(lowerCaseSearchTerm) ||
        transaction.Category.toLowerCase().includes(lowerCaseSearchTerm) ||
        transaction.TransactionType.toLowerCase().includes(
          lowerCaseSearchTerm
        ) ||
        transaction.Amount.toString().includes(lowerCaseSearchTerm) ||
        transaction.Date.includes(lowerCaseSearchTerm)
      );
    });

    setFilteredTransactions(filtered);
  }, [searchTerm, renderList]);

  const handleCloseTransactions = () => {
    setAllTransactions(false);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div
      className={`w-[92.5%] md:mx-20 md:w-[80%] flex flex-col items-center justify-start
        bg-[#121826] absolute left-[3.75%] rounded-t-3xl px-4 md:px-6 pt-4 opacity-[97.5%] text-white gap-2 ${
          ctrlPosition ? "-bottom-20 md:bottom-0" : "bottom-0"
        } h-full`}
    >
      <div className="w-full flex items-center justify-between text-xl md:py-2">
        <div className="font-semibold ">All Transactions</div>
        <span
          className="bi bi-x-circle-fill cursor-pointer"
          onClick={handleCloseTransactions}
        ></span>
      </div>

      <form
        className="w-full flex items-center justify-center mt-2"
        onSubmit={handleSearchSubmit}
      >
        <input
          placeholder="Search"
          className="bg-gray-100 rounded-l-lg py-2 w-[85%] text-black/50 pl-3 pt-3 font-semibold"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <button
          type="submit"
          className="bg-[#1071ff]/50 w-[15%] rounded-r-lg py-2 pt-3 px-3 shadow-2xl shadow-black flex items-center justify-center cursor-pointer"
        >
          <span className="bi bi-search text-white"></span>
        </button>
      </form>

      <div className="flex flex-col gap-4 overflow-y-scroll w-full py-3">
        {filteredTransactions.length > 0 ? (
          filteredTransactions.map((transaction, index) => (
            <RecentTransaction
              key={index}
              bgOverlay={true}
              data={transaction}
            />
          ))
        ) : (
          <div className="text-center py-6">
            {searchTerm
              ? "No matching transactions found"
              : "No Transactions Yet"}
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTransactions;
