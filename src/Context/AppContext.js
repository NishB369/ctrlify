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
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
