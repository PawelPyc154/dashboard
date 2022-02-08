import { ReactNode } from 'react'
import { FieldValues, DefaultValues } from 'react-hook-form'
import { FaSlidersH } from 'react-icons/fa'
import { useFormQueryHasValue } from '../../../../hook/useFormQueryHasValue'
import { IconButton } from '../../../form/iconButton'
import { Tooltip } from '../../tooltip'
import { DialogTrigger } from '../dialogTrigger'

interface DialogFiltersProps<TFieldValues extends FieldValues = FieldValues> {
  children: ReactNode
  defaultFiltersValues: DefaultValues<TFieldValues>
}
const DialogFilters = <TFieldValues extends FieldValues = FieldValues>({
  children,
  defaultFiltersValues,
}: DialogFiltersProps<TFieldValues>) => {
  const { formhasAnyValue } = useFormQueryHasValue(defaultFiltersValues)
  return (
    <DialogTrigger
      title="Filters"
      trigger={
        <Tooltip content="Filters">
          <IconButton color={formhasAnyValue ? 'red' : 'white'}>
            <FaSlidersH size="16" />
          </IconButton>
        </Tooltip>
      }
    >
      {() => children}
    </DialogTrigger>
  )
}

export { DialogFilters }
