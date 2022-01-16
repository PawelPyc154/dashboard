import { Column, useFlexLayout, useTable } from 'react-table'
import { css } from 'twin.macro'

interface TableProps<TData extends object = {}> {
  columns: Column<TData>[]
  data: TData[]
}
const Table = <TData extends object = {}>({
  columns,
  data,
}: TableProps<TData>) => {
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,

        data,
      },
      useFlexLayout,
    )

  return (
    <div
      {...getTableProps()}
      tw="grid grid-rows-[max-content 1fr] h-[calc(100vh - 184px)]"
    >
      <div tw="rounded-md px-4 flex h-8 text-sm">
        {headerGroups.map((headerGroup) => (
          <div {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <div {...column.getHeaderProps()}>{column.render('Header')}</div>
            ))}
          </div>
        ))}
      </div>

      <div
        {...getTableBodyProps()}
        tw="bg-white rounded-md shadow-sm px-2 divide-y divide-gray-100 overflow-auto"
      >
        {rows.map((row) => {
          prepareRow(row)
          return (
            <div
              {...row.getRowProps()}
              tw="px-2 flex items-center"
              css={[
                css`
                  min-height: 50px;
                `,
              ]}
            >
              {row.cells.map((cell) => (
                <div {...cell.getCellProps()}>{cell.render('Cell')}</div>
              ))}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export { Table }
