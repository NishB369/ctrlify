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
  const { formData } = useAppContext();
  console.log(formData);
  const [allTransactions, setAllTransactions] = useState(false);
  const [addIncome, setAddIcome] = useState(false);
  const [addInvestment, setAddInvestment] = useState(false);
  const [addExpense, setAddExpense] = useState(false);

  return (
    <div className="w-full h-full px-4 flex flex-col gap-4 relative">
      <Header />
      <MainCard />
      <QuickActions
        setAddIcome={setAddIcome}
        setAddInvestment={setAddInvestment}
        setAddExpense={setAddExpense}
      />
      <RecentTransactions setAllTransactions={setAllTransactions} />
      {allTransactions && (
        <AllTransactions setAllTransactions={setAllTransactions} />
      )}
      {addIncome && <AddIncome setAddIcome={setAddIcome} />}
      {addInvestment && <AddInvestment setAddInvestment={setAddInvestment} />}
      {addExpense && <AddExpense setAddExpense={setAddExpense} />}
    </div>
  );
};

export default LoadedHome;
