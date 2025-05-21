import { createContext, useState, useContext, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const initialIncomeTransactions = [];

  const initialExpenseTransactions = [];

  const initialInvestmentTransactions = [];

  const calculateTotalAmount = (transactions) => {
    return transactions.reduce((total, transaction) => {
      return total + Number(transaction.Amount);
    }, 0);
  };

  const getAllTransactions = (income, expense, investment) => {
    const allTransactions = [
      ...income.map((t) => ({ ...t })),
      ...expense.map((t) => ({ ...t })),
      ...investment.map((t) => ({ ...t })),
    ];

    allTransactions.sort((a, b) => {
      const dateA = new Date(`${a.Date}T${a.Time}`);
      const dateB = new Date(`${b.Date}T${b.Time}`);
      return dateB - dateA;
    });

    return allTransactions;
  };

  const loadFromLocalStorage = (key, initialData) => {
    try {
      const storedData = localStorage.getItem(key);
      return storedData ? JSON.parse(storedData) : initialData;
    } catch (error) {
      console.error(`Error loading ${key} from localStorage:`, error);
      return initialData;
    }
  };

  const [isLoading, setIsLoading] = useState(true);
  const [isSignedUp, setIsSignedUp] = useState(
    loadFromLocalStorage("isSignedUp", false)
  );

  const [incomeTransactions, setIncomeTransactions] = useState(
    loadFromLocalStorage("incomeTransactions", initialIncomeTransactions)
  );

  const [expenseTransactions, setExpenseTransactions] = useState(
    loadFromLocalStorage("expenseTransactions", initialExpenseTransactions)
  );

  const [investmentTransactions, setInvestmentTransactions] = useState(
    loadFromLocalStorage(
      "investmentTransactions",
      initialInvestmentTransactions
    )
  );

  const loadedTotalIncome = calculateTotalAmount(incomeTransactions);
  const loadedTotalExpense = calculateTotalAmount(expenseTransactions);
  const loadedTotalInvestment = calculateTotalAmount(investmentTransactions);

  const [formData, setFormData] = useState(
    loadFromLocalStorage("formData", {
      Name: "",
      Email: "",
      Age: "",
      Designation: "",
      CurrentBalance:
        loadedTotalIncome - loadedTotalExpense + loadedTotalInvestment,
      Income: "",
      TotalIncome: loadedTotalIncome,
      TotalExpense: loadedTotalExpense,
      TotalInvestment: loadedTotalInvestment,
    })
  );

  const [isEdit, setIsEdit] = useState(loadFromLocalStorage("isEdit", false));

  const [transactions, setTransactions] = useState(
    getAllTransactions(
      incomeTransactions,
      expenseTransactions,
      investmentTransactions
    )
  );

  useEffect(() => {
    localStorage.setItem("isSignedUp", JSON.stringify(isSignedUp));
  }, [isSignedUp]);

  useEffect(() => {
    localStorage.setItem("formData", JSON.stringify(formData));
  }, [formData]);

  useEffect(() => {
    localStorage.setItem("isEdit", JSON.stringify(isEdit));
  }, [isEdit]);

  useEffect(() => {
    localStorage.setItem(
      "incomeTransactions",
      JSON.stringify(incomeTransactions)
    );

    setTransactions(
      getAllTransactions(
        incomeTransactions,
        expenseTransactions,
        investmentTransactions
      )
    );
  }, [incomeTransactions]);

  useEffect(() => {
    localStorage.setItem(
      "expenseTransactions",
      JSON.stringify(expenseTransactions)
    );

    setTransactions(
      getAllTransactions(
        incomeTransactions,
        expenseTransactions,
        investmentTransactions
      )
    );
  }, [expenseTransactions]);

  useEffect(() => {
    localStorage.setItem(
      "investmentTransactions",
      JSON.stringify(investmentTransactions)
    );

    setTransactions(
      getAllTransactions(
        incomeTransactions,
        expenseTransactions,
        investmentTransactions
      )
    );
  }, [investmentTransactions]);

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

    addTransaction(newTransaction);
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

    addTransaction(newTransaction);
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

    addTransaction(newTransaction);
  };

  const addTransaction = (transaction) => {
    const newTransaction = {
      ...transaction,
    };

    setTransactions((prev) => {
      const updatedTransactions = [newTransaction, ...prev];
      return updatedTransactions.sort((a, b) => {
        const dateA = new Date(`${a.Date}T${a.Time}`);
        const dateB = new Date(`${b.Date}T${b.Time}`);
        return dateB - dateA;
      });
    });
  };

  const totalData = [
    formData["TotalIncome"],
    formData["TotalInvestment"],
    formData["TotalExpense"],
  ];

  const resetAppData = () => {
    localStorage.clear();

    setIsSignedUp(false);
    setIsEdit(false);

    const initialTotalIncome = calculateTotalAmount(initialIncomeTransactions);
    const initialTotalExpense = calculateTotalAmount(
      initialExpenseTransactions
    );
    const initialTotalInvestment = calculateTotalAmount(
      initialInvestmentTransactions
    );

    setFormData({
      Name: "",
      Email: "",
      Age: "",
      Designation: "",
      CurrentBalance:
        initialTotalIncome - initialTotalExpense + initialTotalInvestment,
      Income: "",
      TotalIncome: initialTotalIncome,
      TotalExpense: initialTotalExpense,
      TotalInvestment: initialTotalInvestment,
    });

    setIncomeTransactions(initialIncomeTransactions);
    setExpenseTransactions(initialExpenseTransactions);
    setInvestmentTransactions(initialInvestmentTransactions);

    setTransactions(
      getAllTransactions(
        initialIncomeTransactions,
        initialExpenseTransactions,
        initialInvestmentTransactions
      )
    );
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
        setIncomeTransactions,

        expenseFormData,
        updateExpenseFormData,
        addExpenseTransaction,
        expenseTransactions,
        setExpenseTransactions,

        investmentFormData,
        updateInvestmentFormData,
        addInvestmentTransaction,
        investmentTransactions,
        setInvestmentTransactions,

        transactions,
        addTransaction,
        setTransactions,

        totalData,
        resetAppData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
