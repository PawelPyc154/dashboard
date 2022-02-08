/* eslint-disable react/jsx-no-undef */
import { useMemo } from 'react'
import 'twin.macro'
import 'styled-components/macro'
import { MdCheck, MdClose, MdOutlineDelete, MdOutlineStar, MdOutlineStarBorder } from 'react-icons/md'
import { Columns, TablePage } from '../../components/common/table/tablePage'
import { Button } from '../../components/form/button'
import { ButtonsWrapper } from '../../components/form/buttonsWrapper'
import { MobileTableKeyValueRender } from '../../components/common/table/mobileTableKeyValueRender'
import { MobilePropertyWrapper } from '../../components/common/table/mobilePropertyWrapper'
import { AddEditMyJobOfferDialog } from './components/addEditMyJobOffer/addEditMyJobOfferDialog'
import {
  MyJobOffertsConfirmPublishDialogs,
  MyJobOffertsConfirmPromoteDialogs,
  MyJobOffertsConfirmRemoveDialogs,
} from './components/myJobOffertsConfirmDialogs'
import { IconButton } from '../../components/form/iconButton'
import { Tooltip } from '../../components/common/tooltip'

const data = [
  {
    id: 1,
    fullName: 'Paweł Pyc',
    views: 123321,
    applications: 55,
    publishedAt: '01.12.2021',
    expirationAt: '01.12.2021',
    status: 'Published',
  },
]

const Applications = () => {
  const columns: Columns<{
    id: number
    status: string
    publishedAt: string
    expirationAt: string
    fullName: string
    views: number
    applications: number
  }> = useMemo(
    () => [
      {
        accessor: 'fullName',
        Header: 'Full name',
        justify: 'start',

        Cell: ({ value }) => <div tw="font-semibold">{value}</div>,
      },
      {
        accessor: 'applications',
        Header: 'Applications',
        width: 75,
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
        width: 148,
        disableSortBy: true,
        isFixedWidth: true,
        Cell: () => (
          <ButtonsWrapper tw="gap-3 xl:gap-2">
            <Tooltip content="Accept">
              <IconButton color="gray" size="md">
                <MdCheck size="22" />
              </IconButton>
            </Tooltip>
            <Tooltip content="Reject">
              <IconButton color="gray" size="md">
                <MdClose size="22" />
              </IconButton>
            </Tooltip>

            {true ? (
              <Tooltip content="Not marked">
                <IconButton color="gray" size="md">
                  <MdOutlineStarBorder size="22" />
                </IconButton>
              </Tooltip>
            ) : (
              <Tooltip content="Mark">
                <IconButton color="gray" size="md">
                  <MdOutlineStar />
                </IconButton>
              </Tooltip>
            )}
            <Tooltip content="Remove">
              <IconButton color="gray" size="md">
                <MdOutlineDelete size="22" />
              </IconButton>
            </Tooltip>
          </ButtonsWrapper>
        ),
      },
    ],
    [],
  )

  return (
    <TablePage
      pageTitle="Applicatios - Programista React"
      data={data}
      columns={columns}
      totalItems={data.length}
      isLoading={false}
      actionsTopBar={<AddEditMyJobOfferDialog />}
      actionsOnSelectedElements={({ selectedElements, ids }) => (
        <ButtonsWrapper tw="hidden xl:flex gap-2">
          <MyJobOffertsConfirmPublishDialogs ids={ids} trigger={<Button disabled={!selectedElements.length}>Accept</Button>} />
          <MyJobOffertsConfirmPromoteDialogs ids={ids} trigger={<Button disabled={!selectedElements.length}>Reject</Button>} />
          <MyJobOffertsConfirmRemoveDialogs ids={ids} trigger={<Button disabled={!selectedElements.length}>Delete</Button>} />
        </ButtonsWrapper>
      )}
      mobileBody={({ fullName, status, publishedAt, expirationAt, applications, views, id }) => (
        <MobilePropertyWrapper actionsCell={id} heading={fullName}>
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
export default Applications
