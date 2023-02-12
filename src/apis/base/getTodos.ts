import { TODO_URL } from "../../constants/url";
import { Todos } from "../../models/todo";
import { fetchInstance } from "../instance/index";

export const getTodos = async () => {
  const { data } = await fetchInstance().get<Todos>(TODO_URL);

  return data;
};
