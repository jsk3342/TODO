import { TODO_URL } from "../../constants/url";
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
    JSON.stringify({
      id: id,
      newTitle: newTitle,
      isCompleted: isCompleted,
      refId: refId,
      regTs: regTs,
      updts: Date.now(),
    })
  );
};