import { AxiosError } from 'axios'
import { MutateOptions, QueryKey, useMutation, UseMutationOptions, useQueryClient } from 'react-query'
import { useConfirmDialog } from '../../components/common/dialog/dialogs/confirmDialog'

interface Options<TBody> extends UseMutationOptions<unknown, AxiosError, TBody, undefined> {
  url: string
  invalidateQueriesList?: QueryKey[]
}

const useRemove = <TBody extends Array<string | number>>(options: Options<TBody>) => {
  const { onSuccess, url } = options
  const queryClient = useQueryClient()

  const { mutate, isLoading, ...mutation } = useMutation({
    mutationFn: (ids) => {
      console.log(ids, url)
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('1000')
        }, 1000)
      })
    },

    ...options,
    onSuccess: (...arg) => {
      options?.invalidateQueriesList?.forEach((queryKey) => {
        queryClient.invalidateQueries(queryKey)
      })
      onSuccess?.(...arg)
    },
  })
  console.log(isLoading)
  const { openConfirmDialog } = useConfirmDialog({ isLoading })

  const handleRemove = (
    variables: TBody,
    mutateOptions?: MutateOptions<unknown, AxiosError<any, any>, TBody, undefined> | undefined,
  ) => {
    openConfirmDialog(() => mutate(variables, mutateOptions))
  }

  return { handleRemove, isLoadingRemove: isLoading, ...mutation }
}

export { useRemove }
