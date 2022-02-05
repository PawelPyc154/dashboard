import { DialogConfirmPost } from '../../../components/common/dialog/dialogs/dialogConfirmPost'
import { DialogConfirmPut } from '../../../components/common/dialog/dialogs/dialogConfirmPut'
import { DialogConfirmRemove } from '../../../components/common/dialog/dialogs/dialogConfirmRemove'

const invalidateQueriesList: string[] = []

interface MyJobOffertsConfirmPublishDialogsProps {
  ids: (string | number)[]
  // eslint-disable-next-line no-undef
  openButton: JSX.Element
  onSuccess?: () => void
}

const MyJobOffertsConfirmPublishDialogs = ({ ids, openButton, onSuccess }: MyJobOffertsConfirmPublishDialogsProps) => (
  <DialogConfirmPut
    title="Confirm publich"
    url=""
    ids={ids}
    openButton={openButton}
    invalidateQueriesList={invalidateQueriesList}
    onSuccess={onSuccess}
  />
)

const MyJobOffertsConfirmPromoteDialogs = ({ ids, openButton, onSuccess }: MyJobOffertsConfirmPublishDialogsProps) => (
  <DialogConfirmPut
    title="Confirm promote"
    url=""
    ids={ids}
    openButton={openButton}
    invalidateQueriesList={invalidateQueriesList}
    onSuccess={onSuccess}
  />
)

const MyJobOffertsConfirmDuplicateDialogs = ({
  ids,
  openButton,
  onSuccess,
}: MyJobOffertsConfirmPublishDialogsProps) => (
  <DialogConfirmPost
    title="Confirm duplicate"
    url=""
    ids={ids}
    openButton={openButton}
    invalidateQueriesList={invalidateQueriesList}
    onSuccess={onSuccess}
  />
)

const MyJobOffertsConfirmCloseDialogs = ({ ids, openButton, onSuccess }: MyJobOffertsConfirmPublishDialogsProps) => (
  <DialogConfirmPut
    title="Confirm close"
    url=""
    ids={ids}
    openButton={openButton}
    invalidateQueriesList={invalidateQueriesList}
    onSuccess={onSuccess}
  />
)

const MyJobOffertsConfirmRemoveDialogs = ({ ids, openButton, onSuccess }: MyJobOffertsConfirmPublishDialogsProps) => (
  <DialogConfirmRemove url="" ids={ids} openButton={openButton} invalidateQueriesList={[]} onSuccess={onSuccess} />
)

export {
  MyJobOffertsConfirmPublishDialogs,
  MyJobOffertsConfirmPromoteDialogs,
  MyJobOffertsConfirmDuplicateDialogs,
  MyJobOffertsConfirmCloseDialogs,
  MyJobOffertsConfirmRemoveDialogs,
}
