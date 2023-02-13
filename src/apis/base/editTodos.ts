import { TODO_URL } from "../../constants/url";
import { Message } from "../../models/todo";
import { fetchInstance } from "../instance/index";

export const editTodos = ({
  title,
  newTitle,
  isCompleted,
}: {
  title: Message["title"];
  newTitle: Message["title"];
  isCompleted: Message["isCompleted"];
}) => {
  return fetchInstance().put(
    TODO_URL + `/${title}`,
    JSON.stringify({
      title: title,
      newTitle: newTitle,
      isCompleted: isCompleted,
      date: Date.now(),
    })
  );
};
