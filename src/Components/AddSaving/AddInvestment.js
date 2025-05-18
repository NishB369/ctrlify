import React, { useState, useEffect } from "react";
import AddInvestmentVid from "../../../public/media/videos/AddInvestmentVid.mp4";
import AddInvestmentForm from "./AddInvestmentForm";
import TickVid from "../../../public/media/videos/Tick.mp4";
import { useAppContext } from "../../Context/AppContext";

const AddInvestment = ({ setAddInvestment }) => {
  const [submit, setSubmit] = useState(false);
  const { investmentTransactions, transactions } = useAppContext();

  const handleClose = () => {
    setAddInvestment(false);
  };

  useEffect(() => {
    if (submit) {
      const timer = setTimeout(() => {
        handleClose();
        console.log(investmentTransactions);
        console.log(transactions);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [submit, setAddInvestment]);

  return (
    <>
      {!submit && (
        <div
          className="bi bi-x-circle-fill text-xl absolute top-4 right-8 md:right-44 z-10 text-white cursor-pointer"
          onClick={handleClose}
        ></div>
      )}
      <div
        className={`quickAction w-[92.5%] md:mx-20 md:w-[80%] flex flex-col items-center ${
          submit ? "justify-center" : `justify-start`
        } bg-[#121826] absolute left-[3.75%] rounded-t-3xl px-6 pt-4 opacity-[97.5%] text-white gap-2 bottom-0 h-full`}
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
                Added to <span className="font-semibold italic">Savings</span>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex flex-col items-center justify-center gap-1">
              <video
                src={AddInvestmentVid}
                autoPlay
                muted
                loop
                className="w-20 h-20 rounded-full"
              />
              <div className="text-xl">
                Add to <span className="font-semibold italic">Savings</span>
              </div>
            </div>
            <AddInvestmentForm setSubmit={setSubmit} />
          </>
        )}
      </div>
    </>
  );
};

export default AddInvestment;
