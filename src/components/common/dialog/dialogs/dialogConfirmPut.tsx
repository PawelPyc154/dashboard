import { QueryKey } from 'react-query'
import { usePut } from '../../../../hook/api/usePut'
import { Dialog } from '../dialog'
import { DialogContentConfirm } from '../dialogContent/dialogContentConfirm'

interface DialogConfirmPutProps {
  title: string
  url: string
  ids: (number | string)[]
  invalidateQueriesList: QueryKey[]
  // eslint-disable-next-line no-undef
  openButton: JSX.Element
  onSuccess?: () => void
}
const DialogConfirmPut = ({
  openButton,
  url,
  ids,
  title,
  onSuccess,
  invalidateQueriesList = [],
}: DialogConfirmPutProps) => {
  const { put, isLoadingPut } = usePut({ url, invalidateQueriesList })

  return (
    <Dialog title={title} openButton={openButton} size="xl">
      {({ setIsOpenDialog }) => (
        <DialogContentConfirm
          isLoading={isLoadingPut}
          onClick={() =>
            put(ids, {
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

export { DialogConfirmPut }
