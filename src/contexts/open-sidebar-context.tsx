import React, { createContext, useState, ReactNode } from 'react';

interface SheetContextProps {
  isOpen: boolean;
  isOpenModalNewClass: boolean;
  isOpenModal: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleTogleSheet: () => void;
  handleTogleModal: () => void;
  handleIsOpenModalNewClass: () => void;
}

export const SheetContext = createContext<SheetContextProps | undefined>(undefined);

export const SheetProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModalNewClass, setIsOpenModalNewClass] = useState(false)
  const [isOpenModal, setIsOpenModal] = useState(false);
  
  function handleTogleSheet() { 
    setIsOpen(!isOpen);
  }

  function handleTogleModal() {
    setIsOpenModal(!isOpenModal);
  }

  function handleIsOpenModalNewClass() {
    setIsOpenModalNewClass(!isOpenModalNewClass);
  }

  return (
    <SheetContext.Provider value={{ isOpen, setIsOpen, handleTogleSheet, isOpenModal, handleTogleModal, handleIsOpenModalNewClass, isOpenModalNewClass }}>
      {children}
    </SheetContext.Provider>
  );
};

