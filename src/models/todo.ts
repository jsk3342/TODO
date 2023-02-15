import { TodosType } from "../mocks/handlers";

export type Todos = {
  messages: Message[];
};

export type Message = {
  id: number;
  title: string;
  isCompleted: boolean;
  refId?: TodosType[];
  regTs: number;
  updTs?: number | null;
};