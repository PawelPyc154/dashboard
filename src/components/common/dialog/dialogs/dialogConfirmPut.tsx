import { ReactNode } from 'react'
import { QueryKey } from 'react-query'
import { usePut } from '../../../../hook/api/usePut'
import { Dialog } from '../dialog'
import { DialogContentConfirm } from '../dialogContent/dialogContentConfirm'

interface DialogConfirmPutProps {
  title: string
  url: string
  ids: (number | string)[]
  invalidateQueriesList: QueryKey[]
  trigger: ReactNode
}
const DialogConfirmPut = ({ trigger, url, ids, title, invalidateQueriesList = [] }: DialogConfirmPutProps) => {
  const { put, isLoadingPut } = usePut({ url, invalidateQueriesList })

  return (
    <Dialog title={title} trigger={trigger} size="xl">
      {({ setIsOpenDialog }) => (
        <DialogContentConfirm
          isLoading={isLoadingPut}
          onClick={() =>
            put(ids, {
              onSuccess: () => setIsOpenDialog(false),
            })
          }
        />
      )}
    </Dialog>
  )
}

export { DialogConfirmPut }
