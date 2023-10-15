"use client";
import { createContext, useContext, useState } from "react";
import { LocationData, ContextProps, ChildrenProps } from "@/types";

const GlobalContext = createContext<ContextProps>({
  location: [] as LocationData[],
  setLocation: () => {},
  creatAt: new Date(),
  setDate: () => {},
  currPassager: "-",
  setCurrPassager: () => {},
});

export const GlobalProvider = ({ children }: ChildrenProps) => {
  const [location, setLocation] = useState([] as LocationData[]);
  const [creatAt, setCreatAt] = useState(new Date());

  const setDate = () => {
    setCreatAt(new Date());
  };

  const [currPassager, setCurrPassager] = useState("-");

  return (
    <GlobalContext.Provider
      value={{ location, setLocation, creatAt, setDate, currPassager, setCurrPassager }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
