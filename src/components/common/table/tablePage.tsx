import tw, { styled } from 'twin.macro'
import { MdSearch } from 'react-icons/md'
import { FaSlidersH } from 'react-icons/fa'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { useTable, useFlexLayout, useRowSelect, Column, Row as RowType } from 'react-table'
import { Input } from '../../form/input'
import { Heading } from '../heading'
import { Pagination } from '../pagination'
import { IconButton } from '../../form/iconButton'
import { useElementSize } from '../../../hook/useElementSize'
import { IndeterminateCheckbox } from './indeterminateCheckbox'

const justifyVariants = {
  start: tw`justify-start`,
  center: tw`justify-center`,
  end: tw`justify-end`,
}
type JustifyVariants = keyof typeof justifyVariants

export type Columns<TData extends object & { test?: string } = {}> = Array<
  Column<TData> & { justify?: JustifyVariants; isFixedWidth?: boolean }
>

interface TableProps<TData extends object = {}> {
  columns: Columns<TData>
  data: TData[]
}
const TablePage = <TData extends object = {}>({ columns, data }: TableProps<TData>) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,

    // state: { selectedRowIds },
  } = useTable(
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
          <span tw="text-sm ml-2 xl:ml-4">(323)</span>
        </Heading>
        <InputsWrapper>
          {/* <Button>Add</Button> */}

          <div tw="hidden xl:block">
            <Input icon={<MdSearch />} placeholder="Search..." />
          </div>

          <IconButton>
            <FaSlidersH />
          </IconButton>
          <IconButton>
            <BiDotsVerticalRounded size="25" />
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
                  >
                    {cell.render('Cell')}
                  </Cell>
                ))}
              </ListItemRow>
            )
          })}
        </ListWrapper>
      </TableWrapper>
      {/* <div tw="grid gap-2 xl:hidden">
        {data.map(({ id }) => (
          <div tw="bg-white p-4 rounded-md" key={id}>
            test
          </div>
        ))}
      </div> */}
      <BottomBar>
        {/* <div tw="flex gap-4">
          <Button disabled={!selectedRows.length}>Delete</Button>
        </div> */}
        <Pagination />
      </BottomBar>
    </Container>
  )
}

export { TablePage }

const Container = tw.main`grid gap-4   grid-rows-[max-content 1fr max-content]`
const Header = tw.div`flex justify-between relative items-center`
const InputsWrapper = tw.div`flex gap-4`
const BottomBar = tw.div`flex justify-between`

const TableWrapper = tw.div`grid gap-1 grid-rows-[max-content 1fr] h-[calc(100vh - 172px)]`
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
