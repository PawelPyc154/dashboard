import { Column, useFlexLayout, useTable } from 'react-table'
import tw, { styled } from 'twin.macro'
import { useElementSize } from '../../../hook/useElementSize'

export type Columns<TData extends object = {}> = Array<Column<TData> & { justify?: 'center' }>
interface TableProps<TData extends object = {}> {
  columns: Columns<TData>
  data: TData[]
}
const Table = <TData extends object = {}>({ columns, data }: TableProps<TData>) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable(
    {
      columns,
      data,
    },
    useFlexLayout,
  )

  const { ref, hasScroll } = useElementSize<HTMLDivElement>()

  return (
    <Container {...getTableProps()}>
      <Header hasScroll={hasScroll}>
        {headerGroups.map((headerGroup) => (
          <Row {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <Cell {...column.getHeaderProps()}>{column.render('Header')}</Cell>
            ))}
          </Row>
        ))}
      </Header>

      <ListWrapper {...getTableBodyProps()} ref={ref}>
        {rows.map((row) => {
          prepareRow(row)
          return (
            <ListItemRow {...row.getRowProps()}>
              {row.cells.map((cell) => (
                <Cell {...cell.getCellProps()}>{cell.render('Cell')}</Cell>
              ))}
            </ListItemRow>
          )
        })}
      </ListWrapper>
    </Container>
  )
}

export { Table }

const Container = tw.div`grid grid-rows-[max-content 1fr] h-[calc(100vh - 184px)]`
const Header = styled.div(({ hasScroll }: { hasScroll: boolean }) => [
  tw`flex h-8 text-sm`,
  hasScroll && tw`pr-1.5`,
])
const ListWrapper = tw.div`bg-white rounded-md shadow-sm divide-y divide-gray-100 overflow-auto`
const Row = tw.div`flex items-center px-2`
const ListItemRow = tw(Row)`py-2`
const Cell = tw.div`px-2`
