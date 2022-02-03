import tw, { styled, TwStyle } from 'twin.macro'
import { MdSearch } from 'react-icons/md'
import { FaSlidersH } from 'react-icons/fa'
import { GoPlus } from 'react-icons/go'
import { useTable, useFlexLayout, useRowSelect, Column, Row as RowType } from 'react-table'
import { ReactNode } from 'react'
import { Input } from '../../form/input'
import { Heading } from '../heading'
import { Pagination } from '../pagination'
import { IconButton } from '../../form/iconButton'
import { useElementSize } from '../../../hook/useElementSize'
import { IndeterminateCheckbox } from './indeterminateCheckbox'
import { Button } from '../../form/button'
import { ButtonsWrapper } from '../../form/buttonsWrapper'

const justifyVariants = {
  start: tw`justify-start`,
  center: tw`justify-center`,
  end: tw`justify-end`,
}
type JustifyVariants = keyof typeof justifyVariants

type Data = { id: number }

export type Columns<TData extends Data = Data> = Array<
  Column<TData> & {
    justify?: JustifyVariants
    isFixedWidth?: boolean
    tw?: TwStyle
  }
>

interface TableProps<TData extends Data = Data> {
  columns: Columns<TData>
  data: TData[]
  // eslint-disable-next-line no-unused-vars
  actionsOnSelectedElements?: (selectedFlatRows: RowType<TData>[]) => ReactNode
}
const TablePage = <TData extends Data = Data>({ columns, data, actionsOnSelectedElements }: TableProps<TData>) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, selectedFlatRows } = useTable(
    {
      columns,
      data,
      autoResetSelectedRows: false,
      getRowId: (row) => String(row.id),
    },

    useFlexLayout,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((cols) => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />,
          width: 40,
          justify: 'start',
          isFixedWidth: true,
          tw: tw`hidden lg:block`,
          Cell: ({ row }: { row: RowType<{}> }) => <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />,
        },
        ...cols,
      ])
    },
  )

  const { ref, hasScroll } = useElementSize<HTMLDivElement>()

  return (
    <Container>
      <Header>
        <Heading tag="h1" size="2xl">
          My job offerts
          <span tw="text-sm ml-2">(323)</span>
        </Heading>
        <ButtonsWrapper>
          <Button tw="hidden lg:block">Add</Button>
          <div tw="hidden lg:block">
            <Input icon={<MdSearch />} placeholder="Search..." />
          </div>
          <IconButton tw="lg:hidden" color="green">
            <GoPlus size="20" />
          </IconButton>
          <IconButton>
            <FaSlidersH />
          </IconButton>
        </ButtonsWrapper>
      </Header>

      <TableWrapper {...getTableProps()}>
        <TableHeader hasScroll={hasScroll}>
          {headerGroups.map((headerGroup) => (
            <Row {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <Cell
                  {...column.getHeaderProps()}
                  isFixedWidth={!!column.isFixedWidth}
                  justify={column.justify}
                  css={[column.tw]}
                >
                  {column.render('Header')}
                </Cell>
              ))}
            </Row>
          ))}
        </TableHeader>

        <ListWrapper {...getTableBodyProps()} ref={ref}>
          {rows.map((row) => {
            prepareRow(row)

            return (
              <ListItemRow {...row.getRowProps()}>
                {row.cells.map((cell) => (
                  <Cell
                    {...cell.getCellProps()}
                    isFixedWidth={!!cell.column.isFixedWidth}
                    justify={cell.column.justify}
                    css={[cell.column.tw]}
                  >
                    {cell.render('Cell')}
                  </Cell>
                ))}
              </ListItemRow>
            )
          })}
        </ListWrapper>
      </TableWrapper>

      <TableFooter>
        {actionsOnSelectedElements?.(selectedFlatRows)}

        <Pagination />
      </TableFooter>
    </Container>
  )
}

const Container = tw.main`grid gap-4 grid-rows-[max-content 1fr max-content]`
const Header = tw.div`flex justify-between relative items-center`
const TableFooter = tw.div`h-11 flex justify-between relative`

const TableWrapper = tw.div`grid gap-1 grid-rows-[max-content 1fr] lg:h-[calc(100vh - 172px)]`
const TableHeader = styled.div(({ hasScroll }: { hasScroll: boolean }) => [
  tw`hidden lg:flex h-8 text-sm`,
  hasScroll && tw`pr-1.5`,
])
const ListWrapper = tw.div`rounded-md shadow-sm space-y-4 lg:(space-y-0 divide-y divide-gray-100 overflow-auto)`
const Row = tw.div`flex items-center px-1`
const ListItemRow = tw(Row)`py-2 bg-white rounded-md lg:rounded-none`

const Cell = styled.div(
  ({ isFixedWidth, justify = 'center' }: { isFixedWidth: boolean; justify?: JustifyVariants }) => [
    tw`px-2 flex`,
    isFixedWidth && tw`!flex-grow-0 !flex-shrink-0`,
    justifyVariants[justify],
  ],
)

export { TablePage }
