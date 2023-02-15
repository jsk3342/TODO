import { rest } from "msw";

export interface TodosType {
  id: number;
  title: string;
  isCompleted: boolean;
  refId?: TodosType[] | number[];
  regTs: number;
  updTs?: number | null;
}

interface PostTotoReqBody {
  id: number;
  title: string;
  isCompleted: boolean;
  refId: number[];
  regTs: number;
  updTs: number | null;
}

interface EditTotoReqBody {
  id: number;
  newTitle: string;
  isCompleted: boolean;
  refId?: TodosType[] | [];
  regTs: number;
  updTs: number | null;
}
interface PageType {
  paging: {
    pageNumber: number,
    pageSize: number,
    hasNext: boolean,
    totalCount: number,
  }
};

const todos: TodosType = {
  title: "밥먹기",
  isCompleted: false,
  id: 1,
  refId: [],
  regTs: Date.now(),
  updTs: null,
};

const todos1: TodosType = {
  title: "씻기",
  isCompleted: false,
  id: 2,
  refId: [],
  regTs: Date.now(),
  updTs: null,
};

const todos2: TodosType = {
  title: "자기",
  isCompleted: true,
  id: 3,
  refId: [],
  regTs: Date.now(),
  updTs: null,
};

const data = { 
  messages: [todos, todos1, todos2] 
};
const totalCount = data.messages.length;
const page: PageType = {
  paging : {
    pageNumber : 1,
    pageSize: 10,
    hasNext : false,
    totalCount: totalCount,
  }
}

// page.paging.hasNext = (page.paging.totalCount > (page.paging.pageNumber - 1) * page.paging.pageSize);

export const handlers = [
  rest.get("/todos", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        messages: data.messages,
      })
    );
  }),

  rest.post<string>("/todos", (req, res, ctx) => {
    const { id, title, isCompleted, refId, regTs } = JSON.parse(
      req.body
    ) as PostTotoReqBody;
    const newRefId = refId.flatMap(id => data.messages.filter(todo => todo.id === id))
    const newMessage = {
      id: id,
      title: title,
      isCompleted: isCompleted,
      refId: newRefId,
      regTs: regTs,
      updTs: null,
    };

    data.messages.push(newMessage);

    return res(
      ctx.status(200),
      ctx.json({
        resultType: "SUCESSES",
      })
    );
  }),

  rest.put("/todos/:id", (req, res, ctx) => {
    const { id } = req.params;

    let body = req.body;
    if (typeof req.body === "string") {
      body = JSON.parse(req.body);
    }

    const { newTitle, isCompleted, refId } = body as EditTotoReqBody;

    let todoToUpdate = data.messages.find((todo) => String(todo.id) === id);
    if (todoToUpdate) {
      todoToUpdate.title = newTitle;
      todoToUpdate.isCompleted = isCompleted;
      todoToUpdate.refId = refId;
      todoToUpdate.updTs = Date.now();
    }

    return res(
      ctx.status(200),
      ctx.json({
        resultType: "SUCESSES",
      })
    );
  }),

  rest.delete("/todos/:id", (req, res, ctx) => {
    const { id } = req.params;
    data.messages = data.messages.filter((todo) => String(todo.id) !== id);

    return res(
      ctx.status(200),
      ctx.json({
        resultType: "SUCESSES",
      })
    );
  }),
];
