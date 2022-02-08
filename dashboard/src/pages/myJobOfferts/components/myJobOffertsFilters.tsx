import 'twin.macro'
import { InputControl } from '../../../components/form/controls/inputControl'
import { DialogContentForm } from '../../../components/common/dialog/dialogContent/dialogContentForm'
import { useFormQueryParams } from '../../../hook/useFormQueryParams'
import { DialogFilters } from '../../../components/common/dialog/dialogs/dialogFilters'

const defaultFiltersValues = { title: '', test: '' }

const MyJobOffertsFilters = () => (
  <DialogFilters defaultFiltersValues={defaultFiltersValues}>
    <FilterForm />
  </DialogFilters>
)

interface FormFiltersValues {
  title: string
  test: string
}

const FilterForm = () => {
  const { formProps, control } = useFormQueryParams<FormFiltersValues>()

  return (
    <DialogContentForm {...formProps} tw="grid-cols-2">
      <InputControl control={control} name="title" label="Title" tw="col-span-2" />
      <InputControl control={control} name="test" label="Title" />
    </DialogContentForm>
  )
}

export { MyJobOffertsFilters }
