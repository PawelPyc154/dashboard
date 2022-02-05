import { QueryKey } from 'react-query'
import { useRemove } from '../../../../hook/api/useRemove'
import { Dialog } from '../dialog'
import { DialogContentConfirm } from '../dialogContent/dialogContentConfirm'

interface DialogConfirmRemoveProps {
  url: string
  ids: (number | string)[]
  invalidateQueriesList: QueryKey[]
  // eslint-disable-next-line no-undef
  openButton: JSX.Element
  onSuccess?: () => void
}
const DialogConfirmRemove = ({
  openButton,
  url,
  ids,
  onSuccess,
  invalidateQueriesList = [],
}: DialogConfirmRemoveProps) => {
  const { remove, isLoadingRemove } = useRemove({ url, invalidateQueriesList })

  return (
    <Dialog title="Confirm delete" openButton={openButton} size="xl">
      {({ setIsOpenDialog }) => (
        <DialogContentConfirm
          isLoading={isLoadingRemove}
          onClick={() =>
            remove(ids, {
              onSuccess: () => {
                onSuccess?.()
                setIsOpenDialog(false)
              },
            })
          }
        />
      )}
    </Dialog>
  )
}

export { DialogConfirmRemove }
