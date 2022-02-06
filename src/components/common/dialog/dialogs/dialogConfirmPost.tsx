import { QueryKey } from 'react-query'
import { usePost } from '../../../../hook/api/usePost'
import { DialogTrigger } from '../dialogTrigger'
import { DialogContentConfirm } from '../dialogContent/dialogContentConfirm'

interface DialogConfirmPostProps {
  title: string
  url: string
  ids: (number | string)[]
  invalidateQueriesList: QueryKey[]
  // eslint-disable-next-line no-undef
  trigger: JSX.Element
  onSuccess?: () => void
}
const DialogConfirmPost = ({
  trigger,
  url,
  ids,
  title,
  onSuccess,
  invalidateQueriesList = [],
}: DialogConfirmPostProps) => {
  const { post, isLoadingPost } = usePost({ url, invalidateQueriesList })

  return (
    <DialogTrigger title={title} trigger={trigger} size="xl">
      {({ onCloseDialog }) => (
        <DialogContentConfirm
          isLoading={isLoadingPost}
          onClick={() =>
            post(ids, {
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

export { DialogConfirmPost }
