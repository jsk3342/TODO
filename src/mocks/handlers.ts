import { rest } from "msw";
import { EditTotoReqBody, PostTotoReqBody, Todos } from "../models/todo";


const todos = {
  title: "밥먹기",
  isCompleted: false,
  id: 1,
  refId: [],
  regTs: Date.now(),
  updTs: null,
};

const todos1 = {
  title: "씻기",
  isCompleted: false,
  id: 2,
  refId: [],
  regTs: Date.now(),
  updTs: null,
};

const todos2 = {
  title: "자기",
  isCompleted: true,
  id: 3,
  refId: [],
  regTs: Date.now(),
  updTs: null,
};

const data:Todos = { 
  messages: [todos, todos1, todos2] 
};

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
      if (refId && refId.length > 0) {
        todoToUpdate.title = newTitle;
        todoToUpdate.isCompleted = isCompleted;
        todoToUpdate.refId = data.messages.filter(todo => refId.find(refTodo => refTodo.id === todo.id));
        todoToUpdate.updTs = Date.now();
      } else {
        todoToUpdate.title = newTitle;
        todoToUpdate.isCompleted = isCompleted;
        todoToUpdate.refId = refId;
        todoToUpdate.updTs = Date.now();
      }
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
