import { forwardRef, useRef, useEffect } from 'react'
import { MdOutlineIndeterminateCheckBox, MdOutlineCheckBoxOutlineBlank, MdCheckBox } from 'react-icons/md'
import { TableToggleAllRowsSelectedProps } from 'react-table'
import tw from 'twin.macro'
import 'styled-components/macro'

const IndeterminateCheckbox = forwardRef<HTMLInputElement, TableToggleAllRowsSelectedProps>(({ indeterminate, checked, ...rest }, ref) => {
  const defaultRef = useRef<HTMLInputElement>(null)
  const resolvedRef = defaultRef || ref

  useEffect(() => {
    if (resolvedRef.current) {
      resolvedRef.current.indeterminate = !!indeterminate
    }
  }, [resolvedRef, indeterminate])
  return (
    <Container>
      <Input type="checkbox" ref={resolvedRef} {...rest} checked={checked} />

      {!checked && (indeterminate ? <MdOutlineIndeterminateCheckBox /> : <MdOutlineCheckBoxOutlineBlank />)}
      {checked && <MdCheckBox />}
    </Container>
  )
})

const Container = tw.label`relative text-[22px] 2xl:text-2xl text-green-600 hover:text-green-700 select-none cursor-pointer `
const Input = tw.input`absolute inset-0 invisible`

export { IndeterminateCheckbox }
