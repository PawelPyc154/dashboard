/* eslint-disable react/jsx-no-undef */
import { useMemo } from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'

import 'twin.macro'
import 'styled-components/macro'

import { useConfirmDialog } from '../components/common/dialog/dialogs/confirmDialog'
import { Columns, TablePage } from '../components/common/table/tablePage'
import { Button } from '../components/form/button'
import { ButtonsWrapper } from '../components/form/buttonsWrapper'
import { IconButton } from '../components/form/iconButton'
import { MobileTableKeyValueRender } from '../components/common/table/mobileTableKeyValueRender'

const data = [
  {
    id: 1,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationDate: '01.12.2021',
    status: 'Published',
  },
  {
    id: 2,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationDate: '01.12.2021',
    status: 'Published',
  },
  {
    id: 3,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationDate: '01.12.2021',
    status: 'Published',
  },
  {
    id: 4,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationDate: '01.12.2021',
    status: 'Published',
  },
  {
    id: 5,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationDate: '01.12.2021',
    status: 'Published',
  },
  {
    id: 6,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationDate: '01.12.2021',
    status: 'Published',
  },
  {
    id: 7,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationDate: '01.12.2021',
    status: 'Published',
  },
  {
    id: 8,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationDate: '01.12.2021',
    status: 'Published',
  },
  {
    id: 9,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationDate: '01.12.2021',
    status: 'Published',
  },
  {
    id: 10,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationDate: '01.12.2021',
    status: 'Published',
  },
  {
    id: 11,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationDate: '01.12.2021',
    status: 'Published',
  },
  {
    id: 12,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationDate: '01.12.2021',
    status: 'Published',
  },
  {
    id: 13,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationDate: '01.12.2021',
    status: 'Published',
  },
  {
    id: 14,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationDate: '01.12.2021',
    status: 'Published',
  },
  {
    id: 15,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationDate: '01.12.2021',
    status: 'Published',
  },
  {
    id: 16,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationDate: '01.12.2021',
    status: 'Published',
  },
  {
    id: 17,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationDate: '01.12.2021',
    status: 'Published',
  },
  {
    id: 222,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationDate: '01.12.2021',
    status: 'Published',
  },
]

const MyJobOfferts = () => {
  const { openConfirmDialog } = useConfirmDialog()

  const columns: Columns<{
    id: number
    status: string
    publishedAt: string
    expirationDate: string
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
      { Header: 'Applications', accessor: 'applications', width: 70 },
      { Header: 'Views', accessor: 'views', width: 70 },
      { Header: 'Status', accessor: 'status', width: 70 },
      { Header: 'Published at', accessor: 'publishedAt', width: 70 },
      { Header: 'Expiration date', accessor: 'expirationDate', width: 50 },
      {
        accessor: 'id',
        justify: 'end',
        width: 50,
        isFixedWidth: true,
        Cell: () => (
          <ButtonsWrapper>
            <IconButton color="gray">
              <BiDotsVerticalRounded size="25" />
            </IconButton>
          </ButtonsWrapper>
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
          <ButtonsWrapper tw="hidden lg:flex gap-2">
            <Button disabled={!selectedElements.length}>Promote</Button>
            <Button disabled={!selectedElements.length}>Duplicate</Button>
            <Button
              disabled={!selectedElements.length}
              onClick={() => openConfirmDialog(() => console.log(selectedElements))}
            >
              Delete
            </Button>
          </ButtonsWrapper>
          {!!selectedElements.length && (
            <IconButton tw="lg:hidden">
              <BiDotsVerticalRounded size="25" />
            </IconButton>
          )}
        </>
      )}
      mobileBody={({ title, status, publishedAt, expirationDate, applications, views, id }) => (
        <div tw="grid grid-cols-2 gap-4 relative">
          <div tw="absolute right-0 top-0">{id.render('Cell')}</div>
          <MobileTableKeyValueRender cell={title} />
          <MobileTableKeyValueRender cell={status} />
          <MobileTableKeyValueRender cell={applications} />
          <MobileTableKeyValueRender cell={views} />
          <MobileTableKeyValueRender cell={expirationDate} />
          <MobileTableKeyValueRender cell={publishedAt} />
        </div>
      )}
    />
  )
}

export { MyJobOfferts }
