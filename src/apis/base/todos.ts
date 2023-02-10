import { TODO_URL } from "../../constants/url";
import { fetchInstance } from "../instance/index";

export const getTodos = async () => {
  const { data } = await fetchInstance().get(TODO_URL);

  return data;
};
