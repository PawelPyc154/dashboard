import { ReactNode } from 'react'
import tw from 'twin.macro'
import { Tag } from './tag'

const sizes = {
  base: tw`text-base`,
  '3xl': tw`text-2xl xl:text-3xl`,
}
interface HeadingProps {
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5'
  children: ReactNode
  size: keyof typeof sizes
}

const Heading = ({ tag, children, size }: HeadingProps) => (
  <Tag tag={tag} css={[sizes[size]]}>
    {children}
  </Tag>
)

export { Heading }
