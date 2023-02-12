import { useQuery } from "react-query";
import { getTodos } from "../apis/base/getTodos";
import { TODO_URL } from "../constants/url";

export const useGetTodos = () => {
  const { data } = useQuery(TODO_URL, () => getTodos());
  const todoList = data.messages;
  return todoList;
};
