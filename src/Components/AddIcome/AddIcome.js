import React from "react";

const AddIncome = ({ setAddIcome }) => {
  const handleClose = () => {
    setAddIcome(false);
  };
  return (
    <div className="flex items-center justify-between px-4">
      <div>Add Icome</div>
      <div>
        <span className="bi bi-x-circle" onClick={handleClose}></span>
      </div>
    </div>
  );
};

export default AddIncome;
