import React, { useEffect } from "react";
import { useAppContext } from "../../Context/AppContext";

const AddIncomeForm = ({ setSubmit }) => {
  const {
    incomeFormData,
    updateIncomeFormData,
    addIncomeTransaction,
    addTransaction,
  } = useAppContext();

  const handleSubmitClick = () => {
    setSubmit(true);
    addIncomeTransaction(incomeFormData);
    addTransaction(incomeFormData);
    updateIncomeFormData("Amount", "");
    updateIncomeFormData("Entity", "");
    updateIncomeFormData("Category", "");
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-col items-start justify-center w-full gap-1">
        <label className="font-semibold">Amount</label>
        <input
          placeholder="Enter Money"
          type="number"
          className="bg-gray-100 pl-4 py-3 w-full rounded-lg text-lg text-black font-bold"
          value={incomeFormData["Amount"]}
          onChange={(e) => {
            updateIncomeFormData("Amount", e.target.value);
          }}
        ></input>
      </div>
      <div className="flex items-center justify-around gap-2 -mt-1 w-full">
        {[50, 100, 250, 500].map((item, index) => (
          <span
            key={index}
            className="border-2 border-white py-1 px-3 rounded-lg cursor-pointer"
            onClick={() => {
              updateIncomeFormData("Amount", item);
            }}
          >
            ₹{item}
          </span>
        ))}
      </div>
      <div className="flex flex-col items-start justify-center w-full gap-1">
        <label className="font-semibold">Entity From</label>
        <input
          value={incomeFormData["Entity"]}
          onChange={(e) => {
            updateIncomeFormData("Entity", e.target.value);
          }}
          placeholder="Received From"
          type="text"
          className="bg-gray-100 pl-4 py-3 w-full rounded-lg text-lg text-black font-bold"
        ></input>
      </div>
      <div className="flex flex-col items-start justify-center w-full gap-1">
        <label className="font-semibold">Category</label>
        <input
          value={incomeFormData["Category"]}
          placeholder="Categorise Transaction"
          type="text"
          className="bg-gray-100 pl-4 py-3 w-full rounded-lg text-lg text-black font-bold"
          onChange={(e) => {
            updateIncomeFormData("Category", e.target.value);
          }}
        ></input>
      </div>
      <div className="flex items-center justify-around gap-2 -mt-1 w-full">
        {["Salary 🤑", "Income ⬇️", "Gift 🎁"].map((item, index) => (
          <span
            key={index}
            className="border-2 border-white py-1 px-2 rounded-lg cursor-pointer"
            onClick={() => {
              updateIncomeFormData("Category", item.split(" ")[0]);
            }}
          >
            {item}
          </span>
        ))}
      </div>
      <div className="w-full flex items-center justify-between gap-2">
        <div className="flex flex-col items-start justify-center w-1/2 gap-1">
          <label className="font-semibold">Date</label>
          <input
            placeholder="Enter Date"
            type="date"
            value={incomeFormData["Date"]}
            onChange={(e) => {
              updateIncomeFormData("Date", e.target.value);
            }}
            className="bg-gray-100 px-3 py-3 w-full rounded-lg text-black font-bold"
          />
        </div>
        <div className="flex flex-col items-end justify-center w-1/2 gap-1">
          <label className="font-semibold">Time</label>
          <input
            placeholder="Enter Time"
            type="time"
            value={incomeFormData["Time"]}
            onChange={(e) => {
              updateIncomeFormData("Time", e.target.value);
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

export default AddIncomeForm;
