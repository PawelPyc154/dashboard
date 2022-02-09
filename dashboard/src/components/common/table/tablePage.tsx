import tw, { styled, TwStyle } from 'twin.macro'
import { useTable, useFlexLayout, useRowSelect, Column, Row as RowType, Cell, IdType, useSortBy } from 'react-table'
import { ReactNode, useEffect } from 'react'
import { useQueryParams, StringParam } from 'use-query-params'
import { MdOutlineArrowDropUp, MdOutlineArrowDropDown } from 'react-icons/md'
import { Pagination } from '../pagination'
import { useElementSize } from '../../../hook/useElementSize'
import { IndeterminateCheckbox } from './indeterminateCheckbox'
import { ButtonsWrapper } from '../../form/buttonsWrapper'
import { Heading } from '../heading'
import 'styled-components/macro'
import { Spinner } from '../spinner'
import { useMediaQuery } from '../../../hook/useMediaQuery'

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
  data: TData[]
  columns: Columns<TData>
  pageTitle: string
  totalItems: number | undefined
  isLoading: boolean
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
  data,
  columns,
  pageTitle,
  totalItems,
  isLoading,
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
          tw: tw`hidden xl:block`,
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
  const { isScreenXl } = useMediaQuery()
  return (
    <Container>
      <Header>
        <Heading tag="h1" size="2xl">
          {pageTitle}
          <span tw="text-xs ml-1 2xl:(text-sm ml-2)">{`(${totalItems})`}</span>
        </Heading>
        <ButtonsWrapper>{actionsTopBar}</ButtonsWrapper>
      </Header>
      <TableWrapper {...getTableProps()}>
        {isScreenXl && (
          <TableHeader hasScroll={hasScroll} css={[isLoading && tw`opacity-30 pointer-events-none`]}>
            {headerGroups.map((headerGroup) => (
              <Row {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => {
                  const isSorted = sortBy === column.id
                  const isSortedDesc = sortDirection === 'descending'
                  return (
                    <CellStyled
                      {...column.getHeaderProps(column.getSortByToggleProps({ title: undefined }))}
                      css={[
                        column.tw,
                        tw`select-none`,
                        !!column.isFixedWidth && tw`!flex-grow-0 !flex-shrink-0`,
                        justifyVariants[column.justify || 'center'],
                      ]}
                    >
                      {isSorted &&
                        column.justify === 'end' &&
                        (isSortedDesc ? (
                          <MdOutlineArrowDropUp tw="text-xl flex-shrink-0" />
                        ) : (
                          <MdOutlineArrowDropDown tw="text-xl flex-shrink-0" />
                        ))}
                      <span
                        tw="mx-5 whitespace-nowrap"
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
                        (isSortedDesc ? (
                          <MdOutlineArrowDropUp tw="text-xl flex-shrink-0" />
                        ) : (
                          <MdOutlineArrowDropDown tw="text-xl flex-shrink-0" />
                        ))}
                    </CellStyled>
                  )
                })}
              </Row>
            ))}
          </TableHeader>
        )}
        <div tw="relative">
          {isLoading && <Spinner size="base" color="green" overlay="white" />}
          <ListContainer ref={ref}>
            <ListWrapper {...getTableBodyProps()}>
              {rows.map((row) => {
                prepareRow(row)

                return (
                  <ListItem>
                    {isScreenXl && (
                      <ListItemRow {...row.getRowProps()}>
                        {row.cells.map((cell) => (
                          <CellStyled
                            {...cell.getCellProps()}
                            css={[
                              cell.column.tw,
                              !!cell.column.isFixedWidth && tw`!flex-grow-0 !flex-shrink-0`,
                              justifyVariants[cell.column.justify || 'center'],
                            ]}
                          >
                            {cell.render('Cell')}
                          </CellStyled>
                        ))}
                      </ListItemRow>
                    )}
                    {!isScreenXl && (
                      <MobileListWrapper>
                        {mobileBody(Object.fromEntries(row.cells.map((item) => [[item.column.id], item])))}
                      </MobileListWrapper>
                    )}
                  </ListItem>
                )
              })}
            </ListWrapper>
          </ListContainer>
        </div>
      </TableWrapper>

      <TableFooter css={[isLoading && tw`opacity-30 pointer-events-none`]}>
        {actionsOnSelectedElements?.({
          selectedElements: selectedFlatRows,
          ids: selectedFlatRows.map(({ original }) => original.id),
        })}

        <Pagination />
      </TableFooter>
    </Container>
  )
}

const Container = tw.main`grid gap-2 content-start grid-rows-[max-content minmax(calc(100vh - 168px), 1fr) max-content] sm:grid-rows-[max-content minmax(calc(100vh - 176px), 1fr) max-content] xl:grid-rows-[max-content calc(100vh - 128px) max-content]`
const Header = tw.div`flex justify-between relative items-center`
const TableFooter = tw.div`h-10 flex justify-end xl:justify-between`
const TableWrapper = tw.div`grid content-start relative`
const TableHeader = styled.div(({ hasScroll }: { hasScroll: boolean }) => [
  tw`hidden xl:flex h-8  text-xs 2xl:text-sm`,
  hasScroll && tw`pr-1.5`,
])
const ListContainer = tw.div`xl:(h-[calc(100vh - 168px)] overflow-auto rounded-sm)`
const ListWrapper = tw.div`shadow-sm content-start grid gap-3 lg:gap-4 xl:(gap-0 divide-y divide-gray-100)`
const ListItem = tw.div`bg-white rounded-md xl:rounded-none hover:bg-gray-300`
const Row = tw.div`items-center px-1`
const ListItemRow = tw(Row)`py-2 !hidden xl:!flex`
const MobileListWrapper = tw.div`xl:hidden`
const CellStyled = tw.div`px-2 flex`
export { TablePage }
