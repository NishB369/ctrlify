import React, { useState } from "react";
import profilePicUrl from "url:../../../public/media/images/UserProfilePic1.png";
import TransactionModal from "./TransactionModal";

const RecentTransaction = ({ bgOverlay, data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getTransactionStyles = (type) => {
    switch (type) {
      case "Income":
        return { color: "text-green-500", symbol: "+" };
      case "Expense":
        return { color: "text-red-500", symbol: "-" };
      case "Investment":
        return { color: "text-blue-500", symbol: "↗" };
      default:
        return { color: "", symbol: "" };
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div
        className={`flex items-center justify-between w-full py-2 ${
          bgOverlay ? "bg-[#016fff4e] rounded-lg px-2" : ""
        }`}
      >
        <div className="flex items-center justify-center gap-3">
          <img
            src={profilePicUrl}
            className="rounded-full w-8 h-8"
            alt="Profile"
          />
          <div className="flex flex-col justify-center">
            <div className="font-semibold">{data["Entity"]}</div>
            <div className="flex items-center justify-between text-xs">
              <div>{data["Date"]}</div>
              <span className="mx-2">|</span>
              <div>{data["Time"]}</div>
            </div>
          </div>
        </div>
        <div className="font-semibold text-lg flex items-center">
          <span className={getTransactionStyles(data["TransactionType"]).color}>
            {getTransactionStyles(data["TransactionType"]).symbol} ₹
            {data["Amount"]}
          </span>
          <span
            className="ml-3 bi bi-gear-fill text-gray-500 cursor-pointer hover:text-gray-700"
            onClick={openModal}
          ></span>
        </div>
      </div>

      <TransactionModal
        isOpen={isModalOpen}
        onClose={closeModal}
        transaction={data}
      />
    </>
  );
};

export default RecentTransaction;
