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
  isLoading: boolean
}

const ConfirmDialogContent = ({ dialogId, onClick, isLoading }: ConfirmDialogContentProps) => {
  const { closeDialogById } = useDialog()

  return (
    <Container>
      <Button onClick={() => closeDialogById(dialogId || 'confirm')} color="gray">
        Cancel
      </Button>
      <Button onClick={onClick} isLoading={isLoading}>
        Confirm
      </Button>
    </Container>
  )
}

const Container = tw(ButtonsWrapper)`justify-center`

const useConfirmDialog = (options: { isLoading: boolean }) => {
  const { addDialog, closeDialogById } = useDialog()

  const openConfirmDialog = (onClickConfirm: MouseEventHandler<HTMLButtonElement>) =>
    addDialog({
      id: 'confirm',
      title: 'Confirm delete',
      size: 'xl',
      dialogComponentContent: <ConfirmDialogContent onClick={onClickConfirm} isLoading={options.isLoading} />,
    })
  const closeConfirmDialog = () => closeDialogById('confirm')

  return { openConfirmDialog, closeConfirmDialog }
}

export { ConfirmDialogContent, useConfirmDialog }
