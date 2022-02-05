import { DialogConfirmPost } from '../../../components/common/dialog/dialogs/dialogConfirmPost'
import { DialogConfirmPut } from '../../../components/common/dialog/dialogs/dialogConfirmPut'
import { DialogConfirmRemove } from '../../../components/common/dialog/dialogs/dialogConfirmRemove'

const invalidateQueriesList: string[] = []

interface MyJobOffertsConfirmPublishDialogsProps {
  ids: (string | number)[]
  // eslint-disable-next-line no-undef
  openButton: JSX.Element
}

const MyJobOffertsConfirmPublishDialogs = ({ ids, openButton }: MyJobOffertsConfirmPublishDialogsProps) => (
  <DialogConfirmPut
    title="Confirm publich"
    url=""
    ids={ids}
    openButton={openButton}
    invalidateQueriesList={invalidateQueriesList}
  />
)

const MyJobOffertsConfirmPromoteDialogs = ({ ids, openButton }: MyJobOffertsConfirmPublishDialogsProps) => (
  <DialogConfirmPut
    title="Confirm promote"
    url=""
    ids={ids}
    openButton={openButton}
    invalidateQueriesList={invalidateQueriesList}
  />
)

const MyJobOffertsConfirmDuplicateDialogs = ({ ids, openButton }: MyJobOffertsConfirmPublishDialogsProps) => (
  <DialogConfirmPost
    title="Confirm duplicate"
    url=""
    ids={ids}
    openButton={openButton}
    invalidateQueriesList={invalidateQueriesList}
  />
)

const MyJobOffertsConfirmCloseDialogs = ({ ids, openButton }: MyJobOffertsConfirmPublishDialogsProps) => (
  <DialogConfirmPut
    title="Confirm close"
    url=""
    ids={ids}
    openButton={openButton}
    invalidateQueriesList={invalidateQueriesList}
  />
)

const MyJobOffertsConfirmRemoveDialogs = ({ ids, openButton }: MyJobOffertsConfirmPublishDialogsProps) => (
  <DialogConfirmRemove url="" ids={ids} openButton={openButton} invalidateQueriesList={[]} />
)

export {
  MyJobOffertsConfirmPublishDialogs,
  MyJobOffertsConfirmPromoteDialogs,
  MyJobOffertsConfirmDuplicateDialogs,
  MyJobOffertsConfirmCloseDialogs,
  MyJobOffertsConfirmRemoveDialogs,
}
