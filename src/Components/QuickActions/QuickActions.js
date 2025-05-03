import React from "react";
import QuickActionBtn from "./QuickActionBtn";

const QuickActions = ({ setAddIcome, setAddInvestment, setAddExpense }) => {
  return (
    <div className="w-full py-4 flex items-center justify-around gap-2 -mt-2">
      <QuickActionBtn
        icon={"bi bi-plus"}
        type={"Add Income"}
        clickState={setAddIcome}
      />
      <QuickActionBtn
        icon={"bi bi-piggy-bank-fill"}
        type={"Add Savings"}
        clickState={setAddInvestment}
      />
      <QuickActionBtn
        icon={"bi bi-dash"}
        type={"Add Expenses"}
        clickState={setAddExpense}
      />
    </div>
  );
};

export default QuickActions;
