import React, { useState } from "react";
import { useAppContext } from "../../Context/AppContext";

const PersonalDetail = ({ field, placeholder }) => {
  const { formData, updateFormData, isEdit } = useAppContext();

  return (
    <div className="flex flex-col items-start justify-center w-full gap-1">
      <label className="font-semibold">{field}</label>
      <input
        value={formData[field]}
        onChange={(e) => updateFormData(`${field}`, e.target.value)}
        placeholder={placeholder}
        required
        disabled={isEdit}
        type="text"
        className="bg-gray-100 pl-4 py-3 w-full rounded-lg text-lg text-black placeholder:text-black/25"
      ></input>
    </div>
  );
};

export const NumericField = ({ field, placeholder }) => {
  const { formData, updateFormData, isEdit } = useAppContext();

  return (
    <div className="flex flex-col items-start justify-center w-full gap-1">
      <label className="font-semibold">{field}</label>
      <input
        value={formData[field]}
        onChange={(e) => updateFormData(`${field}`, e.target.value)}
        placeholder={placeholder}
        required
        disabled={isEdit}
        type="number"
        className="bg-gray-100 pl-4 py-3 w-full rounded-lg text-lg placeholder:text-black/25"
      ></input>
    </div>
  );
};

export const IncomeField = () => {
  const { formData, updateFormData, isEdit } = useAppContext();

  const [income, setIcome] = useState(formData.Income);
  return (
    <div className="flex flex-col items-start justify-center w-full gap-1">
      <label className="font-semibold">Income</label>
      <div
        className={`bg-gray-100 pl-4 py-3 w-full rounded-lg text-lg ${
          income ? "text-black" : "text-black/25"
        }`}
      >
        {income ? `₹${income}` : "Drag the Slider"}
      </div>
      <div className="w-full relative">
        <input
          value={formData.Income}
          onChange={(e) => (
            updateFormData("Income", e.target.value), setIcome(e.target.value)
          )}
          required
          disabled={isEdit}
          type="range"
          className="py-3 w-full"
          step={1000}
          min={1000}
          max={25000}
        ></input>
        <div className="flex justify-between w-full px-1 -mt-4 text-sm text-gray-600">
          <span className="bi bi-caret-up-fill"> ₹1,000</span>
          <span>
            ₹25,000 <span className="bi bi-caret-up-fill"></span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PersonalDetail;
