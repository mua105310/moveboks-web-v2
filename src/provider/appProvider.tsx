
"use client"
import { createContext, useContext, useState, ReactNode } from "react";

type AppContextType = {
  isMenuOpen: boolean;
  toggleMenu: () => void;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export const AppProvider = ({ children }: { children: ReactNode }) => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const toggleDialog = () => {
    setIsDialogOpen((prev) => !prev);
  };

  return (
    <AppContext.Provider value={{ isMenuOpen: isDialogOpen, toggleMenu: toggleDialog }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
