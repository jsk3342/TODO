import { TODO_URL } from "./url";
import { Message } from "../../models/todo";
import { fetchInstance } from "../instance/index";

export const editTodos = ({
  id,
  newTitle,
  isCompleted,
  refId,
  regTs,
}: {
  id: Message["id"];
  newTitle: Message["title"];
  isCompleted: Message["isCompleted"];
  refId: Message["refId"]
  regTs: Message["regTs"]
}) => {
  return fetchInstance().put(
    TODO_URL + `/${id}`,
    {
      id,
      newTitle,
      isCompleted,
      refId,
      regTs,
      updts: Date.now(),
    }
  );
};