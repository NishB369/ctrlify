import React, { useEffect, useState } from "react";
import { useAppContext } from "../../Context/AppContext";

const AddIncomeForm = ({ setSubmit }) => {
  const {
    incomeFormData,
    updateIncomeFormData,
    addIncomeTransaction,
    addTransaction,
  } = useAppContext();

  const [errors, setErrors] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);

  const setCurrentDateTime = () => {
    const now = new Date();
    const currentDate = now.toISOString().split("T")[0];
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    const currentTime = `${hours}:${minutes}`;

    updateIncomeFormData("Date", currentDate);
    updateIncomeFormData("Time", currentTime);
  };

  useEffect(() => {
    setCurrentDateTime();
  }, []);

  const validateForm = () => {
    const newErrors = {};

    if (!incomeFormData.Amount || isNaN(parseFloat(incomeFormData.Amount))) {
      newErrors.Amount = "Amount is required";
    } else if (parseFloat(incomeFormData.Amount) <= 0) {
      newErrors.Amount = "Amount must be positive";
    }

    if (!incomeFormData.Entity || incomeFormData.Entity.trim() === "") {
      newErrors.Entity = "Entity is required";
    }

    if (!incomeFormData.Category || incomeFormData.Category.trim() === "") {
      newErrors.Category = "Category is required";
    }

    if (!incomeFormData.Date) {
      newErrors.Date = "Date is required";
    }

    if (!incomeFormData.Time) {
      newErrors.Time = "Time is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmitClick = () => {
    if (validateForm()) {
      setShowConfirmation(true);
    }
  };

  const confirmSubmit = () => {
    setSubmit(true);
    addIncomeTransaction(incomeFormData);
    addTransaction(incomeFormData);

    updateIncomeFormData("Amount", "");
    updateIncomeFormData("Entity", "");
    updateIncomeFormData("Category", "");
    setCurrentDateTime();
    setShowConfirmation(false);
  };

  const cancelSubmit = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex flex-col items-start justify-center w-full gap-1">
          <label className="font-semibold">
            Amount <span className="text-red-500">*</span>
          </label>
          <input
            placeholder="Enter Money"
            type="number"
            className={`bg-gray-100 pl-4 py-3 w-full rounded-lg text-lg text-black font-bold ${
              errors.Amount ? "border-2 border-red-500" : ""
            }`}
            value={incomeFormData.Amount || ""}
            onChange={(e) => {
              updateIncomeFormData("Amount", e.target.value);
              if (errors.Amount) {
                const newErrors = { ...errors };
                delete newErrors.Amount;
                setErrors(newErrors);
              }
            }}
          />
          {errors.Amount && (
            <p className="text-red-500 text-sm mt-1">{errors.Amount}</p>
          )}
        </div>
        <div className="flex items-center justify-around gap-2 -mt-1 md:mt-6 w-full">
          {[50, 100, 250, 500].map((item, index) => (
            <div
              key={index}
              className="border-2 border-white py-1 px-3 md:px-6 rounded-lg cursor-pointer md:pt-2 hover:bg-blue-500 transition-colors"
              onClick={() => {
                updateIncomeFormData("Amount", item);
                if (errors.Amount) {
                  const newErrors = { ...errors };
                  delete newErrors.Amount;
                  setErrors(newErrors);
                }
              }}
            >
              ₹{item}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-start justify-center w-full gap-1">
        <label className="font-semibold">
          Entity From <span className="text-red-500">*</span>
        </label>
        <input
          value={incomeFormData.Entity || ""}
          onChange={(e) => {
            updateIncomeFormData("Entity", e.target.value);
            if (errors.Entity) {
              const newErrors = { ...errors };
              delete newErrors.Entity;
              setErrors(newErrors);
            }
          }}
          placeholder="Received From"
          type="text"
          className={`bg-gray-100 pl-4 py-3 w-full rounded-lg text-lg text-black font-bold ${
            errors.Entity ? "border-2 border-red-500" : ""
          }`}
        />
        {errors.Entity && (
          <p className="text-red-500 text-sm mt-1">{errors.Entity}</p>
        )}
      </div>

      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex flex-col items-start justify-center w-full gap-1">
          <label className="font-semibold">
            Category <span className="text-red-500">*</span>
          </label>
          <input
            value={incomeFormData.Category || ""}
            placeholder="Categorise Transaction"
            type="text"
            className={`bg-gray-100 pl-4 py-3 w-full rounded-lg text-lg text-black font-bold ${
              errors.Category ? "border-2 border-red-500" : ""
            }`}
            onChange={(e) => {
              updateIncomeFormData("Category", e.target.value);
              if (errors.Category) {
                const newErrors = { ...errors };
                delete newErrors.Category;
                setErrors(newErrors);
              }
            }}
          />
          {errors.Category && (
            <p className="text-red-500 text-sm mt-1">{errors.Category}</p>
          )}
        </div>
        <div className="flex items-center justify-around gap-2 -mt-1 w-full md:mt-6">
          {["Salary 🤑", "Income ⬇️", "Gift 🎁"].map((item, index) => (
            <div
              key={index}
              className="border-2 border-white py-1 px-2 md:px-6 rounded-lg cursor-pointer md:pt-2 hover:bg-blue-500 transition-colors"
              onClick={() => {
                updateIncomeFormData("Category", item.split(" ")[0]);
                if (errors.Category) {
                  const newErrors = { ...errors };
                  delete newErrors.Category;
                  setErrors(newErrors);
                }
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="w-full flex items-center justify-between gap-2">
        <div className="flex flex-col items-start justify-center w-1/2 gap-1">
          <label className="font-semibold">
            Date <span className="text-red-500">*</span>
          </label>
          <input
            placeholder="Enter Date"
            type="date"
            value={incomeFormData.Date || ""}
            onChange={(e) => {
              updateIncomeFormData("Date", e.target.value);
              if (errors.Date) {
                const newErrors = { ...errors };
                delete newErrors.Date;
                setErrors(newErrors);
              }
            }}
            className={`bg-gray-100 px-3 py-3 w-full rounded-lg text-black font-bold ${
              errors.Date ? "border-2 border-red-500" : ""
            }`}
          />
          {errors.Date && (
            <p className="text-red-500 text-sm mt-1">{errors.Date}</p>
          )}
        </div>
        <div className="flex flex-col items-end justify-center w-1/2 gap-1">
          <label className="font-semibold">
            Time <span className="text-red-500">*</span>
          </label>
          <input
            placeholder="Enter Time"
            type="time"
            value={incomeFormData.Time || ""}
            onChange={(e) => {
              updateIncomeFormData("Time", e.target.value);
              if (errors.Time) {
                const newErrors = { ...errors };
                delete newErrors.Time;
                setErrors(newErrors);
              }
            }}
            className={`bg-gray-100 px-3 py-3 w-full rounded-lg text-black font-bold ${
              errors.Time ? "border-2 border-red-500" : ""
            }`}
          />
          {errors.Time && (
            <p className="text-red-500 text-sm mt-1">{errors.Time}</p>
          )}
        </div>
      </div>

      <button
        type="button"
        className="bg-blue-500 w-full py-3 rounded-md font-semibold cursor-pointer hover:bg-blue-600 transition-colors"
        onClick={handleSubmitClick}
      >
        Submit
      </button>

      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-bold text-black mb-4">
              Confirm Transaction
            </h3>
            <div className="text-black mb-6">
              <p>
                <span className="font-semibold">Amount:</span> ₹
                {incomeFormData.Amount}
              </p>
              <p>
                <span className="font-semibold">From:</span>{" "}
                {incomeFormData.Entity}
              </p>
              <p>
                <span className="font-semibold">Category:</span>{" "}
                {incomeFormData.Category}
              </p>
              <p>
                <span className="font-semibold">Date:</span>{" "}
                {incomeFormData.Date}
              </p>
              <p>
                <span className="font-semibold">Time:</span>{" "}
                {incomeFormData.Time}
              </p>
            </div>
            <div className="flex gap-4">
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded-md font-semibold w-1/2 hover:bg-gray-400 transition-colors"
                onClick={cancelSubmit}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold w-1/2 hover:bg-green-600 transition-colors"
                onClick={confirmSubmit}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddIncomeForm;
