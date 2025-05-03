import React from "react";

const AddInvestment = ({ setAddInvestment }) => {
  const handleClose = () => {
    setAddInvestment(false);
  };
  return (
    <div className="flex items-center justify-between px-4">
      <div>Add Saving</div>
      <div>
        <span className="bi bi-x-circle" onClick={handleClose}></span>
      </div>
    </div>
  );
};

export default AddInvestment;
