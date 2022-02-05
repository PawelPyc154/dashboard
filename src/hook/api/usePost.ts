import axios, { AxiosError } from 'axios'
import { QueryKey, useMutation, UseMutationOptions, useQueryClient } from 'react-query'

interface Options<TBody> extends UseMutationOptions<unknown, AxiosError, TBody, undefined> {
  url: string
  invalidateQueriesList?: QueryKey[]
}

const usePost = <TBody>(options: Options<TBody>) => {
  const { onSuccess, url } = options
  const queryClient = useQueryClient()

  const { mutate, isLoading, ...mutation } = useMutation({
    mutationFn: (body) => axios.post(url, body),
    ...options,
    onSuccess: (...arg) => {
      options?.invalidateQueriesList?.forEach((queryKey) => {
        queryClient.invalidateQueries(queryKey)
      })
      onSuccess?.(...arg)
    },
  })

  return { post: mutate, isLoadingPost: isLoading, ...mutation }
}

export { usePost }
