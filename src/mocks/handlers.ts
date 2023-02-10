import { rest } from "msw";

const data = { messages: [] as string[] };

export const handlers = [
  rest.get("/todos", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        messages: data.messages,
      })
    );
  }),
  rest.post("/todos", (req, res, ctx) => {
    const newMessage = `message(${Date.now()}${req})`;

    data.messages.push(newMessage);

    return res(
      ctx.status(200),
      ctx.json({
        messages: newMessage,
      })
    );
  }),
  rest.put("/todos/{id}", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json({
        messages: "put!!!",
      })
    );
  }),
  rest.delete("/todos/{id}", (req, res, ctx) => {
    data.messages = [];

    return res(
      ctx.status(200),
      ctx.json({
        messages: "message deleted",
      })
    );
  }),
];
