import React, { useState, useEffect } from "react";
import { useAppContext } from "../../Context/AppContext";

const TransactionModal = ({ isOpen, onClose, transaction }) => {
  const {
    incomeTransactions,
    setIncomeTransactions,
    expenseTransactions,
    setExpenseTransactions,
    investmentTransactions,
    setInvestmentTransactions,
    transactions,
    setTransactions,
    updateFormData,
    formData,
  } = useAppContext();

  const [isEditing, setIsEditing] = useState(false);
  const [editedTransaction, setEditedTransaction] = useState({});
  const [errors, setErrors] = useState({});
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

  useEffect(() => {
    if (transaction) {
      setEditedTransaction({ ...transaction });
    }
  }, [transaction]);

  if (!isOpen || !transaction) return null;

  const handleInputChange = (field, value) => {
    setEditedTransaction((prev) => ({
      ...prev,
      [field]: value,
    }));

    if (errors[field]) {
      const newErrors = { ...errors };
      delete newErrors[field];
      setErrors(newErrors);
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (
      !editedTransaction.Amount ||
      isNaN(parseFloat(editedTransaction.Amount))
    ) {
      newErrors.Amount = "Amount is required";
    } else if (parseFloat(editedTransaction.Amount) <= 0) {
      newErrors.Amount = "Amount must be positive";
    }

    if (!editedTransaction.Entity || editedTransaction.Entity.trim() === "") {
      newErrors.Entity = "Entity is required";
    }

    if (
      !editedTransaction.Category ||
      editedTransaction.Category.trim() === ""
    ) {
      newErrors.Category = "Category is required";
    }

    if (!editedTransaction.Date) {
      newErrors.Date = "Date is required";
    }

    if (!editedTransaction.Time) {
      newErrors.Time = "Time is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSave = () => {
    if (!validateForm()) return;

    const originalAmount = Number(transaction.Amount);
    const newAmount = Number(editedTransaction.Amount);
    const amountDifference = newAmount - originalAmount;

    const updateTransactionList = (list, setList) => {
      const updatedList = list.map((item) =>
        item.id === transaction.id ? editedTransaction : item
      );
      setList(updatedList);
    };

    const updatedAllTransactions = transactions.map((item) =>
      item.id === transaction.id ? editedTransaction : item
    );
    setTransactions(updatedAllTransactions);

    switch (transaction.TransactionType) {
      case "Income":
        updateTransactionList(incomeTransactions, setIncomeTransactions);
        updateFormData("TotalIncome", formData.TotalIncome + amountDifference);
        updateFormData(
          "CurrentBalance",
          formData.CurrentBalance + amountDifference
        );
        break;
      case "Expense":
        updateTransactionList(expenseTransactions, setExpenseTransactions);
        updateFormData(
          "TotalExpense",
          formData.TotalExpense + amountDifference
        );
        updateFormData(
          "CurrentBalance",
          formData.CurrentBalance - amountDifference
        );
        break;
      case "Investment":
        updateTransactionList(
          investmentTransactions,
          setInvestmentTransactions
        );
        updateFormData(
          "TotalInvestment",
          formData.TotalInvestment + amountDifference
        );
        break;
      default:
        break;
    }

    setIsEditing(false);
    onClose();
  };

  const handleDelete = () => {
    setShowDeleteConfirmation(true);
  };

  const confirmDelete = () => {
    const amount = Number(transaction.Amount);

    const filterTransactionList = (list, setList) => {
      const updatedList = list.filter((item) => item.id !== transaction.id);
      setList(updatedList);
    };

    const updatedAllTransactions = transactions.filter(
      (item) => item.id !== transaction.id
    );
    setTransactions(updatedAllTransactions);

    switch (transaction.TransactionType) {
      case "Income":
        filterTransactionList(incomeTransactions, setIncomeTransactions);
        updateFormData("TotalIncome", formData.TotalIncome - amount);
        updateFormData("CurrentBalance", formData.CurrentBalance - amount);
        break;
      case "Expense":
        filterTransactionList(expenseTransactions, setExpenseTransactions);
        updateFormData("TotalExpense", formData.TotalExpense - amount);
        updateFormData("CurrentBalance", formData.CurrentBalance + amount);
        break;
      case "Investment":
        filterTransactionList(
          investmentTransactions,
          setInvestmentTransactions
        );
        updateFormData("TotalInvestment", formData.TotalInvestment - amount);
        break;
      default:
        break;
    }

    setShowDeleteConfirmation(false);
    onClose();
  };

  const getTransactionTypeLabel = () => {
    switch (transaction.TransactionType) {
      case "Income":
        return "Income";
      case "Expense":
        return "Expense";
      case "Investment":
        return "Investment";
      default:
        return "Transaction";
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg p-6 max-w-md w-full text-black">
        {!isEditing && !showDeleteConfirmation && (
          <>
            <h3 className="text-lg font-bold mb-4">Transaction Details</h3>
            <div className="mb-6">
              <p>
                <span className="font-semibold">Type:</span>{" "}
                {transaction.TransactionType}
              </p>
              <p>
                <span className="font-semibold">Amount:</span> ₹
                {transaction.Amount}
              </p>
              <p>
                <span className="font-semibold">
                  {transaction.TransactionType === "Income"
                    ? "From"
                    : transaction.TransactionType === "Expense"
                    ? "To"
                    : "In"}
                  :
                </span>{" "}
                {transaction.Entity}
              </p>
              <p>
                <span className="font-semibold">Category:</span>{" "}
                {transaction.Category}
              </p>
              <p>
                <span className="font-semibold">Date:</span> {transaction.Date}
              </p>
              <p>
                <span className="font-semibold">Time:</span> {transaction.Time}
              </p>
            </div>
            <div className="flex gap-3">
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded-md font-semibold flex-1 hover:bg-gray-400 transition-colors"
                onClick={onClose}
              >
                Close
              </button>
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold flex-1 hover:bg-blue-600 transition-colors"
                onClick={() => setIsEditing(true)}
              >
                Edit
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold flex-1 hover:bg-red-600 transition-colors"
                onClick={handleDelete}
              >
                Delete
              </button>
            </div>
          </>
        )}

        {isEditing && (
          <>
            <h3 className="text-lg font-bold mb-4">
              Edit {getTransactionTypeLabel()}
            </h3>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col items-start justify-center w-full gap-1">
                <label className="font-semibold">
                  Amount <span className="text-red-500">*</span>
                </label>
                <input
                  type="number"
                  className={`bg-gray-100 pl-4 py-3 w-full rounded-lg text-lg text-black font-bold ${
                    errors.Amount ? "border-2 border-red-500" : ""
                  }`}
                  value={editedTransaction.Amount || ""}
                  onChange={(e) => handleInputChange("Amount", e.target.value)}
                />
                {errors.Amount && (
                  <p className="text-red-500 text-sm mt-1">{errors.Amount}</p>
                )}
              </div>

              <div className="flex flex-col items-start justify-center w-full gap-1">
                <label className="font-semibold">
                  {transaction.TransactionType === "Income"
                    ? "Entity From"
                    : transaction.TransactionType === "Expense"
                    ? "Entity To"
                    : "Entity"}
                  <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className={`bg-gray-100 pl-4 py-3 w-full rounded-lg text-lg text-black font-bold ${
                    errors.Entity ? "border-2 border-red-500" : ""
                  }`}
                  value={editedTransaction.Entity || ""}
                  onChange={(e) => handleInputChange("Entity", e.target.value)}
                />
                {errors.Entity && (
                  <p className="text-red-500 text-sm mt-1">{errors.Entity}</p>
                )}
              </div>

              <div className="flex flex-col items-start justify-center w-full gap-1">
                <label className="font-semibold">
                  Category <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  className={`bg-gray-100 pl-4 py-3 w-full rounded-lg text-lg text-black font-bold ${
                    errors.Category ? "border-2 border-red-500" : ""
                  }`}
                  value={editedTransaction.Category || ""}
                  onChange={(e) =>
                    handleInputChange("Category", e.target.value)
                  }
                />
                {errors.Category && (
                  <p className="text-red-500 text-sm mt-1">{errors.Category}</p>
                )}
              </div>

              <div className="w-full flex items-center justify-between gap-2">
                <div className="flex flex-col items-start justify-center w-1/2 gap-1">
                  <label className="font-semibold">
                    Date <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="date"
                    className={`bg-gray-100 px-3 py-3 w-full rounded-lg text-black font-bold ${
                      errors.Date ? "border-2 border-red-500" : ""
                    }`}
                    value={editedTransaction.Date || ""}
                    onChange={(e) => handleInputChange("Date", e.target.value)}
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
                    type="time"
                    className={`bg-gray-100 px-3 py-3 w-full rounded-lg text-black font-bold ${
                      errors.Time ? "border-2 border-red-500" : ""
                    }`}
                    value={editedTransaction.Time || ""}
                    onChange={(e) => handleInputChange("Time", e.target.value)}
                  />
                  {errors.Time && (
                    <p className="text-red-500 text-sm mt-1">{errors.Time}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="flex gap-3 mt-6">
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded-md font-semibold flex-1 hover:bg-gray-400 transition-colors"
                onClick={() => setIsEditing(false)}
              >
                Cancel
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded-md font-semibold flex-1 hover:bg-green-600 transition-colors"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </>
        )}

        {showDeleteConfirmation && (
          <>
            <h3 className="text-lg font-bold mb-4">Confirm Delete</h3>
            <p className="mb-6">
              Are you sure you want to delete this{" "}
              {transaction.TransactionType.toLowerCase()}?
            </p>
            <div className="flex gap-3">
              <button
                className="bg-gray-300 text-black px-4 py-2 rounded-md font-semibold flex-1 hover:bg-gray-400 transition-colors"
                onClick={() => setShowDeleteConfirmation(false)}
              >
                Cancel
              </button>
              <button
                className="bg-red-500 text-white px-4 py-2 rounded-md font-semibold flex-1 hover:bg-red-600 transition-colors"
                onClick={confirmDelete}
              >
                Delete
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default TransactionModal;
