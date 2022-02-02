/* eslint-disable react/jsx-no-undef */
import { useMemo } from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { MdDelete } from 'react-icons/md'
import tw from 'twin.macro'
import { useConfirmDialog } from '../components/common/dialog/dialogs/confirmDialog'
import { Columns, TablePage } from '../components/common/table/tablePage'
import { Button } from '../components/form/button'
import { IconButton } from '../components/form/iconButton'

const data = [
  { id: 1, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 2, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 3, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 4, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 5, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 6, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 7, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 8, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 9, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 10, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 11, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 12, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 13, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 14, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 15, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 16, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 17, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 222, title: 'Lorem ipsum', views: 123321, applications: 55 },
]

const MyJobOfferts = () => {
  const { openConfirmDialog } = useConfirmDialog()

  const columns: Columns<{
    id: number
    title: string
    views: number
    applications: number
  }> = useMemo(
    () => [
      {
        Header: 'Title',
        accessor: 'title',
        justify: 'start',
        Cell: ({ value }) => <div tw="font-semibold">{value}</div>,
      },
      { Header: 'Views', accessor: 'views', tw: tw`hidden lg:flex` },
      { Header: 'Applications', accessor: 'applications', tw: tw`hidden lg:flex` },
      {
        accessor: 'id',
        justify: 'end',
        width: 50,
        isFixedWidth: true,
        Cell: ({ value }) => (
          <>
            <IconButton color="gray">
              <BiDotsVerticalRounded size="25" />
            </IconButton>
            <IconButton color="gray" onClick={() => openConfirmDialog(() => console.log(value))}>
              <MdDelete size="25" />
            </IconButton>
          </>
        ),
      },
    ],
    [],
  )

  return (
    <TablePage
      columns={columns}
      data={data}
      actionsOnSelectedElements={(selectedElements) => (
        <>
          <div tw="hidden lg:flex gap-4">
            <Button disabled={!selectedElements.length}>Promote</Button>
            <Button disabled={!selectedElements.length}>Duplicate</Button>
            <Button
              disabled={!selectedElements.length}
              onClick={() => openConfirmDialog(() => console.log(selectedElements))}
            >
              Delete
            </Button>
          </div>
          {!!selectedElements.length && (
            <IconButton tw="lg:hidden">
              <BiDotsVerticalRounded size="25" />
            </IconButton>
          )}
        </>
      )}
    />
  )
}

export { MyJobOfferts }
