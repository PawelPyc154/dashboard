/* eslint-disable react/button-has-type */
import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import tw from 'twin.macro'

const colors = {
  white: tw`bg-white hover:bg-gray-100`,
  gray: tw`bg-gray-100 hover:bg-gray-200`,
  green: tw`bg-green-600 hover:bg-green-700 text-white`,
}
const sizes = {
  base: tw`h-11 w-11`,
  md: tw`h-9 w-9`,
}

type IconButtonProps = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  color?: keyof typeof colors
  size?: keyof typeof sizes
}

const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ children, type = 'button', size = 'base', color = 'white', ...props }: IconButtonProps, ref) => (
    <button
      ref={ref}
      type={type}
      css={[
        tw`rounded-md transition-colors flex items-center justify-center flex-shrink-0`,
        colors[color],
        sizes[size],
      ]}
      {...props}
    >
      {children}
    </button>
  ),
)

export { IconButton }
