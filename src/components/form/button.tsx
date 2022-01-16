import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import tw from 'twin.macro'

type ButtonProps = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {}

const Button = ({ children, ...props }: ButtonProps) => (
  <Containter {...props}>{children}</Containter>
)

export { Button }

const Containter = tw.button`bg-green-600 hover:bg-green-700 disabled:(opacity-30 pointer-events-none) text-white font-medium rounded-md shadow-lg px-4 h-11 flex items-center`
