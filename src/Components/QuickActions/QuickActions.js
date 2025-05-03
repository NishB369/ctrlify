import React from "react";
import QuickActionBtn from "./QuickActionBtn";

const QuickActions = () => {
  return (
    <div className="w-full py-4 flex items-center justify-around gap-2">
      <QuickActionBtn icon={"bi bi-plus"} type={"Add Income"} />
      <QuickActionBtn icon={"bi bi-piggy-bank-fill"} type={"Add Savings"} />
      <QuickActionBtn icon={"bi bi-dash"} type={"Add Expenses"} />
    </div>
  );
};

export default QuickActions;
