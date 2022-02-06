import { ReactNode } from 'react'
import { Cell } from 'react-table'
import tw from 'twin.macro'
import { Heading } from '../heading'

interface MobilePropertyWrapperProps {
  children: ReactNode
  actionsCell: Cell<any>
  heading: Cell<any>
}
const MobilePropertyWrapper = ({ heading, children, actionsCell }: MobilePropertyWrapperProps) => (
  <Container>
    <Heading tag="h2" size="lg" tw="py-2 px-3">
      {heading.render('Cell')}
    </Heading>
    <Wrapper>{children}</Wrapper>
    <ActionsWrapper>{actionsCell.render('Cell')}</ActionsWrapper>
  </Container>
)

const Container = tw.div`grid divide-y divide-gray-200`
const Wrapper = tw.div`grid grid-cols-2 gap-1 py-2 px-3`
const ActionsWrapper = tw.div`flex justify-center py-2`

export { MobilePropertyWrapper }
