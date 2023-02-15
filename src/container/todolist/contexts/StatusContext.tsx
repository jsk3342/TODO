import { createContext, useContext, useState } from "react";

export type Status = 'ALL' | 'Active' | 'Completed';
export type StatusList = Status[];

export const StatusContext = createContext<{
  status: Status;
  setStatus: React.Dispatch<React.SetStateAction<Status>>;
} | null>(null);

interface StatusContextProviderProps {
  children: React.ReactNode;
}

export const statusList : StatusList = ["ALL", "Active", "Completed"];

export function StatusProvider({
  children,
}: StatusContextProviderProps) {
  const [status, setStatus] = useState(statusList[0]);

  return <StatusContext.Provider value={{ status, setStatus }}>{children}</StatusContext.Provider>;
}

export const useStatusContext = () => {
  const context = useContext(StatusContext);

  if (context == null) {
    throw new Error(`null 이 될 수 없음!`);
  }

  return context;
};
