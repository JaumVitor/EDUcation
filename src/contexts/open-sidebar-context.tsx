import React, { createContext, useState, ReactNode } from 'react';

interface SheetContextProps {
  isOpen: boolean;
  isOpenModal: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleTogleSheet: () => void;
  handleTogleModal: () => void;
}

export const SheetContext = createContext<SheetContextProps | undefined>(undefined);

export const SheetProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModal, setIsOpenModal] = useState(false);
  
  function handleTogleSheet() { 
    setIsOpen(!isOpen);
  }

  function handleTogleModal() {
    setIsOpenModal(!isOpenModal);
  }

  return (
    <SheetContext.Provider value={{ isOpen, setIsOpen, handleTogleSheet, isOpenModal, handleTogleModal }}>
      {children}
    </SheetContext.Provider>
  );
};

