/* eslint-disable no-unused-vars */
import { DialogOverlay, DialogContent } from '@reach/dialog'
import '@reach/dialog/styles.css'
import { ReactNode } from 'react'
import { MdClose } from 'react-icons/md'
import tw from 'twin.macro'
import 'styled-components/macro'
import { Heading } from '../heading'
import { useDialog } from './dialogProvider'

interface DialogProps {
  children: ReactNode
  title: string
  id: string
}
const Dialog = ({ id, title, children }: DialogProps) => {
  const { closeDialogById } = useDialog()

  return (
    <DialogOverlay onClick={() => closeDialogById(id)}>
      <DialogContentStyled>
        <TitleWrapper size="lg" tag="h1">
          {title}
          <CloseButton color="gray" type="button" onClick={() => closeDialogById(id)}>
            <MdClose size="26" />
          </CloseButton>
        </TitleWrapper>
        <ContentWrapper>{children}</ContentWrapper>
      </DialogContentStyled>
    </DialogOverlay>
  )
}

const DialogContentStyled = tw(DialogContent)`rounded-md !p-0 relative bg-white`
const TitleWrapper = tw(Heading)`border-b border-gray-200 py-4 pl-6 pr-4 relative`
const ContentWrapper = tw.div`p-6`
const CloseButton = tw.button`p-2 absolute right-2 top-1/2 -translate-y-1/2`

export { Dialog }
