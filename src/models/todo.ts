export type Todos = {
  messages: Message[];
};

export type Message = {
  title: string;
  newTitle?: string | null;
  isCompleted: boolean;
  date: number;
};
