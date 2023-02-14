import { rest } from "msw";

export interface TodosType {
  title: string;
  isCompleted: boolean;
  date: number;
}

const todos: TodosType = {
  title: "밥먹기",
  isCompleted: false,
  date: Date.now(),
};

const todos1: TodosType = {
  title: "씻기",
  isCompleted: false,
  date: Date.now(),
};

const todos2: TodosType = {
  title: "자기",
  isCompleted: true,
  date: Date.now(),
};

const data = { messages: [todos, todos1, todos2] };

interface PostTotoReqBody {
  title: string;
  isCompleted: boolean;
  date: number;
}

interface EditTotoReqBody {
  newTitle: string;
  isCompleted: boolean;
  date: number;
}

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
    const { title, isCompleted, date } = JSON.parse(
      req.body
    ) as PostTotoReqBody;
    const newMessage = {
      title: title,
      isCompleted: isCompleted,
      date: date,
    };

    data.messages.push(newMessage);

    return res(
      ctx.status(200),
      ctx.json({
        messages: newMessage,
      })
    );
  }),
  rest.put("/todos/:title", (req, res, ctx) => {
    const { title } = req.params;

    let body = req.body;
    if (typeof req.body === "string") {
      body = JSON.parse(req.body);
    }

    const { newTitle, isCompleted } = body as EditTotoReqBody;

    let todoToUpdate = data.messages.find((todo) => todo.title === title);
    if (todoToUpdate) {
      todoToUpdate.title = newTitle;
      todoToUpdate.isCompleted = isCompleted;
    }

    return res(
      ctx.status(200),
      ctx.json({
        messages: "put",
      })
    );
  }),

  rest.delete("/todos/:title", (req, res, ctx) => {
    const { title } = req.params;
    data.messages = data.messages.filter((todo) => todo.title !== title);

    return res(
      ctx.status(200),
      ctx.json({
        messages: "message deleted",
      })
    );
  }),
];
