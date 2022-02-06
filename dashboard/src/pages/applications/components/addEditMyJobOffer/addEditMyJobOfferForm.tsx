import { useForm } from 'react-hook-form'
import { DialogContentForm } from '../../../../components/common/dialog/dialogContent/dialogContentForm'

type Modes = 'add' | 'edit'
interface AddEditJobOfferFormProps<TMode extends Modes = 'add'> {
  mode?: TMode
  id: TMode extends 'add' ? number : undefined
}
const AddEditMyJobOfferForm = <TMode extends Modes>({ mode, id }: AddEditJobOfferFormProps<TMode>) => {
  const { handleSubmit } = useForm()
  const osSubmit = () => {
    console.log(mode, id)
  }

  return (
    <DialogContentForm onSubmit={handleSubmit(osSubmit)} isLoading={false}>
      addEditJobOfferForm
    </DialogContentForm>
  )
}

export { AddEditMyJobOfferForm }
