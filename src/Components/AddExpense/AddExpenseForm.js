import React, { useEffect, useState } from "react";
import { useAppContext } from "../../Context/AppContext";

const AddExpenseForm = ({ setSubmit }) => {
  const {
    expenseFormData,
    updateExpenseFormData,
    addExpenseTransaction,
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

    updateExpenseFormData("Date", currentDate);
    updateExpenseFormData("Time", currentTime);
  };

  useEffect(() => {
    setCurrentDateTime();
  }, []);

  const validateForm = () => {
    const newErrors = {};

    // Check amount
    if (!expenseFormData.Amount || isNaN(parseFloat(expenseFormData.Amount))) {
      newErrors.Amount = "Amount is required";
    } else if (parseFloat(expenseFormData.Amount) <= 0) {
      newErrors.Amount = "Amount must be positive";
    }

    // Check entity
    if (!expenseFormData.Entity || expenseFormData.Entity.trim() === "") {
      newErrors.Entity = "Entity is required";
    }

    // Check category
    if (!expenseFormData.Category || expenseFormData.Category.trim() === "") {
      newErrors.Category = "Category is required";
    }

    // Check date
    if (!expenseFormData.Date) {
      newErrors.Date = "Date is required";
    }

    // Check time
    if (!expenseFormData.Time) {
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
    addExpenseTransaction(expenseFormData);
    addTransaction(expenseFormData);

    // Reset form
    updateExpenseFormData("Amount", "");
    updateExpenseFormData("Entity", "");
    updateExpenseFormData("Category", "");
    setCurrentDateTime();
    setShowConfirmation(false);
  };

  const cancelSubmit = () => {
    setShowConfirmation(false);
  };

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Amount field */}
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
            value={expenseFormData.Amount || ""}
            onChange={(e) => {
              updateExpenseFormData("Amount", e.target.value);
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
                updateExpenseFormData("Amount", item);
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

      {/* Entity field */}
      <div className="flex flex-col items-start justify-center w-full gap-1">
        <label className="font-semibold">
          Entity To <span className="text-red-500">*</span>
        </label>
        <input
          value={expenseFormData.Entity || ""}
          onChange={(e) => {
            updateExpenseFormData("Entity", e.target.value);
            if (errors.Entity) {
              const newErrors = { ...errors };
              delete newErrors.Entity;
              setErrors(newErrors);
            }
          }}
          placeholder="Spent On"
          type="text"
          className={`bg-gray-100 pl-4 py-3 w-full rounded-lg text-lg text-black font-bold ${
            errors.Entity ? "border-2 border-red-500" : ""
          }`}
        />
        {errors.Entity && (
          <p className="text-red-500 text-sm mt-1">{errors.Entity}</p>
        )}
      </div>

      {/* Category field */}
      <div className="flex flex-col md:flex-row md:items-center gap-4">
        <div className="flex flex-col items-start justify-center w-full gap-1">
          <label className="font-semibold">
            Category <span className="text-red-500">*</span>
          </label>
          <input
            value={expenseFormData.Category || ""}
            placeholder="Categorise Transaction"
            type="text"
            className={`bg-gray-100 pl-4 py-3 w-full rounded-lg text-lg text-black font-bold ${
              errors.Category ? "border-2 border-red-500" : ""
            }`}
            onChange={(e) => {
              updateExpenseFormData("Category", e.target.value);
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
          {["Bills 📃", "Food 😋", "Transfers 💸"].map((item, index) => (
            <div
              key={index}
              className="border-2 border-white py-1 px-2 md:px-6 rounded-lg cursor-pointer md:pt-2 hover:bg-blue-500 transition-colors"
              onClick={() => {
                updateExpenseFormData("Category", item.split(" ")[0]);
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

      {/* Date and Time fields */}
      <div className="w-full flex items-center justify-between gap-2">
        <div className="flex flex-col items-start justify-center w-1/2 gap-1">
          <label className="font-semibold">
            Date <span className="text-red-500">*</span>
          </label>
          <input
            placeholder="Enter Date"
            type="date"
            value={expenseFormData.Date || ""}
            onChange={(e) => {
              updateExpenseFormData("Date", e.target.value);
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
            value={expenseFormData.Time || ""}
            onChange={(e) => {
              updateExpenseFormData("Time", e.target.value);
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

      {/* Submit button */}
      <button
        type="button"
        className="bg-blue-500 w-full py-3 rounded-md font-semibold cursor-pointer hover:bg-blue-600 transition-colors"
        onClick={handleSubmitClick}
      >
        Submit
      </button>

      {/* Confirmation modal */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg p-6 max-w-md w-full">
            <h3 className="text-lg font-bold text-black mb-4">
              Confirm Expense
            </h3>
            <div className="text-black mb-6">
              <p>
                <span className="font-semibold">Amount:</span> ₹
                {expenseFormData.Amount}
              </p>
              <p>
                <span className="font-semibold">To:</span>{" "}
                {expenseFormData.Entity}
              </p>
              <p>
                <span className="font-semibold">Category:</span>{" "}
                {expenseFormData.Category}
              </p>
              <p>
                <span className="font-semibold">Date:</span>{" "}
                {expenseFormData.Date}
              </p>
              <p>
                <span className="font-semibold">Time:</span>{" "}
                {expenseFormData.Time}
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

export default AddExpenseForm;
