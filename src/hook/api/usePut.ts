import axios, { AxiosError } from 'axios'
import { QueryKey, useMutation, UseMutationOptions, useQueryClient } from 'react-query'

interface Options<TBody> extends UseMutationOptions<unknown, AxiosError, TBody, undefined> {
  url: string
  invalidateQueriesList?: QueryKey[]
}

const usePut = <TBody>(options: Options<TBody>) => {
  const { onSuccess, url } = options
  const queryClient = useQueryClient()

  const { mutate, isLoading, ...mutation } = useMutation({
    mutationFn: (body) => axios.put(url, body),
    ...options,
    onSuccess: (...arg) => {
      options?.invalidateQueriesList?.forEach((queryKey) => {
        queryClient.invalidateQueries(queryKey)
      })
      onSuccess?.(...arg)
    },
  })

  return { put: mutate, isLoadingPut: isLoading, ...mutation }
}

export { usePut }
