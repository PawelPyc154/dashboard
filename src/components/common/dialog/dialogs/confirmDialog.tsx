/* eslint-disable react/jsx-no-undef */

import { MouseEventHandler } from 'react'
import tw from 'twin.macro'
import { Button } from '../../../form/button'
import { useDialog } from '../dialogProvider'
import 'styled-components/macro'
import { ButtonsWrapper } from '../../../form/buttonsWrapper'

interface ConfirmDialogContentProps {
  dialogId?: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

const ConfirmDialogContent = ({ dialogId, onClick }: ConfirmDialogContentProps) => {
  const { closeDialogById } = useDialog()

  return (
    <Container>
      <Button onClick={() => closeDialogById(dialogId || 'confirm')} color="gray">
        Cancel
      </Button>
      <Button onClick={onClick}>Confirm</Button>
    </Container>
  )
}

const Container = tw(ButtonsWrapper)`justify-center`

const useConfirmDialog = () => {
  const { addDialog, closeDialogById } = useDialog()

  const openConfirmDialog = (onClickConfirm: MouseEventHandler<HTMLButtonElement>) =>
    addDialog({
      id: 'confirm',
      title: 'Confirm delete',
      size: 'xl',
      dialogComponentContent: <ConfirmDialogContent onClick={onClickConfirm} />,
    })
  const closeConfirmDialog = () => closeDialogById('confirm')

  return { openConfirmDialog, closeConfirmDialog }
}

export { ConfirmDialogContent, useConfirmDialog }
