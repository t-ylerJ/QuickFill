import { createContext, useContext, useState, useEffect } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    // Load initial state from localStorage
    const storedData = JSON.parse(localStorage.getItem("formData")) || {};
    const [formData, setFormData] = useState(storedData);

    // Save to localStorage when formData changes
    useEffect(() => {
      localStorage.setItem("formData", JSON.stringify(formData));
    }, [formData]);

return (
  <AppContext.Provider value={{ formData, setFormData }}>
    {children}
  </AppContext.Provider>
)

}
export const useAppContext = () => useContext(AppContext);