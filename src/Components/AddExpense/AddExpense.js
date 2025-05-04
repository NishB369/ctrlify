import React, { useState, useEffect } from "react";
import AddExpenseVid from "../../../public/media/videos/AddExpenseVid.mp4";
import AddExpenseForm from "./AddExpenseForm";
import TickVid from "../../../public/media/videos/Tick.mp4";

const AddExpense = ({ setAddExpense }) => {
  const [submit, setSubmit] = useState(false);

  const handleClose = () => {
    setAddExpense(false);
  };

  useEffect(() => {
    if (submit) {
      const timer = setTimeout(() => {
        handleClose();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [submit, setAddExpense]);

  return (
    <>
      {!submit && (
        <div
          className="bi bi-x-circle-fill text-xl absolute top-24 right-10 z-10 text-white"
          onClick={handleClose}
        ></div>
      )}
      <div
        className={`w-[92.5%] flex flex-col items-center ${
          submit ? "justify-center" : `justify-start`
        } bg-[#121826] absolute top-20 left-[3.75%] rounded-t-3xl px-6 pt-6 opacity-[97.5%] text-white gap-4 bottom-0 pb-0`}
      >
        {submit ? (
          <div className="flex flex-col items-center justify-center gap-6">
            <video
              src={TickVid}
              autoPlay
              muted
              loop
              className="w-60 h-60 rounded-full"
            />
            <div>
              <div></div>
              <div className="text-3xl">
                Added to <span className="font-semibold italic">Expenses</span>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center gap-2">
              <video
                src={AddExpenseVid}
                autoPlay
                muted
                loop
                className="w-20 h-20 rounded-full"
              />
              <div className="text-xl">
                Add to <span className="font-semibold italic">Expense</span>
              </div>
            </div>
            <AddExpenseForm setSubmit={setSubmit} />
          </>
        )}
      </div>
    </>
  );
};

export default AddExpense;
