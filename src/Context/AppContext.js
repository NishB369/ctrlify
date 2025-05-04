import { createContext, useState, useContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Age: "",
    Designation: "",
    "Current Balance": "",
    Income: "",
  });

  const updateFormData = (fieldName, value) => {
    setFormData((prev) => ({
      ...prev,
      [fieldName]: value,
    }));
  };

  const handleSignUp = () => {
    setIsSignedUp(true);
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
        updateFormData,
        completeLoading,
        handleSignUp,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
