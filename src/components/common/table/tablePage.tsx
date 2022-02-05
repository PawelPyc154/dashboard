import tw, { styled, TwStyle } from 'twin.macro'
import { FaSlidersH } from 'react-icons/fa'
import { useTable, useFlexLayout, useRowSelect, Column, Row as RowType, Cell, IdType, useSortBy } from 'react-table'
import { ReactNode, useEffect } from 'react'
import { useQueryParams, StringParam } from 'use-query-params'
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from 'react-icons/md'
import { Heading } from '../heading'
import { Pagination } from '../pagination'
import { IconButton } from '../../form/iconButton'
import { useElementSize } from '../../../hook/useElementSize'
import { IndeterminateCheckbox } from './indeterminateCheckbox'
import { ButtonsWrapper } from '../../form/buttonsWrapper'
import { InputSearch } from '../../form/inputSearch'

const justifyVariants = {
  start: tw`justify-start`,
  center: tw`justify-center text-center`,
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
  actionsTopBar?: ReactNode
  // eslint-disable-next-line no-unused-vars
  mobileBody: (
    // eslint-disable-next-line no-unused-vars
    original: Record<keyof TData, Cell<TData>>,
  ) => ReactNode
  // eslint-disable-next-line no-unused-vars
  actionsOnSelectedElements?: (options: { selectedElements: RowType<TData>[]; ids: (string | number)[] }) => ReactNode
}
const TablePage = <TData extends Data = Data>({
  columns,
  data,
  actionsOnSelectedElements,
  mobileBody,
  actionsTopBar,
}: TableProps<TData>) => {
  const [{ sortBy, sortDirection }, setQuery] = useQueryParams({
    sortBy: StringParam,
    sortDirection: StringParam,
  })

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow, selectedFlatRows, state } = useTable(
    {
      columns,
      data,
      autoResetSelectedRows: false,
      getRowId: (row) => String(row.id),
      manualSortBy: true,
      initialState: {
        sortBy: [
          {
            id: sortBy as IdType<TData>,
            desc: (sortDirection && sortDirection === 'descending') as boolean | undefined,
          },
        ],
      },
    },

    useFlexLayout,
    useSortBy,
    useRowSelect,
    (hooks) => {
      hooks.visibleColumns.push((cols) => [
        {
          id: 'selection',
          Header: ({ getToggleAllRowsSelectedProps }) => <IndeterminateCheckbox {...getToggleAllRowsSelectedProps()} />,
          width: 40,
          justify: 'center',
          isFixedWidth: true,
          tw: tw`hidden lg:block`,
          Cell: ({ row }: { row: RowType<{}> }) => <IndeterminateCheckbox {...row.getToggleRowSelectedProps()} />,
        },
        ...cols,
      ])
    },
  )

  useEffect(() => {
    const sortId = state.sortBy[0]?.id
    const isDesc = state.sortBy[0]?.desc
    if (sortId !== sortBy || (isDesc && (isDesc ? 'descending' : 'ascending')) !== sortDirection) {
      if (sortId) {
        setQuery({
          sortBy: sortId,
          sortDirection: isDesc ? 'descending' : 'ascending',
        })
      } else {
        setQuery({
          sortBy: undefined,
          sortDirection: undefined,
        })
      }
    }
  }, [state.sortBy, setQuery])

  const { ref, hasScroll } = useElementSize<HTMLDivElement>()

  return (
    <Container>
      <Header>
        <Heading tag="h1" size="2xl">
          My job offerts
          <span tw="text-sm ml-2">(323)</span>
        </Heading>
        <ButtonsWrapper>
          {actionsTopBar}

          <div tw="hidden lg:block">
            <InputSearch />
          </div>
          <IconButton>
            <FaSlidersH size="17" />
          </IconButton>
        </ButtonsWrapper>
      </Header>

      <TableWrapper {...getTableProps()}>
        <TableHeader hasScroll={hasScroll}>
          {headerGroups.map((headerGroup) => (
            <Row {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => {
                const isSorted = sortBy === column.id
                const isSortedDesc = sortDirection === 'descending'
                return (
                  <CellStyled
                    {...column.getHeaderProps(column.getSortByToggleProps({ title: undefined }))}
                    isFixedWidth={!!column.isFixedWidth}
                    justify={column.justify}
                    css={[column.tw, tw`select-none`]}
                  >
                    {isSorted &&
                      column.justify === 'end' &&
                      (isSortedDesc ? <MdOutlineArrowDropUp tw="text-xl" /> : <MdOutlineArrowDropDown tw="text-xl" />)}
                    <span
                      tw="mx-5"
                      css={[
                        column.justify === 'start' && tw`ml-0`,
                        column.justify === 'end' && tw`mr-0`,
                        column.justify === 'end' && isSorted && tw`ml-0`,
                        isSorted && tw`mr-0`,
                        column.disableSortBy && tw`m-0`,
                      ]}
                    >
                      {column.render('Header')}
                    </span>

                    {isSorted &&
                      column.justify !== 'end' &&
                      (isSortedDesc ? <MdOutlineArrowDropUp tw="text-xl" /> : <MdOutlineArrowDropDown tw="text-xl" />)}
                  </CellStyled>
                )
              })}
            </Row>
          ))}
        </TableHeader>

        <ListWrapper {...getTableBodyProps()} ref={ref}>
          {rows.map((row) => {
            prepareRow(row)

            return (
              <ListItem tw="">
                <ListItemRow {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <CellStyled
                      {...cell.getCellProps()}
                      isFixedWidth={!!cell.column.isFixedWidth}
                      justify={cell.column.justify}
                      css={[cell.column.tw]}
                    >
                      {cell.render('Cell')}
                    </CellStyled>
                  ))}
                </ListItemRow>
                <MobileListWrapper>
                  {mobileBody(Object.fromEntries(row.cells.map((item) => [[item.column.id], item])))}
                </MobileListWrapper>
              </ListItem>
            )
          })}
        </ListWrapper>
      </TableWrapper>

      <TableFooter>
        {actionsOnSelectedElements?.({
          selectedElements: selectedFlatRows,
          ids: selectedFlatRows.map(({ original }) => original.id),
        })}

        <Pagination />
      </TableFooter>
    </Container>
  )
}

const Container = tw.main`grid gap-4 grid-rows-[max-content 1fr max-content]`
const Header = tw.div`flex justify-between relative items-center`
const TableFooter = tw.div`h-11 flex justify-end lg:justify-between`
const TableWrapper = tw.div`grid gap-1 grid-rows-[max-content 1fr] lg:h-[calc(100vh - 172px)]`
const TableHeader = styled.div(({ hasScroll }: { hasScroll: boolean }) => [
  tw`hidden lg:flex h-8 text-sm`,
  hasScroll && tw`pr-1.5`,
])
const ListWrapper = tw.div`rounded-md shadow-sm space-y-4 lg:(space-y-0 divide-y divide-gray-100 overflow-auto)`
const ListItem = tw.div`bg-white rounded-md lg:rounded-none`
const Row = tw.div`items-center px-1 `
const ListItemRow = tw(Row)`py-2 !hidden lg:!flex`
const MobileListWrapper = tw.div`px-3 py-3 lg:hidden`
const CellStyled = styled.div(
  ({ isFixedWidth, justify = 'center' }: { isFixedWidth: boolean; justify?: JustifyVariants }) => [
    tw`px-2 flex`,
    isFixedWidth && tw`!flex-grow-0 !flex-shrink-0`,
    justifyVariants[justify],
  ],
)

export { TablePage }
