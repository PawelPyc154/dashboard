import { ReactNode } from 'react'
import tw from 'twin.macro'

interface ButtonProps {
  children: ReactNode
}

const Button = ({ children }: ButtonProps) => (
  <Containter>{children}</Containter>
)

export { Button }

const Containter = tw.button`bg-green-600 text-white font-medium rounded-md shadow-lg px-4 h-11 flex items-center`
