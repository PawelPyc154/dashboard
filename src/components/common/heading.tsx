import { ReactNode } from 'react'
import tw from 'twin.macro'
import 'styled-components/macro'
import { Tag } from './tag'

const sizes = {
  sm: tw`text-xs 2xl:text-sm`,
  base: tw`text-sm 2xl:text-base`,
  lg: tw`text-base 2xl:text-lg`,
  xl: tw`text-lg 2xl:text-xl`,
  '2xl': tw`text-xl 2xl:text-2xl`,
  '3xl': tw`text-2xl 2xl:text-3xl`,
}
interface HeadingProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  children: ReactNode
  size: keyof typeof sizes
}

const Heading = ({ tag, children, size, ...props }: HeadingProps) => (
  <Tag tag={tag} css={[tw`font-medium`, sizes[size]]} {...props}>
    {children}
  </Tag>
)

export { Heading }
