import { useForm } from 'react-hook-form'
import { DialogContentForm } from '../../components/common/dialog/dialogs/dialogContentForm'

interface AddEditJobOfferFormProps {
  dialogId?: string
}
const AddEditJobOfferForm = ({ dialogId }: AddEditJobOfferFormProps) => {
  const { handleSubmit } = useForm()
  const osSubmit = () => {}
  return (
    <DialogContentForm onSubmit={handleSubmit(osSubmit)} isLoading dialogId={dialogId}>
      addEditJobOfferForm
    </DialogContentForm>
  )
}

export { AddEditJobOfferForm }
