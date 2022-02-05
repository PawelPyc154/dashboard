import { ReactNode } from 'react'
import { QueryKey } from 'react-query'
import { usePost } from '../../../../hook/api/usePost'
import { Dialog } from '../dialog'
import { DialogContentConfirm } from '../dialogContent/dialogContentConfirm'

interface DialogConfirmPostProps {
  title: string
  url: string
  ids: (number | string)[]
  invalidateQueriesList: QueryKey[]
  trigger: ReactNode
}
const DialogConfirmPost = ({ trigger, url, ids, title, invalidateQueriesList = [] }: DialogConfirmPostProps) => {
  const { post, isLoadingPost } = usePost({ url, invalidateQueriesList })

  return (
    <Dialog title={title} trigger={trigger} size="xl">
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
