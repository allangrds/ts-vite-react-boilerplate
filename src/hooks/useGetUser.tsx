import { useQuery } from '@tanstack/react-query'

import { getUser } from '../services'

export const GET_USER_QUERY = 'use_get_user'

export const useGetUser = () => {
  const resultQuery = useQuery([GET_USER_QUERY], getUser)

  return resultQuery
}
