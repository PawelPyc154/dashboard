import { FormEventHandler, ReactNode } from 'react'
import tw from 'twin.macro'
import 'styled-components/macro'
import { Button } from '../../../form/button'
import { useDialog } from '../dialogProvider'
import { ButtonsWrapper } from '../../../form/buttonsWrapper'

interface DialogContentFormProps {
  dialogId?: string
  isLoading: boolean
  children: ReactNode
  onSubmit: FormEventHandler<HTMLFormElement> | undefined
}

const DialogContentForm = ({ children, onSubmit, isLoading, dialogId }: DialogContentFormProps) => {
  const { closeDialogById } = useDialog()
  return (
    <form onSubmit={onSubmit}>
      <FieldsWrapper>{children}</FieldsWrapper>
      <ButtonsWrapper>
        <Button color="gray" onClick={() => closeDialogById(dialogId || 'form')}>
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
