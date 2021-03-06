import { DialogContent, DialogOverlay } from '@reach/dialog'
import { ReactNode } from 'react'
import { MdClose } from 'react-icons/md'
import tw from 'twin.macro'
import { Heading } from '../heading'
import '@reach/dialog/styles.css'

const sizes = {
  xl: tw`xl:max-w-xl`,
  '2xl': tw`xl:max-w-2xl`,
  '3xl': tw`xl:max-w-3xl`,
  '4xl': tw`xl:max-w-4xl`,
}
export type DialogBaseSizes = keyof typeof sizes

interface DialogBaseProps {
  title: string
  size?: DialogBaseSizes
  onCloseDialog: () => void
  // eslint-disable-next-line no-unused-vars
  children: ReactNode
}
const DialogBase = ({ children, size = '2xl', title, onCloseDialog }: DialogBaseProps) => (
  <DialogOverlayStyled onClick={onCloseDialog}>
    <DialogContentStyled
      id="dialogContent"
      css={sizes[size]}
      onClick={(e) => {
        e.stopPropagation()
      }}
    >
      <TitleWrapper size="lg" tag="h1">
        {title}
        <CloseButton color="gray" type="button" onClick={onCloseDialog}>
          <MdClose size="26" />
        </CloseButton>
      </TitleWrapper>
      <ContentWrapper>{children}</ContentWrapper>
    </DialogContentStyled>
  </DialogOverlayStyled>
)

const DialogOverlayStyled = tw(DialogOverlay)`z-50 p-4`
const DialogContentStyled = tw(DialogContent)`rounded-md !p-0 relative overflow-hidden w-full mt-12 xl:mt-20`
const TitleWrapper = tw(Heading)`border-b border-gray-200 py-2 pl-4 pr-4 relative bg-green-600 text-white`
const ContentWrapper = tw.div`p-4`
const CloseButton = tw.button`p-2 absolute right-1 top-1/2 -translate-y-1/2`

export { DialogBase }
