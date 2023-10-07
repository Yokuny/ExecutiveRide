"use client";
import { createContext, useContext, useState } from "react";
import { LocationData, ContextProps, ChildrenProps } from "@/types";

const GlobalContext = createContext<ContextProps>({
  location: [] as LocationData[],
  setLocation: () => {},
});

export const GlobalProvider = ({ children }: ChildrenProps) => {
  const [location, setLocation] = useState([] as LocationData[]);

  return <GlobalContext.Provider value={{ location, setLocation }}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => useContext(GlobalContext);
