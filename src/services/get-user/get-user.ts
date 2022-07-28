import type { GetUserResponse } from '../../types'
import { request } from '../base'

export const getUser = (): Promise<GetUserResponse | void> => (
  request('https://jsonplaceholder.typicode.com/todos/1')
)
