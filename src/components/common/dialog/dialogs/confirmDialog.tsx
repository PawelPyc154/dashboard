/* eslint-disable react/jsx-no-undef */

import { MouseEventHandler } from 'react'
import tw from 'twin.macro'
import { Button } from '../../../form/button'
import { useDialog } from '../dialogProvider'
import 'styled-components/macro'

interface ConfirmDialogContentProps {
  dialogId?: string
  onClick: MouseEventHandler<HTMLButtonElement>
}

const ConfirmDialogContent = ({ dialogId, onClick }: ConfirmDialogContentProps) => {
  const { closeDialogById } = useDialog()

  return (
    <Container>
      <Button onClick={() => closeDialogById(dialogId || 'confirm')} color="">
        Cancel
      </Button>
      <Button onClick={onClick}>Confirm</Button>
    </Container>
  )
}

const Container = tw.div`flex justify-center items-center gap-4`

const useConfirmDialog = () => {
  const { addDialog, closeDialogById } = useDialog()

  const openConfirmDialog = (onClickConfirm: MouseEventHandler<HTMLButtonElement>) =>
    addDialog({
      id: 'confirm',
      title: 'Confirm delete',
      dialogComponentContent: <ConfirmDialogContent onClick={onClickConfirm} />,
    })
  const closeConfirmDialog = () => closeDialogById('confirm')

  return { openConfirmDialog, closeConfirmDialog }
}

export { ConfirmDialogContent, useConfirmDialog }
