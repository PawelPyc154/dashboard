import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import tw from 'twin.macro'
import { Spinner } from '../common/spinner'

const colors = {
  white: tw`bg-white hover:bg-gray-100 text-black`,
  gray: tw`bg-gray-100 hover:bg-gray-200 text-black`,
  green: tw`bg-green-600 hover:bg-green-700 text-white`,
}
const loadingColors: typeof colors = {
  white: tw`text-white`,
  gray: tw`text-gray-100`,
  green: tw`text-green-600`,
}

type ButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  color?: keyof typeof colors
  isLoading?: boolean
}

const Button = ({ children, color = 'green', isLoading, ...props }: ButtonProps) => (
  <Containter
    css={[colors[color], isLoading && [isLoading && tw`pointer-events-none`, loadingColors[color]]]}
    {...props}
  >
    {children}
    {isLoading && (
      <div tw="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <Spinner />
      </div>
    )}
  </Containter>
)

const Containter = tw.button`bg-green-600 hover:bg-green-700 disabled:(opacity-30 pointer-events-none) text-white font-medium rounded-md px-4 h-10 flex items-center relative select-none`

export { Button }
