import { DefaultValues, FieldValues } from 'react-hook-form'
import { useQueryParamsAll } from './useQueryParamsAll'

const useFormQueryHasValue = <TFieldValues extends FieldValues = FieldValues>(defaultValues: DefaultValues<TFieldValues>) => {
  const { queryParams } = useQueryParamsAll()
  return {
    formhasAnyValue:
      JSON.stringify(
        findCommon(
          {
            ...defaultValues,
            ...queryParams,
          },
          defaultValues,
        ),
      ) !== JSON.stringify(defaultValues),
  }
}

export { useFormQueryHasValue }

export const findCommon = (a: object, b: object) =>
  // eslint-disable-next-line no-prototype-builtins
  Object.fromEntries(Object.entries(a).filter(([key]) => b.hasOwnProperty(key)))
