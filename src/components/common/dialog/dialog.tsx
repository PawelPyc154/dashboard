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
  const { removeDialogById } = useDialog()

  return (
    <DialogOverlay onClick={() => removeDialogById(id)}>
      <DialogContentStyled>
        <TitleWrapper size="lg" tag="h1">
          {title}
          <CloseButton color="gray" type="button" onClick={() => removeDialogById(id)}>
            <MdClose size="26" />
          </CloseButton>
        </TitleWrapper>
        <ContentWrapper>{children}</ContentWrapper>
      </DialogContentStyled>
    </DialogOverlay>
  )
}

export { Dialog }

const DialogContentStyled = tw(DialogContent)`rounded-md !p-0 relative bg-gray-100`
const TitleWrapper = tw(Heading)`border-b border-gray-300 py-4 pl-6 pr-4 relative`
const ContentWrapper = tw.div`p-6`
const CloseButton = tw.button`p-2 absolute right-2 top-1/2 -translate-y-1/2`
