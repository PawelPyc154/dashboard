import { SubmitHandler, useForm } from 'react-hook-form'
import 'twin.macro'

import queryString from 'query-string'
import { useLocation, useNavigate } from 'react-router-dom'
import { InputControl } from '../../../../components/form/controls/inputControl'
import { DialogFiltersContentForm } from '../../../../components/common/dialog/dialogContent/dialogFiltersContentForm'

interface FormValues {
  searchPhrase: string
  test: string
}

const AddEditMyJobOfferForm = () => {
  const { queryParams, setQueryParams } = useQueryParamsAll()
  const { handleSubmit, control, reset, watch } = useForm<FormValues>({ defaultValues: queryParams, shouldUnregister: true }) //  TODO - add nestedDefaultValues
  const onSubmit: SubmitHandler<FormValues> = (value) => {
    setQueryParams({ ...queryParams, pageNumber: '', ...value })
  }
  const onReset: SubmitHandler<FormValues> = (value) => {
    setQueryParams({ ...queryParams, pageNumber: '', ...value })
  }

  return (
    <DialogFiltersContentForm
      onSubmit={handleSubmit(onSubmit)}
      onReset={(e) => {
        const objectEmptyString = Object.fromEntries(Object.entries(watch()).map(([key]) => [key, '']))
        reset(objectEmptyString)
        setTimeout(() => {
          handleSubmit(onReset)(e)
        }, 0)
      }}
      isLoading={false}
      tw="grid-cols-2"
    >
      <InputControl control={control} name="searchPhrase" label="Title" tw="col-span-2" />
      <InputControl control={control} name="test" label="Title" tw="" />
    </DialogFiltersContentForm>
  )
}

export { AddEditMyJobOfferForm }

const useQueryParamsAll = () => {
  const { search, pathname } = useLocation()
  const navigate = useNavigate()
  const queryParams = queryString.parse(search, {
    parseBooleans: true,
    parseNumbers: true,
    arrayFormat: 'index',
  })

  const setQueryParams = (value: object) => {
    navigate({
      pathname,
      search: queryString.stringify(value, { skipNull: true, skipEmptyString: true, arrayFormat: 'index' }),
    })
  }
  return { queryParams, setQueryParams }
}

export default useQueryParamsAll
