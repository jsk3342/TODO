import { rest } from 'msw';

const data = { messages: [] as string[] };

export const handlers = [
    rest.get('/test', (req, res, ctx) => {
      return res(
        ctx.status(200),
        ctx.json({
            messages: data.messages
        }),
      );
    }),
    rest.post('/test', (req, res, ctx) => {
      const newMessage = `message(${Date.now()})`;

      data.messages.push(newMessage);

      return res(
        ctx.status(200),
        ctx.json({
          messages: newMessage
        }),
      );
    }),
    rest.put('/test', (req, res, ctx) => {

      return res(
        ctx.status(200),
        ctx.json({
          messages: 'put!!!'
        }),
      );
    }),
    rest.delete('/test', (req, res, ctx) => {
      data.messages = [];

      return res(
        ctx.status(200),
        ctx.json({
          messages: 'message deleted'
        }),
      );
    })
];