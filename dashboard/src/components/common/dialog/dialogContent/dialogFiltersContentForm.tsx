import { FormEventHandler, ReactNode } from 'react'
import tw from 'twin.macro'
import 'styled-components/macro'
import { Button } from '../../../form/button'
import { useDialogContext } from '../dialogProvider'
import { ButtonsWrapper } from '../../../form/buttonsWrapper'

interface DialogFiltersContentFormProps {
  className?: string
  isLoading?: boolean
  children: ReactNode
  onSubmit: FormEventHandler<HTMLFormElement>
  onReset: FormEventHandler<HTMLFormElement>
}

const DialogFiltersContentForm = ({ children, onSubmit, isLoading, className, onReset }: DialogFiltersContentFormProps) => {
  const { setIsOpenDialog } = useDialogContext()
  return (
    <form onSubmit={onSubmit} tw="grid gap-4" onReset={onReset}>
      <FieldsWrapper className={className}>{children}</FieldsWrapper>
      <ButtonsWrapper tw="justify-center">
        <Button color="gray" onClick={() => setIsOpenDialog(false)}>
          Close
        </Button>
        <Button type="reset" color="gray">
          reset
        </Button>
        <Button type="submit" isLoading={isLoading}>
          Filter
        </Button>
      </ButtonsWrapper>
    </form>
  )
}

export { DialogFiltersContentForm }

const FieldsWrapper = tw.div`grid gap-4`
