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
}
const DialogConfirmPost = ({ openButton, url, ids, title, invalidateQueriesList = [] }: DialogConfirmPostProps) => {
  const { post, isLoadingPost } = usePost({ url, invalidateQueriesList })

  return (
    <Dialog title={title} openButton={openButton} size="xl">
      {({ setIsOpenDialog }) => (
        <DialogContentConfirm
          isLoading={isLoadingPost}
          onClick={() =>
            post(ids, {
              onSuccess: () => setIsOpenDialog(false),
            })
          }
        />
      )}
    </Dialog>
  )
}

export { DialogConfirmPost }
