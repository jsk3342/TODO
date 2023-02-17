import { TODO_URL } from "./url";
import { Message } from "../../models/todo";
import { fetchInstance } from "../instance/index";

export const deleteTodos = ({ id }: { id: Message["id"] }) => {
  return fetchInstance().delete(TODO_URL + `/${id}`);
};
