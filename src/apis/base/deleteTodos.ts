import { TODO_URL } from "../../constants/url";
import { Message } from "../../models/todo";
import { fetchInstance } from "../instance/index";

export const deleteTodos = ({ title }: { title: Message["title"] }) => {
  return fetchInstance().delete(TODO_URL + `/${title}`);
};
