import tw, { styled, TwStyle } from 'twin.macro'
import { MdSearch } from 'react-icons/md'
import { FaSlidersH } from 'react-icons/fa'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { GoPlus } from 'react-icons/go'
import { useTable, useFlexLayout, useRowSelect, Column, Row as RowType } from 'react-table'
import { Input } from '../../form/input'
import { Heading } from '../heading'
import { Pagination } from '../pagination'
import { IconButton } from '../../form/iconButton'
import { useElementSize } from '../../../hook/useElementSize'
import { IndeterminateCheckbox } from './indeterminateCheckbox'
import { Button } from '../../form/button'

const justifyVariants = {
  start: tw`justify-start`,
  center: tw`justify-center`,
  end: tw`justify-end`,
}
type JustifyVariants = keyof typeof justifyVariants

export type Columns<TData extends object = {}> = Array<
  Column<TData> & {
    justify?: JustifyVariants
    isFixedWidth?: boolean
    tw?: TwStyle
  }
>

interface TableProps<TData extends object = {}> {
  columns: Columns<TData>
  data: TData[]
}
const TablePage = <TData extends object = {}>({ columns, data }: TableProps<TData>) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, selectedFlatRows } =
    useTable(
      {
        columns,
        data,
        autoResetSelectedRows: false,
      },

      useFlexLayout,
      useRowSelect,
      (hooks) => {
        hooks.visibleColumns.push((cols) => [
          {
            id: 'selection',
            Header: ({ getToggleAllRowsSelectedProps }) => (
              <div>
                <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />
              </div>
            ),
            width: 40,
            justify: 'start',
            isFixedWidth: true,
            Cell: ({ row }: { row: RowType<{}> }) => (
              <div>
                <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />
              </div>
            ),
          },
          ...cols,
        ])
      },
    )

  const { ref, hasScroll } = useElementSize<HTMLDivElement>()

  return (
    <Container>
      <Header>
        <Heading tag="h1" size="3xl">
          My job offerts
          <span tw="text-sm ml-2">(323)</span>
        </Heading>
        <InputsWrapper>
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
        </InputsWrapper>
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

      <BottomBar>
        <div tw="hidden lg:flex gap-4">
          <Button disabled={!selectedFlatRows.length}>Promote</Button>
          <Button disabled={!selectedFlatRows.length}>Duplicate</Button>
          <Button disabled={!selectedFlatRows.length}>Delete</Button>
        </div>
        {!!selectedFlatRows.length && (
          <IconButton tw="lg:hidden">
            <BiDotsVerticalRounded size="25" />
          </IconButton>
        )}
        <Pagination />
      </BottomBar>
    </Container>
  )
}

export { TablePage }

const Container = tw.main`grid gap-2 lg:gap-4 grid-rows-[max-content 1fr max-content]`
const Header = tw.div`flex justify-between relative items-center`
const InputsWrapper = tw.div`flex gap-4`
const BottomBar = tw.div`h-11 flex justify-between relative`

const TableWrapper = tw.div`grid gap-1 grid-rows-[max-content 1fr] h-[calc(100vh - 144px)] lg:h-[calc(100vh - 172px)]`
const TableHeader = styled.div(({ hasScroll }: { hasScroll: boolean }) => [
  tw`flex h-8 text-sm`,
  hasScroll && tw`pr-1.5`,
])
const ListWrapper = tw.div`bg-white rounded-md shadow-sm divide-y divide-gray-100 overflow-auto`
const Row = tw.div`flex items-center px-2`
const ListItemRow = tw(Row)`py-2`

const Cell = styled.div(
  ({ isFixedWidth, justify = 'center' }: { isFixedWidth: boolean; justify?: JustifyVariants }) => [
    tw`px-2 flex`,
    isFixedWidth && tw`!flex-grow-0 !flex-shrink-0`,
    justifyVariants[justify],
  ],
)
