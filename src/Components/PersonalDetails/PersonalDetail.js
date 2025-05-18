import React, { useState, useEffect } from "react";
import { useAppContext } from "../../Context/AppContext";

const ErrorMessage = ({ message }) => {
  if (!message) return null;
  return <div className="text-xs text-red-500 mt-1">{message}</div>;
};

const PersonalDetail = ({ field, placeholder, validationRules }) => {
  const { formData, updateFormData, isEdit } = useAppContext();
  const [error, setError] = useState("");

  const validate = (value) => {
    if (!validationRules) return "";

    if (validationRules.required && !value) {
      return `${field} is required`;
    }

    if (
      validationRules.pattern &&
      value &&
      !validationRules.pattern.test(value)
    ) {
      return validationRules.message || `Invalid ${field}`;
    }

    return "";
  };

  const handleChange = (e) => {
    const value = e.target.value;
    updateFormData(`${field}`, value);
    setError(validate(value));
  };

  useEffect(() => {
    setError(validate(formData[field]));
  }, []);

  return (
    <div className="flex flex-col items-start justify-center w-full gap-1">
      <label className="font-semibold">{field}</label>
      <input
        value={formData[field] || ""}
        onChange={handleChange}
        onBlur={() => setError(validate(formData[field]))}
        placeholder={placeholder}
        required
        disabled={isEdit}
        type="text"
        className={`bg-gray-100 pl-4 py-3 w-full rounded-lg text-lg text-black placeholder:text-black/25 ${
          error ? "border border-red-500" : ""
        }`}
      />
      <ErrorMessage message={error} />
    </div>
  );
};

export const NumericField = ({ field, placeholder, validationRules }) => {
  const { formData, updateFormData, isEdit } = useAppContext();
  const [error, setError] = useState("");

  const validate = (value) => {
    if (!validationRules) return "";

    if (validationRules.required && !value) {
      return `${field} is required`;
    }

    if (
      validationRules.min !== undefined &&
      value &&
      Number(value) < validationRules.min
    ) {
      return `${field} must be at least ${validationRules.min}`;
    }

    if (
      validationRules.max !== undefined &&
      value &&
      Number(value) > validationRules.max
    ) {
      return `${field} must be at most ${validationRules.max}`;
    }

    return "";
  };

  const handleChange = (e) => {
    const value = e.target.value;
    updateFormData(`${field}`, value);
    setError(validate(value));
  };
  useEffect(() => {
    setError(validate(formData[field]));
  }, []);

  return (
    <div className="flex flex-col items-start justify-center w-full gap-1">
      <label className="font-semibold">{field}</label>
      <input
        value={formData[field] || ""}
        onChange={handleChange}
        onBlur={() => setError(validate(formData[field]))}
        placeholder={placeholder}
        required
        disabled={isEdit}
        type="number"
        className={`bg-gray-100 pl-4 py-3 w-full rounded-lg text-lg placeholder:text-black/25 ${
          error ? "border border-red-500" : ""
        }`}
      />
      <ErrorMessage message={error} />
    </div>
  );
};

export const IncomeField = ({ validationRules }) => {
  const { formData, updateFormData, isEdit } = useAppContext();
  const [income, setIncome] = useState(formData.Income || "");
  const [error, setError] = useState("");

  const validate = (value) => {
    if (!validationRules) return "";

    if (validationRules.required && !value) {
      return "Income is required";
    }

    return "";
  };

  const handleChange = (e) => {
    const value = e.target.value;
    updateFormData("Income", value);
    setIncome(value);
    setError(validate(value));
  };

  useEffect(() => {
    setError(validate(formData.Income));
  }, []);

  return (
    <div className="flex flex-col items-start justify-center w-full gap-1">
      <label className="font-semibold">Income</label>
      <div
        className={`bg-gray-100 pl-4 py-3 w-full rounded-lg text-lg ${
          income ? "text-black" : "text-black/25"
        } ${error ? "border border-red-500" : ""}`}
      >
        {income ? `₹${income}` : "Drag the Slider"}
      </div>
      <div className="w-full relative">
        <input
          value={formData.Income || ""}
          onChange={handleChange}
          onBlur={() => setError(validate(formData.Income))}
          required
          disabled={isEdit}
          type="range"
          className="py-3 w-full"
          step={1000}
          min={1000}
          max={25000}
        />
        <div className="flex justify-between w-full px-1 -mt-4 text-sm text-gray-600">
          <span className="bi bi-caret-up-fill"> ₹1,000</span>
          <span>
            ₹25,000 <span className="bi bi-caret-up-fill"></span>
          </span>
        </div>
      </div>
      <ErrorMessage message={error} />
    </div>
  );
};

export default PersonalDetail;
