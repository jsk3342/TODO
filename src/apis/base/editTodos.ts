import { TODO_URL } from "../../constants/url";
import { Message } from "../../models/todo";
import { fetchInstance } from "../instance/index";

export const editTodos = ({
  id,
  newTitle,
  isCompleted,
  regTs,
}: {
  id: Message["id"];
  newTitle: Message["title"];
  isCompleted: Message["isCompleted"];
  regTs: Message["regTs"]
}) => {
  return fetchInstance().put(
    TODO_URL + `/${id}`,
    JSON.stringify({
      id: id,
      newTitle: newTitle,
      isCompleted: isCompleted,
      regTs: regTs,
      updts: Date.now(),
    })
  );
};