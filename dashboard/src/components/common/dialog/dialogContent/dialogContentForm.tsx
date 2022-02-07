import { FormEventHandler, ReactNode } from 'react'
import tw from 'twin.macro'
import 'styled-components/macro'
import { Button } from '../../../form/button'
import { useDialogContext } from '../dialogProvider'
import { ButtonsWrapper } from '../../../form/buttonsWrapper'

interface DialogContentFormProps {
  className?: string
  isLoading: boolean
  children: ReactNode
  onSubmit: FormEventHandler<HTMLFormElement> | undefined
}

const DialogContentForm = ({ children, onSubmit, isLoading, className }: DialogContentFormProps) => {
  const { setIsOpenDialog } = useDialogContext()

  return (
    <form onSubmit={onSubmit} tw="grid gap-4">
      <FieldsWrapper className={className}>{children}</FieldsWrapper>
      <ButtonsWrapper tw="justify-center">
        <Button color="gray" onClick={() => setIsOpenDialog(false)}>
          Close
        </Button>
        <Button type="submit" isLoading={isLoading}>
          Save
        </Button>
      </ButtonsWrapper>
    </form>
  )
}

export { DialogContentForm }

const FieldsWrapper = tw.div`grid gap-4`
