import { useMutation } from "react-query";
import { addTodos } from "../apis/base/addTodos";
import { queryClient } from "../apis/instance";
import { TODO_URL } from "../constants/url";

export const useAddTodoMutation = () => {
  return useMutation(addTodos, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(TODO_URL);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
