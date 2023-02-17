import { useMutation } from "react-query";
import { addTodos } from "../apis/base/addTodos";
import { queryClient } from "../apis/instance";
import { TODO_URL } from "../apis/base/url";

type Params = {
  onSuccess?: () => void;
};

export const useAddTodoMutation = ({ onSuccess }: Params = {}) => {
  return useMutation(addTodos, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(TODO_URL);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
