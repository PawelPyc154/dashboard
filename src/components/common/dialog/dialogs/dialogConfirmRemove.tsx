import { ReactNode } from 'react'
import { QueryKey } from 'react-query'
import { useRemove } from '../../../../hook/api/useRemove'
import { Dialog } from '../dialog'
import { DialogContentConfirm } from '../dialogContent/dialogContentConfirm'

interface DialogConfirmRemoveProps {
  url: string
  ids: (number | string)[]
  invalidateQueriesList: QueryKey[]
  trigger: ReactNode
}
const DialogConfirmRemove = ({ trigger, url, ids, invalidateQueriesList = [] }: DialogConfirmRemoveProps) => {
  const { remove, isLoadingRemove } = useRemove({ url, invalidateQueriesList })

  return (
    <Dialog title="Confirm delete" trigger={trigger} size="xl">
      {({ setIsOpenDialog }) => (
        <DialogContentConfirm
          isLoading={isLoadingRemove}
          onClick={() =>
            remove(ids, {
              onSuccess: () => setIsOpenDialog(false),
            })
          }
        />
      )}
    </Dialog>
  )
}

export { DialogConfirmRemove }
