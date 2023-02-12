import { rest } from "msw";

export interface todosType {
  title: string;
  isCompleted: boolean;
  date: number;
}

const todos: todosType = {
  title: "밥먹기",
  isCompleted: false,
  date: Date.now(),
};

const data = { messages: [todos] };

interface PostTotoReqBody {
  title: string;
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
    const parsedBody = JSON.parse(req.body) as PostTotoReqBody;
    const { title, isCompleted, date } = parsedBody;
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
  rest.put("/todos/:id", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        messages: "put!!!",
      })
    );
  }),
  rest.delete("/todos/:id", (req, res, ctx) => {
    data.messages = [];

    return res(
      ctx.status(200),
      ctx.json({
        messages: "message deleted",
      })
    );
  }),
];
