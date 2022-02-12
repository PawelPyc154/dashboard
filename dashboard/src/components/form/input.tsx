import tw from 'twin.macro'
import { DetailedHTMLProps, forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { Label } from './label'
import 'styled-components/macro'

const colors = { white: tw`bg-white`, gray: tw`bg-white` }

type InputBaseProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputProps = InputBaseProps & {
  label?: string
  icon?: ReactNode
  className?: string
  color?: keyof typeof colors
}
const Input = forwardRef<HTMLInputElement, InputProps>(({ label, className, icon, color = 'gray', ...props }, ref) => (
  <Container className={className}>
    {label && <Label>{label}</Label>}
    <Wrapper>
      <input
        css={[
          tw`bg-white rounded-md px-3 shadow-sm h-10 flex border border-gray-300 items-center w-full pb-px`,
          colors[color],
          !!icon && tw`pl-10`,
        ]}
        ref={ref}
        {...props}
      />
      <IconWrapper>{icon}</IconWrapper>
    </Wrapper>
  </Container>
))

const Container = tw.div`text-sm w-full`
const Wrapper = tw.div`relative`
const IconWrapper = tw.label`absolute text-xl h-10 px-3 flex justify-center items-center top-0 left-0`

export { Input }
