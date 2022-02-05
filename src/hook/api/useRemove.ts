import axios, { AxiosError } from 'axios'
import { QueryKey, useMutation, UseMutationOptions, useQueryClient } from 'react-query'

interface Options<TBody> extends UseMutationOptions<unknown, AxiosError, TBody, undefined> {
  url: string
  invalidateQueriesList?: QueryKey[]
}

const useRemove = <TBody extends Array<string | number>>(options: Options<TBody>) => {
  const { onSuccess, url } = options
  const queryClient = useQueryClient()

  const { mutate, isLoading, ...mutation } = useMutation({
    mutationFn: (ids) =>
      axios.delete(url, {
        params: {
          ids,
        },
      }),
    ...options,
    onSuccess: (...arg) => {
      options?.invalidateQueriesList?.forEach((queryKey) => {
        queryClient.invalidateQueries(queryKey)
      })
      onSuccess?.(...arg)
    },
  })

  return { remove: mutate, isLoadingRemove: isLoading, ...mutation }
}

export { useRemove }
