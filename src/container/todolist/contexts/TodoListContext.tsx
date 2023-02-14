import { createContext, useEffect, useState } from "react";
import { TodosType } from "../../../mocks/handlers";
import { useGetTodos } from "../../../queries/usefetchTodos";

interface TodoListContextProps {
  todoList: TodosType[];
  showList: TodosType[];
  status: string;
  setStatus: React.Dispatch<React.SetStateAction<string>>;
}

export const TodoListContext = createContext<TodoListContextProps | undefined>(
  undefined
);

interface TodoListContextProviderProps {
  children: React.ReactNode;
}

export const statusList = ["ALL", "Active", "Completed"];

export function TodoListContextProvider({
  children,
}: TodoListContextProviderProps) {
  const todoList = useGetTodos();
  const [showList, setShowList] = useState(todoList);
  const [status, setStatus] = useState(statusList[0]);
  useEffect(() => {
    switch (status) {
      case "ALL":
        setShowList(todoList);
        return;

      case "Active":
        setShowList(todoList.filter((todo) => todo.isCompleted === false));
        return;

      case "Completed":
        setShowList(todoList.filter((todo) => todo.isCompleted === true));
        return;

      default:
        break;
    }
  }, [todoList, status]);

  return (
    <TodoListContext.Provider value={{ todoList, showList, status, setStatus }}>
      {children}
    </TodoListContext.Provider>
  );
}
