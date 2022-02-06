/* eslint-disable react/jsx-no-undef */

import { MouseEventHandler } from 'react'
import 'twin.macro'
import { Button } from '../../../form/button'
import 'styled-components/macro'
import { ButtonsWrapper } from '../../../form/buttonsWrapper'
import { useDialogContext } from '../dialogProvider'

interface DialogContentConfirmProps {
  onClick: MouseEventHandler<HTMLButtonElement>
  isLoading: boolean
}

const DialogContentConfirm = ({ onClick, isLoading }: DialogContentConfirmProps) => {
  const { setIsOpenDialog } = useDialogContext()
  return (
    <ButtonsWrapper tw="justify-center">
      <Button onClick={() => setIsOpenDialog(false)} color="gray">
        Cancel
      </Button>
      <Button onClick={onClick} isLoading={isLoading}>
        Confirm
      </Button>
    </ButtonsWrapper>
  )
}

export { DialogContentConfirm }
