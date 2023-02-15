export type Todos = {
  messages: Message[];
};

export type Message = {
  id: number;
  title: string;
  isCompleted: boolean;
  refId?: number[];
  regTs: number;
  updTs?: number | null;
};
