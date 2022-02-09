import { Cell } from 'react-table'
import tw from 'twin.macro'
import 'styled-components/macro'

interface MobileTableKeyValueRenderProps {
  cell: Cell<any>
}
const MobileTableKeyValueRender = ({ cell, ...props }: MobileTableKeyValueRenderProps) => (
  <div {...props}>
    <PropertyNameWrapper>
      {cell.render('Header')}
      <span>:</span>
    </PropertyNameWrapper>
    <div css={[cell.column.tw]}>{cell.render('Cell')}</div>
  </div>
)

const PropertyNameWrapper = tw.div`opacity-50 text-xs`

export { MobileTableKeyValueRender }
