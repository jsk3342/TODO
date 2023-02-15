import { TODO_URL } from "../../constants/url";
import { Message } from "../../models/todo";
import { fetchInstance } from "../instance/index";

export const addTodos = ({ id, title, regTs ,refId }: { id: Message["id"],  title: Message["title"], regTs:Message["regTs"], refId: number[] }) => {
  return fetchInstance().post(TODO_URL,  JSON.stringify({
    id: id,
    title: title,
    isCompleted: false,
    refId: refId,
    regTs: regTs,
    updts: null,
  }));
};