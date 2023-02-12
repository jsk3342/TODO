import { useQuery } from "react-query";
import { getTodos } from "../apis/base/getTodos";
import { TODO_URL } from "../constants/url";

export const useGetTodos = () => {
  const { data } = useQuery({
    queryKey: TODO_URL,
    queryFn: () => getTodos(),
    select: (data) => data.messages,
  });

  return data ?? [];
};
