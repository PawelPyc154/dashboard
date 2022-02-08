import 'twin.macro'
import { useForm } from 'react-hook-form'
import { InputControl } from '../../../../components/form/controls/inputControl'
import { DialogContentForm } from '../../../../components/common/dialog/dialogContent/dialogContentForm'

interface FormValues {
  title: string
  test: string
}

const AddEditMyJobOfferForm = () => {
  const { control, handleSubmit } = useForm<FormValues>()
  const onSubmit = () => {}
  return (
    <DialogContentForm onSubmit={handleSubmit(onSubmit)} tw="grid-cols-2">
      <InputControl control={control} name="title" label="Title" tw="col-span-2" />
      <InputControl control={control} name="test" label="Title" />
    </DialogContentForm>
  )
}

export { AddEditMyJobOfferForm }
