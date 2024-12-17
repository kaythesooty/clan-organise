import {
  MutationFunction,
  useMutation,
  useQuery,
  useQueryClient,
} from '@tanstack/react-query'
import * as api from './apis/cats'
import request from 'superagent'
import { Clan } from '../models/cats'

export function useCat(id: number) {
  const query = useQuery({
    queryKey: ['cat', id],
    queryFn: () => api.getCatById(id),
  })
  return { ...query, update: useCatUpdate(), delete: useCatDelete() }
}

export function useClanCats(clan: string) {
  // console.log(clan)
  const query = useQuery({
    queryKey: ['cats', clan],
    queryFn: () => api.getClanCats(clan),
  })
  return { ...query, add: useCatAdd() }
}

export function useClans() {
  return useQuery({
    queryKey: ['clans'],
    queryFn: async () => {
      const res = await request.get('/api/v1/clans')
      if (res.ok) {
        return res.body as Clan[]
      }
      throw new Error(res.text)
    },
  })
}
// export function useClanCats(clan: string) {
//   const query = useQuery({
//     queryKey: ['cats'],
//     queryFn: () => {
//       api.getClanCats(clan)
//     },
//   })
// }

export function useCatMutation<TData = unknown, TVariables = unknown>(
  mutationFn: MutationFunction<TData, TVariables>,
) {
  const queryClient = useQueryClient()

  const mutation = useMutation({
    mutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['cat'] })
      queryClient.invalidateQueries({ queryKey: ['cats'] })
    },
  })
  return mutation
}

export function useCatUpdate() {
  return useCatMutation(api.updateCat)
}

export function useCatAdd() {
  return useCatMutation(api.addCat)
}

export function useCatDelete() {
  return useCatMutation(api.deleteCat)
}
