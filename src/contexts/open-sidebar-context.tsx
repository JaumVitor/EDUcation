import React, { createContext, useState, ReactNode } from 'react';

interface SheetContextProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleTogleSheet: () => void;
}

export const SheetContext = createContext<SheetContextProps | undefined>(undefined);

export const SheetProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  function handleTogleSheet() { 
    setIsOpen(!isOpen);
  }

  return (
    <SheetContext.Provider value={{ isOpen, setIsOpen, handleTogleSheet }}>
      {children}
    </SheetContext.Provider>
  );
};

