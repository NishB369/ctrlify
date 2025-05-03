import React, { useState } from "react";

const AddIncomeForm = ({ setSubmit }) => {
  const [incomeChip, setIncomeChip] = useState("");
  const [categoryChip, setCategoryChip] = useState("");

  const handleSubmitClick = () => {
    setSubmit(true);
  };

  const handleIncomeChipClick = (val) => {
    setIncomeChip(val);
  };

  const handleCategoryChipClick = (val) => {
    setCategoryChip(val);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-col items-start justify-center w-full gap-1">
        <label className="font-semibold">Amount</label>
        <input
          placeholder="Enter Money"
          type="number"
          className="bg-gray-100 pl-4 py-3 w-full rounded-lg text-lg text-black font-bold"
          defaultValue={incomeChip}
          onChange={(e) => {
            setIncomeChip(e.target.value);
          }}
        ></input>
      </div>
      <div className="flex items-center justify-around gap-2 w-full">
        {[50, 100, 250, 500].map((item, index) => (
          <span
            key={index}
            className="border-2 border-white py-1 px-3 rounded-lg cursor-pointer"
            onClick={(e) => {
              handleIncomeChipClick(item);
            }}
          >
            ₹{item}
          </span>
        ))}
      </div>
      <div className="flex flex-col items-start justify-center w-full gap-1">
        <label className="font-semibold">Entity</label>
        <input
          placeholder="Received From"
          type="text"
          className="bg-gray-100 pl-4 py-3 w-full rounded-lg text-lg text-black font-bold"
        ></input>
      </div>
      <div className="flex flex-col items-start justify-center w-full gap-1">
        <label className="font-semibold">Category</label>
        <input
          placeholder="Categorise Transaction"
          type="text"
          className="bg-gray-100 pl-4 py-3 w-full rounded-lg text-lg text-black font-bold"
          defaultValue={categoryChip}
        ></input>
      </div>
      <div className="flex items-center justify-around gap-2 w-full">
        {["Salary 🤑", "Income ⬇️", "Gift 🎁"].map((item, index) => (
          <span
            key={index}
            className="border-2 border-white py-1 px-2 rounded-lg cursor-pointer"
            onClick={(e) => {
              handleCategoryChipClick(item.slice(0, -2));
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
            defaultValue={(() => {
              const now = new Date();
              return `${now.getFullYear()}-${String(
                now.getMonth() + 1
              ).padStart(2, "0")}-${String(now.getDate()).padStart(2, "0")}`;
            })()}
            className="bg-gray-100 px-3 py-3 w-full rounded-lg text-black font-bold"
          />
        </div>
        <div className="flex flex-col items-end justify-center w-1/2 gap-1">
          <label className="font-semibold">Time</label>
          <input
            placeholder="Enter Time"
            type="time"
            defaultValue={(() => {
              const now = new Date();
              return `${String(now.getHours()).padStart(2, "0")}:${String(
                now.getMinutes()
              ).padStart(2, "0")}`;
            })()}
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
