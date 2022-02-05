import { QueryKey } from 'react-query'
import { usePost } from '../../../../hook/api/usePost'
import { Dialog } from '../dialog'
import { DialogContentConfirm } from '../dialogContent/dialogContentConfirm'

interface DialogConfirmPostProps {
  title: string
  url: string
  ids: (number | string)[]
  invalidateQueriesList: QueryKey[]
  // eslint-disable-next-line no-undef
  openButton: JSX.Element
  onSuccess?: () => void
}
const DialogConfirmPost = ({
  openButton,
  url,
  ids,
  title,
  onSuccess,
  invalidateQueriesList = [],
}: DialogConfirmPostProps) => {
  const { post, isLoadingPost } = usePost({ url, invalidateQueriesList })

  return (
    <Dialog title={title} openButton={openButton} size="xl">
      {({ setIsOpenDialog }) => (
        <DialogContentConfirm
          isLoading={isLoadingPost}
          onClick={() =>
            post(ids, {
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

export { DialogConfirmPost }
