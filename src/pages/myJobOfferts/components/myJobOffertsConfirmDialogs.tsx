import { ReactNode } from 'react'
import { DialogConfirmPost } from '../../../components/common/dialog/dialogs/dialogConfirmPost'
import { DialogConfirmPut } from '../../../components/common/dialog/dialogs/dialogConfirmPut'
import { DialogConfirmRemove } from '../../../components/common/dialog/dialogs/dialogConfirmRemove'

const invalidateQueriesList: string[] = []

interface MyJobOffertsConfirmPublishDialogsProps {
  ids: (string | number)[]
  trigger: ReactNode
}

const MyJobOffertsConfirmPublishDialogs = ({ ids, trigger }: MyJobOffertsConfirmPublishDialogsProps) => (
  <DialogConfirmPut
    title="Confirm publich"
    url=""
    ids={ids}
    trigger={trigger}
    invalidateQueriesList={invalidateQueriesList}
  />
)

const MyJobOffertsConfirmPromoteDialogs = ({ ids, trigger }: MyJobOffertsConfirmPublishDialogsProps) => (
  <DialogConfirmPut
    title="Confirm promote"
    url=""
    ids={ids}
    trigger={trigger}
    invalidateQueriesList={invalidateQueriesList}
  />
)

const MyJobOffertsConfirmDuplicateDialogs = ({ ids, trigger }: MyJobOffertsConfirmPublishDialogsProps) => (
  <DialogConfirmPost
    title="Confirm duplicate"
    url=""
    ids={ids}
    trigger={trigger}
    invalidateQueriesList={invalidateQueriesList}
  />
)

const MyJobOffertsConfirmCloseDialogs = ({ ids, trigger }: MyJobOffertsConfirmPublishDialogsProps) => (
  <DialogConfirmPut
    title="Confirm close"
    url=""
    ids={ids}
    trigger={trigger}
    invalidateQueriesList={invalidateQueriesList}
  />
)

const MyJobOffertsConfirmRemoveDialogs = ({ ids, trigger }: MyJobOffertsConfirmPublishDialogsProps) => (
  <DialogConfirmRemove url="" ids={ids} trigger={trigger} invalidateQueriesList={[]} />
)

export {
  MyJobOffertsConfirmPublishDialogs,
  MyJobOffertsConfirmPromoteDialogs,
  MyJobOffertsConfirmDuplicateDialogs,
  MyJobOffertsConfirmCloseDialogs,
  MyJobOffertsConfirmRemoveDialogs,
}
