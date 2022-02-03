/* eslint-disable no-unused-vars */
import { DialogOverlay, DialogContent } from '@reach/dialog'
import '@reach/dialog/styles.css'
import { ReactNode } from 'react'
import { MdClose } from 'react-icons/md'
import tw, { TwStyle } from 'twin.macro'
import 'styled-components/macro'
import { Heading } from '../heading'
import { useDialog } from './dialogProvider'

const sizes = {
  xl: tw`max-w-xl`,
  '2xl': tw`max-w-2xl`,
  '3xl': tw`max-w-3xl`,
  '4xl': tw`max-w-4xl`,
}

export type DialogSizes = keyof typeof sizes
interface DialogProps {
  children: ReactNode
  title: string
  id: string
  size?: DialogSizes
}
const Dialog = ({ id, title, children, size = '3xl' }: DialogProps) => {
  const { closeDialogById } = useDialog()

  return (
    <DialogOverlayStyled onClick={() => closeDialogById(id)}>
      <DialogContentStyled css={sizes[size]}>
        <TitleWrapper size="lg" tag="h1">
          {title}
          <CloseButton color="gray" type="button" onClick={() => closeDialogById(id)}>
            <MdClose size="26" />
          </CloseButton>
        </TitleWrapper>
        <ContentWrapper>{children}</ContentWrapper>
      </DialogContentStyled>
    </DialogOverlayStyled>
  )
}

const DialogOverlayStyled = tw(DialogOverlay)`z-50`
const DialogContentStyled = tw(DialogContent)`rounded-md !p-0 relative bg-white overflow-hidden`
const TitleWrapper = tw(Heading)`border-b border-gray-200 py-3 pl-6 pr-4 relative bg-green-600 text-white`
const ContentWrapper = tw.div`p-6 `
const CloseButton = tw.button`p-2 absolute right-2 top-1/2 -translate-y-1/2`

export { Dialog }
