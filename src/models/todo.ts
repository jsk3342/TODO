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

export interface TodosType {
  id: number;
  title: string;
  isCompleted: boolean;
  refId?: TodosType[];
  regTs: number;
  updTs?: number | null;
}

export interface PostTotoReqBody {
  id: number;
  title: string;
  isCompleted: boolean;
  refId: number[];
  regTs: number;
  updTs: number | null;
}

export interface EditTotoReqBody {
  id: number;
  newTitle: string;
  isCompleted: boolean;
  refId?: TodosType[] | [];
  regTs: number;
  updTs: number | null;
}