import { ReactNode } from 'react'
import { Cell } from 'react-table'
import tw from 'twin.macro'

interface MobilePropertyWrapperProps {
  children: ReactNode
  actionsCell: Cell<{
    id: number
  }>
}
const MobilePropertyWrapper = ({ children, actionsCell }: MobilePropertyWrapperProps) => (
  <Container>
    <ActionsWrapper>{actionsCell.render('Cell')}</ActionsWrapper>
    {children}
  </Container>
)

const Container = tw.div`grid grid-cols-2 gap-4 relative`
const ActionsWrapper = tw.div`absolute right-0 top-0`

export { MobilePropertyWrapper }
