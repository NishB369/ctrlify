import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import MainCard from "../../Components/MainCard/MainCard";
import QuickActions from "../../Components/QuickActions/QuickActions";
import RecentTransactions from "../../Components/RecentTransactions/RecentTransactions";
import AllTransactions from "../../Components/AllTransactions/AllTransactions";
import AddIncome from "../../Components/AddIcome/AddIcome";
import AddInvestment from "../../Components/AddSaving/AddInvestment";
import AddExpense from "../../Components/AddExpense/AddExpense";
import { useAppContext } from "../../Context/AppContext";

const LoadedHome = () => {
  const { transactions } = useAppContext();
  const [allTransactions, setAllTransactions] = useState(false);
  const [addIncome, setAddIcome] = useState(false);
  const [addInvestment, setAddInvestment] = useState(false);
  const [addExpense, setAddExpense] = useState(false);

  return (
    <>
      <Header />

      <div className="w-full h-full flex flex-col md:flex-row gap-4 md:gap-10 relative md:mt-6 md:px-40">
        <div className="flex flex-col gap-4 md:gap-8 md:w-[50%]">
          <MainCard />
          <QuickActions
            setAddIcome={setAddIcome}
            setAddInvestment={setAddInvestment}
            setAddExpense={setAddExpense}
          />
        </div>
        <div className="md:w-[50%]">
          <RecentTransactions
            setAllTransactions={setAllTransactions}
            renderList={transactions}
            webLength={7}
          />
        </div>
        {allTransactions && (
          <AllTransactions
            setAllTransactions={setAllTransactions}
            renderList={transactions}
          />
        )}
        {addIncome && <AddIncome setAddIcome={setAddIcome} />}
        {addInvestment && <AddInvestment setAddInvestment={setAddInvestment} />}
        {addExpense && <AddExpense setAddExpense={setAddExpense} />}
      </div>
    </>
  );
};

export default LoadedHome;
