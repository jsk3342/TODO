import { useMutation } from "react-query";
import { editTodos } from "../apis/base/editTodos";
import { queryClient } from "../apis/instance";
import { TODO_URL } from "../constants/url";

type Params = {
  onSuccess?: () => void;
};

export const useEditTodosMutation = ({ onSuccess }: Params = {}) => {
  return useMutation(editTodos, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(TODO_URL);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
