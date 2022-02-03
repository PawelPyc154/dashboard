import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import tw from 'twin.macro'

const colors = {
  white: tw`bg-white hover:bg-gray-100 text-black`,
  gray: tw`bg-gray-100 hover:bg-gray-200 text-black`,
  green: tw`bg-green-600 hover:bg-green-700 text-white`,
}

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  color?: keyof typeof colors
}

const Button = ({ children, color = 'green', ...props }: ButtonProps) => (
  <Containter css={[colors[color]]} {...props}>
    {children}
  </Containter>
)

const Containter = tw.button`bg-green-600 hover:bg-green-700 disabled:(opacity-30 pointer-events-none) text-white font-medium rounded-md  px-4 h-11 flex items-center`

export { Button }
