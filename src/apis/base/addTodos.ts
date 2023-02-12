import { TODO_URL } from "../../constants/url";
import { Message } from "../../models/todo";
import { fetchInstance } from "../instance/index";

export const addTodos = ({ title }: { title: Message["title"] }) => {
  return fetchInstance().post(TODO_URL,  JSON.stringify({
    title,
    isCompleted: false,
    date: Date.now(),
  }));
};
