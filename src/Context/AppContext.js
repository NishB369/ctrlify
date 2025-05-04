import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false); //true
  const [isSignedUp, setIsSignedUp] = useState(true); // false
  const [formData, setFormData] = useState({
    Name: "Nishchay",
    Email: "nishb@gmail.com ",
    Age: 20,
    Designation: "SDE",
    CurrentBalance: 1234,
    Income: 1200,
    TotalIncome: 0,
    TotalExpense: 0,
    TotalInvestment: 0,
  });

  const [isEdit, setIsEdit] = useState(false);

  const updateFormData = (fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleSignUp = () => {
    setIsSignedUp(true);
    setIsEdit(true);
  };

  const completeLoading = () => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);
    return () => clearTimeout(timer);
  };

  const currentDate = () => {
    const now = new Date();
    return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(
      2,
      "0"
    )}-${String(now.getDate()).padStart(2, "0")}`;
  };

  const currentTime = () => {
    const now = new Date();
    return `${String(now.getHours()).padStart(2, "0")}:${String(
      now.getMinutes()
    ).padStart(2, "0")}`;
  };

  const [incomeFormData, setIncomeFormData] = useState({
    TransactionType: "Income",
    Amount: "",
    Entity: "",
    Category: "",
    Date: currentDate(),
    Time: currentTime(),
  });

  const updateIncomeFormData = (fieldName, value) => {
    setIncomeFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const [incomeTransactions, setIncomeTransactions] = useState([]);

  const addIncomeTransaction = (transaction) => {
    const newTransaction = {
      id: Date.now().toString(),
      ...transaction,
    };

    setIncomeTransactions((prev) => [newTransaction, ...prev]);

    updateFormData(
      "CurrentBalance",
      formData.CurrentBalance + Number(transaction.Amount)
    );

    updateFormData(
      "TotalIncome",
      formData.TotalIncome + Number(transaction.Amount)
    );
  };

  const [expenseFormData, setExpenseFormData] = useState({
    TransactionType: "Expense",
    Amount: "",
    Entity: "",
    Category: "",
    Date: currentDate(),
    Time: currentTime(),
  });

  const updateExpenseFormData = (fieldName, value) => {
    setExpenseFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const [expenseTransactions, setExpenseTransactions] = useState([]);

  const addExpenseTransaction = (transaction) => {
    const newTransaction = {
      id: Date.now().toString(),
      ...transaction,
    };

    setExpenseTransactions((prev) => [newTransaction, ...prev]);

    updateFormData(
      "CurrentBalance",
      formData.CurrentBalance - Number(transaction.Amount)
    );

    updateFormData(
      "TotalExpense",
      formData.TotalExpense + Number(transaction.Amount)
    );
  };

  const [investmentFormData, setInvestmentFormData] = useState({
    TransactionType: "Investment",
    Amount: "",
    Entity: "",
    Category: "",
    Date: currentDate(),
    Time: currentTime(),
  });

  const updateInvestmentFormData = (fieldName, value) => {
    setInvestmentFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const [investmentTransactions, setInvestmentTransactions] = useState([]);

  const addInvestmentTransaction = (transaction) => {
    const newTransaction = {
      id: Date.now().toString(),
      ...transaction,
    };

    setInvestmentTransactions((prev) => [newTransaction, ...prev]);

    updateFormData(
      "TotalInvestment",
      formData.TotalInvestment + Number(transaction.Amount)
    );
  };

  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    const newTransaction = {
      ...transaction,
    };

    setTransactions((prev) => [newTransaction, ...prev]);
  };

  return (
    <AppContext.Provider
      value={{
        isLoading,
        isSignedUp,
        formData,
        isEdit,
        updateFormData,
        completeLoading,
        handleSignUp,
        setIsEdit,

        incomeFormData,
        updateIncomeFormData,
        addIncomeTransaction,
        incomeTransactions,

        expenseFormData,
        updateExpenseFormData,
        addExpenseTransaction,
        expenseTransactions,

        investmentFormData,
        updateInvestmentFormData,
        addInvestmentTransaction,
        investmentTransactions,

        transactions,
        addTransaction,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
