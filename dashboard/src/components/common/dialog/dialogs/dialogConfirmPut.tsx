import { QueryKey } from 'react-query'
import { usePut } from '../../../../hook/api/usePut'
import { DialogTrigger } from '../dialogTrigger'
import { DialogContentConfirm } from '../dialogContent/dialogContentConfirm'

interface DialogConfirmPutProps {
  title: string
  url: string
  ids: (number | string)[]
  invalidateQueriesList: QueryKey[]
  // eslint-disable-next-line no-undef
  trigger: JSX.Element
  onSuccess?: () => void
}
const DialogConfirmPut = ({
  trigger,
  url,
  ids,
  title,
  onSuccess,
  invalidateQueriesList = [],
}: DialogConfirmPutProps) => {
  const { put, isLoadingPut } = usePut({ url, invalidateQueriesList })

  return (
    <DialogTrigger title={title} trigger={trigger} size="xl">
      {({ onCloseDialog }) => (
        <DialogContentConfirm
          isLoading={isLoadingPut}
          onClick={() =>
            put(ids, {
              onSuccess: () => {
                onSuccess?.()
                onCloseDialog()
              },
            })
          }
        />
      )}
    </DialogTrigger>
  )
}

export { DialogConfirmPut }
