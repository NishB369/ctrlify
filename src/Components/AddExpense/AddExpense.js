import React from "react";

const AddExpense = ({ setAddExpense }) => {
  const handleClose = () => {
    setAddExpense(false);
  };
  return (
    <div className="flex items-center justify-between px-4">
      <div>Add Expense</div>
      <div>
        <span className="bi bi-x-circle" onClick={handleClose}></span>
      </div>
    </div>
  );
};

export default AddExpense;
