import axios from "axios";
import { QueryClient } from "react-query";

export const initFetchInstance = (baseURL: string) =>
  axios.create({
    baseURL,
    timeout: 10000,
    headers: {
      Accept: "application/json",
    },
  });

export const fetchInstance = () => initFetchInstance("");

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      suspense: true,
      refetchOnMount: true,
      refetchOnReconnect: true,
      refetchOnWindowFocus: true,
    },
  },
});
