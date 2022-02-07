import { DefaultValues, FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import 'twin.macro'
import { FormEvent } from 'react'
import { InputControl } from '../../../../components/form/controls/inputControl'
import { DialogFiltersContentForm } from '../../../../components/common/dialog/dialogContent/dialogFiltersContentForm'
import { useQueryParamsAll } from '../../../../hook/useQueryParamsAll'

interface FormValues {
  title: string
  test: string
}

const AddEditMyJobOfferForm = () => {
  const { formProps, control } = useFormQueryParams()
  return (
    <DialogFiltersContentForm {...formProps} tw="grid-cols-2">
      <InputControl control={control} name="title" label="Title" tw="col-span-2" />
      <InputControl control={control} name="test" label="Title" tw="" />
    </DialogFiltersContentForm>
  )
}

export { AddEditMyJobOfferForm }

const useFormQueryParams = <TFieldValues extends FieldValues = FieldValues>(defaultValues?: DefaultValues<TFieldValues>) => {
  const { queryParams, setQueryParams } = useQueryParamsAll()
  const { handleSubmit, control, reset, watch, ...restForm } = useForm<FormValues>({
    defaultValues: defaultValues || queryParams,
    shouldUnregister: true,
  })
  const onSubmit: SubmitHandler<FormValues> = (value) => {
    setQueryParams({ ...queryParams, pageNumber: '', ...value })
  }
  const onReset: SubmitHandler<FormValues> = (value) => {
    setQueryParams({ ...queryParams, pageNumber: '', ...value })
  }

  return {
    control,
    watch,
    ...restForm,
    formProps: {
      onSubmit: handleSubmit(onSubmit),
      onReset: (e: FormEvent<HTMLFormElement>) => {
        const objectEmptyString = Object.fromEntries(Object.entries(watch()).map(([key]) => [key, '']))
        reset(defaultValues || objectEmptyString)
        setTimeout(() => {
          handleSubmit(onReset)(e)
        }, 0)
      },
    },
  }
}

export { useFormQueryParams }
