import { useMemo } from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import { Columns, TablePage } from '../components/common/table/tablePage'
import { IconButton } from '../components/form/iconButton'

const data = [
  { id: 1, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 1, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 1, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 1, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 1, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 1, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 1, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 1, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 1, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 1, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 1, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 1, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 1, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 1, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 1, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 1, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 1, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 1, title: 'Lorem ipsum', views: 123321, applications: 55 },
]

const MyJobOfferts = () => {
  const columns = useMemo(
    (): Columns<{
      id: number
      title: string
      views: number
      applications: number
    }> => [
      {
        Header: 'Title',
        accessor: 'title',
        justify: 'start',
        Cell: ({ value }) => <div tw="font-semibold">{value}</div>,
      },
      { Header: 'Views', accessor: 'views' },
      { Header: 'Applications', accessor: 'applications' },
      {
        accessor: 'id',
        justify: 'end',
        width: 50,
        isFixedWidth: true,
        Cell: () => (
          <IconButton color="gray">
            <BiDotsVerticalRounded size="25" />
          </IconButton>
        ),
      },
    ],
    [],
  )
  return <TablePage columns={columns} data={data} />
}

export { MyJobOfferts }
