import { ReactNode } from 'react'
import tw from 'twin.macro'

interface LabelProps {
  children: ReactNode
}
const Label = ({ children }: LabelProps) => <Container htmlFor="todo">{children}</Container>

const Container = tw.label`text-sm font-medium`

export { Label }
