import { TODO_URL } from "../../constants/url";
import { todosType } from "../../mocks/handlers";
import { fetchInstance } from "../instance/index";

export const addTodos = (todo: todosType) => {
  return fetchInstance().post(TODO_URL, JSON.stringify(todo));
};
