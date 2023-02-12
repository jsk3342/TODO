export type Todos = {
  messages: Message[];
};

export type Message = {
  title: string;
  isCompleted: boolean;
  date: number;
};
