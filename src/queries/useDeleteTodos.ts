import { useMutation } from "react-query";
import { deleteTodos } from "../apis/base/deleteTodos";
import { queryClient } from "../apis/instance";
import { TODO_URL } from "../constants/url";

type Params = {
  onSuccess?: () => void;
};

export const useDeleteTodosMutation = ({ onSuccess }: Params = {}) => {
  return useMutation(deleteTodos, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(TODO_URL);
    },
    onError: (error) => {
      console.error(error);
    },
  });
};
