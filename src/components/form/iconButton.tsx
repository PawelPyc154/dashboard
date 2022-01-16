import { ReactNode } from 'react'
import tw from 'twin.macro'

interface IconButtonProps {
  children: ReactNode
}

const IconButton = ({ children }: IconButtonProps) => (
  <Containter>{children}</Containter>
)

export { IconButton }

const Containter = tw.button`hover:bg-white rounded-md transition-colors h-11 w-11 flex items-center justify-center flex-shrink-0`
