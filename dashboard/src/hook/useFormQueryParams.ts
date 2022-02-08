import { FormEvent } from 'react'
import { FieldValues, useForm, UnpackNestedValue, DeepPartial, SubmitHandler } from 'react-hook-form'
import { useQueryParamsAll } from './useQueryParamsAll'

const useFormQueryParams = <TFieldValues extends FieldValues = FieldValues>() => {
  const { queryParams, setQueryParams } = useQueryParamsAll()

  const { handleSubmit, control, reset, watch, ...restForm } = useForm<TFieldValues>({
    defaultValues: queryParams as UnpackNestedValue<DeepPartial<TFieldValues>>,
    shouldUnregister: true,
  })
  const onSubmit: SubmitHandler<TFieldValues> = (value) => {
    setQueryParams({ ...queryParams, pageNumber: '', ...value })
  }
  const onReset: SubmitHandler<TFieldValues> = (value) => {
    setQueryParams({ ...queryParams, pageNumber: '', ...value })
  }

  return {
    control,
    watch,
    ...restForm,
    formProps: {
      onSubmit: handleSubmit(onSubmit),
      onReset: (e: FormEvent<HTMLFormElement>) => {
        const objectEmptyString = Object.fromEntries(Object.entries(watch()).map(([key]) => [key, ''])) as UnpackNestedValue<
          DeepPartial<TFieldValues>
        >
        reset(objectEmptyString)
        setTimeout(() => {
          handleSubmit(onReset)(e)
        }, 0)
      },
    },
  }
}

export { useFormQueryParams }
