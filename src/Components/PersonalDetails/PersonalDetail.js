import React, { useState } from "react";

const PersonalDetail = ({ field, placeholder }) => {
  return (
    <div className="flex flex-col items-start justify-center w-full gap-1">
      <label className="font-semibold">{field}</label>
      <input
        placeholder={placeholder}
        type="text"
        className="bg-gray-100 pl-4 py-3 w-full rounded-lg text-lg text-black"
      ></input>
    </div>
  );
};

export const AgeField = () => {
  return (
    <div className="flex flex-col items-start justify-center w-full gap-1">
      <label className="font-semibold">Age</label>
      <input
        placeholder="Enter Age"
        type="number"
        className="bg-gray-100 pl-4 py-3 w-full rounded-lg text-lg"
      ></input>
    </div>
  );
};

export const IncomeField = () => {
  const [income, setIcome] = useState(null);
  return (
    <div className="flex flex-col items-start justify-center w-full gap-1">
      <label className="font-semibold">Income</label>
      <div className="bg-gray-100 pl-4 py-3 w-full rounded-lg text-lg">
        {income ? `₹${income}` : "Drag the Slider"}
      </div>
      <div className="w-full relative">
        <input
          type="range"
          className="py-3 w-full"
          onChange={(e) => {
            setIcome(e.target.value);
          }}
          step={1000}
          min={1000}
          max={25000}
        ></input>
        <div className="flex justify-between w-full px-1 -mt-4 text-sm text-gray-600">
          <span className="bi bi-caret-up-fill"> ₹1,000</span>
          <span>₹25,000 <span className="bi bi-caret-up-fill"></span></span>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetail;
