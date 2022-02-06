import { QueryKey } from 'react-query'
import { useRemove } from '../../../../hook/api/useRemove'
import { DialogTrigger } from '../dialogTrigger'
import { DialogContentConfirm } from '../dialogContent/dialogContentConfirm'

interface DialogConfirmRemoveProps {
  url: string
  ids: (number | string)[]
  invalidateQueriesList: QueryKey[]
  // eslint-disable-next-line no-undef
  trigger: JSX.Element
  onSuccess?: () => void
}
const DialogConfirmRemove = ({
  trigger,
  url,
  ids,
  onSuccess,
  invalidateQueriesList = [],
}: DialogConfirmRemoveProps) => {
  const { remove, isLoadingRemove } = useRemove({ url, invalidateQueriesList })

  return (
    <DialogTrigger title="Confirm delete" trigger={trigger} size="xl">
      {({ onCloseDialog }) => (
        <DialogContentConfirm
          isLoading={isLoadingRemove}
          onClick={() =>
            remove(ids, {
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

export { DialogConfirmRemove }
