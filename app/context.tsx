"use client";
import { createContext, useContext, useState } from "react";
import type { LocationData, ContextProps, ChildrenProps } from "@/types";

const GlobalContext = createContext<ContextProps>({
  location: [] as LocationData[],
  setLocation: () => {},
  creatAt: null,
  setCreatAt: () => {},
  currPassager: "-",
  setCurrPassager: () => {},
});

export const GlobalProvider = ({ children }: ChildrenProps) => {
  const [location, setLocation] = useState([] as LocationData[]);
  const [creatAt, setCreatAt] = useState(null as Date | null);
  const [currPassager, setCurrPassager] = useState("-");

  return (
    <GlobalContext.Provider
      value={{ location, setLocation, creatAt, setCreatAt, currPassager, setCurrPassager }}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
