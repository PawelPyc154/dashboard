import { useMemo } from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'
import tw from 'twin.macro'
import { Columns } from '../components/common/table/tablePage'
import { IconButton } from '../components/form/iconButton'

const data = [
  { id: 1, title: 'Lorem ipsum', views: 123321, applications: 55 },
  { id: 2, title: 'Lorem ipsum', views: 123321, applications: 55 },
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

const TablePage = () => {
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
        Cell: () => (
          <IconButton color="gray">
            <BiDotsVerticalRounded size="25" />
          </IconButton>
        ),
      },
    ],
    [],
  )
  console.log(columns, data)

  return <div>tablePage</div>
}

export { TablePage }
