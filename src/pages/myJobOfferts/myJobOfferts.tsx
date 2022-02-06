/* eslint-disable react/jsx-no-undef */
import { useMemo } from 'react'
import 'twin.macro'
import 'styled-components/macro'

import { Link } from 'react-router-dom'
import { MdEdit, MdOutlineDelete, MdOutlineVerified, MdPublishedWithChanges } from 'react-icons/md'
import { HiOutlineDuplicate } from 'react-icons/hi'
import { CgCloseO } from 'react-icons/cg'
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

const data = [
  {
    id: 1,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'Published',
  },
  {
    id: 2,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'Published',
  },
  {
    id: 3,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'Published',
  },
  {
    id: 4,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'Published',
  },
  {
    id: 5,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'Published',
  },
  {
    id: 6,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'Published',
  },
  {
    id: 7,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'Published',
  },
  {
    id: 8,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'Published',
  },
  {
    id: 9,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'Published',
  },
  {
    id: 10,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'Published',
  },
  {
    id: 11,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'Published',
  },
  {
    id: 12,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'Published',
  },
  {
    id: 13,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'Published',
  },
  {
    id: 14,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'Published',
  },
  {
    id: 15,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'Published',
  },
  {
    id: 16,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'Published',
  },
  {
    id: 17,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'Published',
  },
  {
    id: 222,
    title: 'Lorem ipsum',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'Published',
  },
]

const MyJobOfferts = () => {
  const columns: Columns<{
    id: number
    status: string
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
          <Link to={`/applications/${row.original.id}`} tw="">
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
        Cell: () => (
          <ButtonsWrapper>
            <IconButton color="gray" size="md">
              <MdPublishedWithChanges size="22" />
            </IconButton>
            <IconButton color="gray" size="md">
              <MdOutlineVerified size="22" />
            </IconButton>
            <IconButton color="gray" size="md">
              <HiOutlineDuplicate size="22" />
            </IconButton>
            <IconButton color="gray" size="md">
              <MdEdit size="22" />
            </IconButton>
            <IconButton color="gray" size="md">
              <CgCloseO size="21" />
            </IconButton>
            <IconButton color="gray" size="md">
              <MdOutlineDelete size="22" />
            </IconButton>
          </ButtonsWrapper>
          // <Menu
          //   openButton={
          //     <IconButton color="gray" size="md">
          //       <BiDotsVerticalRounded size="22" />
          //     </IconButton>
          //   }
          // >
          //   {({ onCloseMenu }) => (
          //     <>
          //       <MyJobOffertsConfirmPublishDialogs
          //         ids={[value]}
          //         openButton={<MenuItem>Publish</MenuItem>}
          //         onSuccess={onCloseMenu}
          //       />
          //       <MyJobOffertsConfirmPromoteDialogs
          //         ids={[value]}
          //         openButton={<MenuItem>Promote</MenuItem>}
          //         onSuccess={onCloseMenu}
          //       />
          //       <MyJobOffertsConfirmDuplicateDialogs
          //         ids={[value]}
          //         openButton={<MenuItem>Duplicate</MenuItem>}
          //         onSuccess={onCloseMenu}
          //       />
          //       <MyJobOffertsConfirmCloseDialogs
          //         ids={[value]}
          //         openButton={<MenuItem>Close</MenuItem>}
          //         onSuccess={onCloseMenu}
          //       />
          //       <MyJobOffertsConfirmRemoveDialogs
          //         ids={[value]}
          //         openButton={<MenuItem>Delete</MenuItem>}
          //         onSuccess={onCloseMenu}
          //       />
          //     </>
          //   )}
          // </Menu>
        ),
      },
    ],
    [],
  )

  return (
    <TablePage
      columns={columns}
      data={data}
      actionsTopBar={<AddEditMyJobOfferDialog />}
      actionsOnSelectedElements={({ selectedElements, ids }) => (
        <ButtonsWrapper tw="hidden xl:flex gap-2">
          <MyJobOffertsConfirmPublishDialogs
            ids={ids}
            openButton={<Button disabled={!selectedElements.length}>Publish</Button>}
          />
          <MyJobOffertsConfirmPromoteDialogs
            ids={ids}
            openButton={<Button disabled={!selectedElements.length}>Promote</Button>}
          />
          <MyJobOffertsConfirmDuplicateDialogs
            ids={ids}
            openButton={<Button disabled={!selectedElements.length}>Duplicate</Button>}
          />
          <MyJobOffertsConfirmCloseDialogs
            ids={ids}
            openButton={<Button disabled={!selectedElements.length}>Close</Button>}
          />
          <MyJobOffertsConfirmRemoveDialogs
            ids={ids}
            openButton={<Button disabled={!selectedElements.length}>Delete</Button>}
          />
        </ButtonsWrapper>
      )}
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

export { MyJobOfferts }
