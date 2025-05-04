import { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialIncomeTransactions = [
    {
      id: "4",
      TransactionType: "Income",
      Amount: "300",
      Entity: "Gift",
      Category: "Family",
      Date: "2025-05-04",
      Time: "20:15",
    },
    {
      id: "3",
      TransactionType: "Income",
      Amount: "500",
      Entity: "Investment Return",
      Category: "Investments",
      Date: "2025-05-03",
      Time: "11:45",
    },
    {
      id: "2",
      TransactionType: "Income",
      Amount: "250",
      Entity: "Freelance Project",
      Category: "Side Hustle",
      Date: "2025-05-02",
      Time: "15:30",
    },
    {
      id: "1",
      TransactionType: "Income",
      Amount: "1000",
      Entity: "Salary",
      Category: "Job",
      Date: "2025-05-01",
      Time: "09:00",
    },
  ];

  const initialExpenseTransactions = [
    {
      id: "1",
      TransactionType: "Expense",
      Amount: "50",
      Entity: "Groceries",
      Category: "Food",
      Date: "2025-05-04",
      Time: "10:15",
    },
    {
      id: "2",
      TransactionType: "Expense",
      Amount: "120",
      Entity: "Restaurant",
      Category: "Food",
      Date: "2025-05-04",
      Time: "19:30",
    },
    {
      id: "3",
      TransactionType: "Expense",
      Amount: "200",
      Entity: "Shopping",
      Category: "Clothing",
      Date: "2025-05-03",
      Time: "14:00",
    },
    {
      id: "4",
      TransactionType: "Expense",
      Amount: "75",
      Entity: "Taxi",
      Category: "Transport",
      Date: "2025-05-03",
      Time: "22:10",
    },
    {
      id: "5",
      TransactionType: "Expense",
      Amount: "30",
      Entity: "Coffee",
      Category: "Food",
      Date: "2025-05-02",
      Time: "08:45",
    },
    {
      id: "6",
      TransactionType: "Expense",
      Amount: "400",
      Entity: "Electronics",
      Category: "Gadgets",
      Date: "2025-05-02",
      Time: "17:20",
    },
    {
      id: "7",
      TransactionType: "Expense",
      Amount: "60",
      Entity: "Books",
      Category: "Education",
      Date: "2025-05-01",
      Time: "11:30",
    },
    {
      id: "8",
      TransactionType: "Expense",
      Amount: "90",
      Entity: "Gas",
      Category: "Transport",
      Date: "2025-05-01",
      Time: "15:50",
    },
    {
      id: "9",
      TransactionType: "Expense",
      Amount: "35",
      Entity: "Snacks",
      Category: "Food",
      Date: "2025-05-01",
      Time: "20:25",
    },
    {
      id: "10",
      TransactionType: "Expense",
      Amount: "100",
      Entity: "Medical",
      Category: "Health",
      Date: "2025-05-01",
      Time: "09:10",
    },
  ];

  const initialInvestmentTransactions = [
    {
      id: "1",
      TransactionType: "Investment",
      Amount: "500",
      Entity: "Stocks",
      Category: "Equity",
      Date: "2025-05-04",
      Time: "10:00",
    },
    {
      id: "2",
      TransactionType: "Investment",
      Amount: "300",
      Entity: "Mutual Fund",
      Category: "Debt",
      Date: "2025-05-04",
      Time: "16:30",
    },
    {
      id: "3",
      TransactionType: "Investment",
      Amount: "200",
      Entity: "Gold",
      Category: "Commodities",
      Date: "2025-05-03",
      Time: "12:45",
    },
    {
      id: "4",
      TransactionType: "Investment",
      Amount: "150",
      Entity: "Crypto",
      Category: "Digital",
      Date: "2025-05-03",
      Time: "21:10",
    },
    {
      id: "5",
      TransactionType: "Investment",
      Amount: "400",
      Entity: "Fixed Deposit",
      Category: "Savings",
      Date: "2025-05-02",
      Time: "09:30",
    },
    {
      id: "6",
      TransactionType: "Investment",
      Amount: "350",
      Entity: "Real Estate Fund",
      Category: "Property",
      Date: "2025-05-02",
      Time: "18:20",
    },
    {
      id: "7",
      TransactionType: "Investment",
      Amount: "250",
      Entity: "Pension Fund",
      Category: "Retirement",
      Date: "2025-05-01",
      Time: "11:00",
    },
    {
      id: "8",
      TransactionType: "Investment",
      Amount: "600",
      Entity: "Savings Account",
      Category: "Savings",
      Date: "2025-05-01",
      Time: "14:45",
    },
    {
      id: "9",
      TransactionType: "Investment",
      Amount: "100",
      Entity: "ETF",
      Category: "Equity",
      Date: "2025-05-01",
      Time: "17:30",
    },
    {
      id: "10",
      TransactionType: "Investment",
      Amount: "450",
      Entity: "Bonds",
      Category: "Debt",
      Date: "2025-05-01",
      Time: "20:15",
    },
  ];

  const calculateTotalAmount = (transactions) => {
    return transactions.reduce((total, transaction) => {
      return total + Number(transaction.Amount);
    }, 0);
  };

  const allInitialTransactions = [
    ...initialIncomeTransactions.map((t) => ({ ...t })),
    ...initialExpenseTransactions.map((t) => ({ ...t })),
    ...initialInvestmentTransactions.map((t) => ({ ...t })),
  ];

  allInitialTransactions.sort((a, b) => {
    const dateA = new Date(`${a.Date}T${a.Time}`);
    const dateB = new Date(`${b.Date}T${b.Time}`);
    return dateB - dateA;
  });

  const initialTotalIncome = calculateTotalAmount(initialIncomeTransactions);
  const initialTotalExpense = calculateTotalAmount(initialExpenseTransactions);
  const initialTotalInvestment = calculateTotalAmount(
    initialInvestmentTransactions
  );

  const [isLoading, setIsLoading] = useState(false); //true
  const [isSignedUp, setIsSignedUp] = useState(true); // false
  const [formData, setFormData] = useState({
    Name: "Nishchay",
    Email: "nishb@gmail.com ",
    Age: 20,
    Designation: "SDE",
    CurrentBalance:
      initialTotalIncome - initialTotalExpense + initialTotalInvestment,
    Income: 1200,
    TotalIncome: initialTotalIncome,
    TotalExpense: initialTotalExpense,
    TotalInvestment: initialTotalInvestment,
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

  const [incomeTransactions, setIncomeTransactions] = useState(
    initialIncomeTransactions
  );

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

  const [expenseTransactions, setExpenseTransactions] = useState(
    initialExpenseTransactions
  );

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

  const [investmentTransactions, setInvestmentTransactions] = useState(
    initialInvestmentTransactions
  );

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

  const [transactions, setTransactions] = useState(allInitialTransactions);

  const addTransaction = (transaction) => {
    const newTransaction = {
      ...transaction,
    };

    setTransactions((prev) => [newTransaction, ...prev]);
  };

  const totalData = [
    formData["TotalIncome"],
    formData["TotalInvestment"],
    formData["TotalExpense"],
  ];

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

        totalData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
