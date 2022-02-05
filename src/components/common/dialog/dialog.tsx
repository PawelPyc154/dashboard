/* eslint-disable no-unused-vars */
import { DialogOverlay, DialogContent } from '@reach/dialog'
import '@reach/dialog/styles.css'
import { ReactNode } from 'react'
import { MdClose } from 'react-icons/md'
import tw from 'twin.macro'
import { Heading } from '../heading'
import 'styled-components/macro'
import { DialogContextValue, DialogProvider } from './dialogProvider'

const sizes = {
  xl: tw`lg:max-w-xl`,
  '2xl': tw`lg:max-w-2xl`,
  '3xl': tw`lg:max-w-3xl`,
  '4xl': tw`lg:max-w-4xl`,
}

interface DialogProps {
  trigger: ReactNode
  children: (contextValue: DialogContextValue) => ReactNode
  title: string
  size?: keyof typeof sizes
}
const Dialog = ({ children, trigger, title, size = '3xl' }: DialogProps) => (
  <DialogProvider>
    {({ isOpenDialog, setIsOpenDialog }) => (
      <>
        <button type="button" onClick={() => setIsOpenDialog(true)}>
          {trigger}
        </button>
        {isOpenDialog && (
          <DialogOverlayStyled onClick={() => setIsOpenDialog(false)}>
            <DialogContentStyled css={sizes[size]}>
              <TitleWrapper size="lg" tag="h1">
                {title}
                <CloseButton color="gray" type="button" onClick={() => setIsOpenDialog(false)}>
                  <MdClose size="26" />
                </CloseButton>
              </TitleWrapper>
              <ContentWrapper>{children({ isOpenDialog, setIsOpenDialog })}</ContentWrapper>
            </DialogContentStyled>
          </DialogOverlayStyled>
        )}
      </>
    )}
  </DialogProvider>
)

export { Dialog }

const DialogOverlayStyled = tw(DialogOverlay)`z-50 p-4`
const DialogContentStyled = tw(DialogContent)`rounded-md !p-0 relative bg-white overflow-hidden w-full mt-12 lg:mt-20`
const TitleWrapper = tw(Heading)`border-b border-gray-200 py-3 pl-4 pr-4 relative bg-green-600 text-white`
const ContentWrapper = tw.div`p-4`
const CloseButton = tw.button`p-2 absolute right-1 top-1/2 -translate-y-1/2`
