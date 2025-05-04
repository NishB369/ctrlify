import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true); //true
  const [isSignedUp, setIsSignedUp] = useState(false); // false
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Age: "",
    Designation: "",
    CurrentBalance: "",
    Income: "",
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
