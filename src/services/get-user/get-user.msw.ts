import { rest } from 'msw'

const getUserData = {
  completed: true,
  id: 111,
  title: 'title mock',
  userId: 111,
}

export const getUser = rest.get(
  'https://jsonplaceholder.typicode.com/todos/1',
  (_, res, ctx) => res(ctx.status(200), ctx.json(getUserData))
)
