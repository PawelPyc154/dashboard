/* eslint-disable react/jsx-no-undef */
import { useMemo } from 'react'
import 'twin.macro'
import 'styled-components/macro'

import { Link } from 'react-router-dom'
import { MdHelpOutline } from 'react-icons/md'

import { Columns, TablePage } from '../../components/common/table/tablePage'
import { Button } from '../../components/form/button'
import { ButtonsWrapper } from '../../components/form/buttonsWrapper'
import { MobileTableKeyValueRender } from '../../components/common/table/mobileTableKeyValueRender'
import { MobilePropertyWrapper } from '../../components/common/table/mobilePropertyWrapper'
import { AddEditMyJobOfferDialog } from './components/addEditMyJobOffer/addEditMyJobOfferDialog'
import {
  MyJobOffertsConfirmPublishDialogs,
  MyJobOffertsConfirmPromoteDialogs,
  MyJobOffertsConfirmDuplicateDialogs,
  MyJobOffertsConfirmCloseDialogs,
  MyJobOffertsConfirmRemoveDialogs,
} from './components/myJobOffertsConfirmDialogs'
import { IconButton } from '../../components/form/iconButton'
import { OfferStatus, OfferStatuses } from './components/offerStatus'
import { Tooltip } from '../../components/common/tooltip'
import { InputSearch } from '../../components/form/inputSearch'
import { MyJobOffertsFilters } from './components/myJobOffertsFilters'

interface Data {
  id: number
  status: OfferStatuses
  publishedAt: string
  expirationAt: string
  title: string
  views: number
  applications: number
}
const data: Data[] = [
  {
    id: 1,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'active',
  },
  {
    id: 2,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'draft',
  },
  {
    id: 3,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'closed',
  },
  {
    id: 4,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'banned',
  },
  {
    id: 5,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'active',
  },
  {
    id: 6,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'active',
  },
  {
    id: 7,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'active',
  },
  {
    id: 8,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'active',
  },
  {
    id: 9,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'active',
  },
  {
    id: 10,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'active',
  },
  {
    id: 11,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'active',
  },
  {
    id: 12,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'active',
  },
  {
    id: 13,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'active',
  },
  {
    id: 14,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'active',
  },
  {
    id: 15,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'active',
  },
  {
    id: 16,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'active',
  },
  {
    id: 17,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'active',
  },
  {
    id: 222,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'active',
  },
]

const MyJobOfferts = () => {
  const columns: Columns<{
    id: number
    status: OfferStatuses
    publishedAt: string
    expirationAt: string
    title: string
    views: number
    applications: number
  }> = useMemo(
    () => [
      {
        accessor: 'title',
        Header: 'Title',
        justify: 'start',

        Cell: ({ value }) => <div tw="font-semibold">{value}</div>,
      },
      {
        accessor: 'applications',
        Header: 'Applications',
        width: 75,
        Cell: ({ value, row }) => (
          <Link to={`/applications/${row.original.id}`} tw="underline">
            {value}
          </Link>
        ),
      },
      {
        accessor: 'views',
        Header: 'Views',
        width: 75,
      },
      {
        accessor: 'status',
        Header: 'Status',
        width: 75,
        Cell: ({ value }) => <OfferStatus status={value} />,
      },
      {
        accessor: 'publishedAt',
        Header: 'Published at',
        width: 75,
      },
      {
        accessor: 'expirationAt',
        Header: 'Expiration at',
        width: 80,
      },
      {
        accessor: 'id',
        justify: 'end',
        width: 274,
        disableSortBy: true,
        isFixedWidth: true,
        Cell: () => <ButtonsWrapper>test</ButtonsWrapper>,
      },
    ],
    [],
  )

  return (
    <TablePage
      pageTitle="My job offers"
      columns={columns}
      data={data}
      totalItems={data.length}
      isLoading={false}
      actionsTopBar={
        <>
          <AddEditMyJobOfferDialog />
          <InputSearch tw="hidden xl:block" />
          <MyJobOffertsFilters />
          <Tooltip content="Help">
            <IconButton>
              <MdHelpOutline size="22" />
            </IconButton>
          </Tooltip>
        </>
      }
      actionsOnSelectedElements={({ selectedElements, ids }) => {
        console.log(ids)
        return (
          <ButtonsWrapper tw="hidden xl:flex gap-2">
            <MyJobOffertsConfirmPublishDialogs ids={ids} trigger={<Button disabled={!selectedElements.length}>Publish</Button>} />
            <MyJobOffertsConfirmPromoteDialogs ids={ids} trigger={<Button disabled={!selectedElements.length}>Promote</Button>} />
            <MyJobOffertsConfirmDuplicateDialogs ids={ids} trigger={<Button disabled={!selectedElements.length}>Duplicate</Button>} />
            <MyJobOffertsConfirmCloseDialogs ids={ids} trigger={<Button disabled={!selectedElements.length}>Close</Button>} />
            <MyJobOffertsConfirmRemoveDialogs ids={ids} trigger={<Button disabled={!selectedElements.length}>Delete</Button>} />
          </ButtonsWrapper>
        )
      }}
      mobileBody={({ title, status, publishedAt, expirationAt, applications, views, id }) => (
        <MobilePropertyWrapper actionsCell={id} heading={title}>
          <MobileTableKeyValueRender cell={status} />
          <MobileTableKeyValueRender cell={applications} />
          <MobileTableKeyValueRender cell={views} />
          <MobileTableKeyValueRender cell={expirationAt} />
          <MobileTableKeyValueRender cell={publishedAt} />
        </MobilePropertyWrapper>
      )}
    />
  )
}

export default MyJobOfferts
