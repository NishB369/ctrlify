import React from "react";
import AddExpenseVid from "../../../public/media/videos/AddExpenseVid.mp4";
import AddExpenseForm from "./AddExpenseForm";

const AddExpense = ({ setAddExpense }) => {
  const handleClose = () => {
    setAddExpense(false);
  };
  return (
    <div className="w-[92.5%] flex flex-col items-center justify-start bg-[#121826] absolute top-20 left-[3.75%] rounded-t-3xl px-6 pt-6 opacity-[97.5%] text-white gap-4 bottom-0 pb-0">
      <div
        className="bi bi-x-circle-fill text-xl absolute right-6"
        onClick={handleClose}
      ></div>
      <div className="flex flex-col items-center justify-center gap-2">
        <video
          src={AddExpenseVid}
          autoPlay
          muted
          loop
          className="w-30 h-30 rounded-full"
        />
        <div className="text-2xl">
          Add to <span className="font-semibold italic">Expenses</span>
        </div>
      </div>
      <AddExpenseForm />
    </div>
  );
};

export default AddExpense;
