import React, { useState } from "react";
import { useAppContext } from "../../Context/AppContext";

const AddInvestmentForm = ({ setSubmit }) => {
  const {
    investmentFormData,
    updateInvestmentFormData,
    addInvestmentTransaction,
    addTransaction,
  } = useAppContext();

  const handleSubmitClick = () => {
    setSubmit(true);
    addInvestmentTransaction(investmentFormData);
    addTransaction(investmentFormData);
    updateInvestmentFormData("Amount", "");
    updateInvestmentFormData("Entity", "");
    updateInvestmentFormData("Category", "");
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex flex-col items-start justify-center w-full gap-1">
          <label className="font-semibold">Amount</label>
          <input
            placeholder="Enter Money"
            type="number"
            className="bg-gray-100 pl-4 py-3 w-full rounded-lg text-lg text-black font-bold"
            value={investmentFormData["Amount"]}
            onChange={(e) => {
              updateInvestmentFormData("Amount", e.target.value);
            }}
          ></input>
        </div>
        <div className="flex items-center justify-around gap-2 -mt-1 md:mt-6 w-full">
          {[50, 100, 250, 500].map((item, index) => (
            <div
              key={index}
              className="border-2 border-white py-1 px-3 md:px-6 rounded-lg cursor-pointer md:pt-2 md:hover:bg-[#1071ff]"
              onClick={() => {
                updateInvestmentFormData("Amount", item);
              }}
            >
              ₹{item}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col items-start justify-center w-full gap-1">
        <label className="font-semibold">Entity</label>
        <input
          value={investmentFormData["Entity"]}
          onChange={(e) => {
            updateInvestmentFormData("Entity", e.target.value);
          }}
          placeholder="Saving Name"
          type="text"
          className="bg-gray-100 pl-4 py-3 w-full rounded-lg text-lg text-black font-bold"
        ></input>
      </div>
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex flex-col items-start justify-center w-full gap-1">
          <label className="font-semibold">Category</label>
          <input
            placeholder="Categorise Transaction"
            type="text"
            className="bg-gray-100 pl-4 py-3 w-full rounded-lg text-lg text-black font-bold"
            value={investmentFormData["Category"]}
            onChange={(e) => {
              updateInvestmentFormData("Category", e.target.value);
            }}
          ></input>
        </div>
        <div className="flex items-center justify-around gap-2 -mt-1 w-full md:mt-6">
          {["Jar 🫙", "Investement 📈", "Loan 💰"].map((item, index) => (
            <div
              key={index}
              className="border-2 border-white py-1 px-2 md:px-6 rounded-lg cursor-pointer md:pt-2 md:hover:bg-[#1071ff]"
              onClick={() => {
                updateInvestmentFormData("Category", item.split(" ")[0]);
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full flex items-center justify-between gap-2">
        <div className="flex flex-col items-start justify-center w-1/2 gap-1">
          <label className="font-semibold">Date</label>
          <input
            placeholder="Enter Date"
            type="date"
            value={investmentFormData["Date"]}
            onChange={(e) => {
              updateInvestmentFormData("Date", e.target.value);
            }}
            className="bg-gray-100 px-3 py-3 w-full rounded-lg text-black font-bold"
          />
        </div>
        <div className="flex flex-col items-end justify-center w-1/2 gap-1">
          <label className="font-semibold">Time</label>
          <input
            placeholder="Enter Time"
            type="time"
            value={investmentFormData["Time"]}
            onChange={(e) => {
              updateInvestmentFormData("Time", e.target.value);
            }}
            className="bg-gray-100 px-3 py-3 w-full rounded-lg text-black font-bold"
          />
        </div>
      </div>
      <button
        type="submit"
        className="bg-[#0171ff] w-full py-3 rounded-md font-semibold"
        onClick={handleSubmitClick}
      >
        Submit
      </button>
    </div>
  );
};

export default AddInvestmentForm;