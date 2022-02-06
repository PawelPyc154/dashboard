import tw from 'twin.macro'
import { DetailedHTMLProps, forwardRef, InputHTMLAttributes, ReactNode } from 'react'
import { Label } from './label'

type InputBaseProps = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type InputProps = InputBaseProps & {
  label?: string
  icon?: ReactNode
}
const Input = forwardRef<HTMLInputElement, InputProps>(({ label, icon, ...props }, ref) => (
  <Container>
    {label && <Label>{label}</Label>}
    <Wrapper>
      <input
        css={[
          tw`bg-white rounded-md border-gray-200 border px-4 h-10 flex items-center w-full pb-px`,
          !!icon && tw`pl-10`,
        ]}
        ref={ref}
        {...props}
      />
      <IconWrapper>{icon}</IconWrapper>
    </Wrapper>
  </Container>
))

const Container = tw.label`text-sm w-full`
const Wrapper = tw.label`relative`
const IconWrapper = tw.label`absolute text-xl h-10 px-3 flex justify-center items-center top-0 left-0`

export { Input }