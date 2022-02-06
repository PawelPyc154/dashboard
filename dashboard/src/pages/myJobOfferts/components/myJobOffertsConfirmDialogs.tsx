import { DialogConfirmPost } from '../../../components/common/dialog/dialogs/dialogConfirmPost'
import { DialogConfirmPut } from '../../../components/common/dialog/dialogs/dialogConfirmPut'
import { DialogConfirmRemove } from '../../../components/common/dialog/dialogs/dialogConfirmRemove'

const invalidateQueriesList: string[] = []

interface MyJobOffertsConfirmPublishDialogsProps {
  ids: (string | number)[]
  // eslint-disable-next-line no-undef
  trigger: JSX.Element
  onSuccess?: () => void
}

const MyJobOffertsConfirmPublishDialogs = ({ ids, trigger, onSuccess }: MyJobOffertsConfirmPublishDialogsProps) => (
  <DialogConfirmPut
    title="Confirm publich"
    url=""
    ids={ids}
    trigger={trigger}
    invalidateQueriesList={invalidateQueriesList}
    onSuccess={onSuccess}
  />
)

const MyJobOffertsConfirmPromoteDialogs = ({ ids, trigger, onSuccess }: MyJobOffertsConfirmPublishDialogsProps) => (
  <DialogConfirmPut
    title="Confirm promote"
    url=""
    ids={ids}
    trigger={trigger}
    invalidateQueriesList={invalidateQueriesList}
    onSuccess={onSuccess}
  />
)

const MyJobOffertsConfirmDuplicateDialogs = ({ ids, trigger, onSuccess }: MyJobOffertsConfirmPublishDialogsProps) => (
  <DialogConfirmPost
    title="Confirm duplicate"
    url=""
    ids={ids}
    trigger={trigger}
    invalidateQueriesList={invalidateQueriesList}
    onSuccess={onSuccess}
  />
)

const MyJobOffertsConfirmCloseDialogs = ({ ids, trigger, onSuccess }: MyJobOffertsConfirmPublishDialogsProps) => (
  <DialogConfirmPut
    title="Confirm close"
    url=""
    ids={ids}
    trigger={trigger}
    invalidateQueriesList={invalidateQueriesList}
    onSuccess={onSuccess}
  />
)

const MyJobOffertsConfirmRemoveDialogs = ({ ids, trigger, onSuccess }: MyJobOffertsConfirmPublishDialogsProps) => (
  <DialogConfirmRemove url="" ids={ids} trigger={trigger} invalidateQueriesList={[]} onSuccess={onSuccess} />
)

export {
  MyJobOffertsConfirmPublishDialogs,
  MyJobOffertsConfirmPromoteDialogs,
  MyJobOffertsConfirmDuplicateDialogs,
  MyJobOffertsConfirmCloseDialogs,
  MyJobOffertsConfirmRemoveDialogs,
}
