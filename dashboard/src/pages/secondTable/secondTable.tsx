import { ReactNode } from 'react'
import { MdEdit, MdHelpOutline, MdOutlineDelete, MdOutlineVerified, MdPublishedWithChanges } from 'react-icons/md'
import tw from 'twin.macro'
import { CgCloseO } from 'react-icons/cg'
import { HiOutlineDuplicate } from 'react-icons/hi'
import { Heading } from '../../components/common/heading'
import { Tooltip } from '../../components/common/tooltip'
import { ButtonsWrapper } from '../../components/form/buttonsWrapper'
import { IconButton } from '../../components/form/iconButton'
import { InputSearch } from '../../components/form/inputSearch'
import { AddEditMyJobOfferDialog } from '../applications/components/addEditMyJobOffer/addEditMyJobOfferDialog'
import {
  MyJobOffertsConfirmPublishDialogs,
  MyJobOffertsConfirmPromoteDialogs,
  MyJobOffertsConfirmDuplicateDialogs,
  MyJobOffertsConfirmCloseDialogs,
  MyJobOffertsConfirmRemoveDialogs,
} from '../applications/components/myJobOffertsConfirmDialogs'
import { MyJobOffertsFilters } from '../myJobOfferts/components/myJobOffertsFilters'
import { OfferStatuses } from '../myJobOfferts/components/offerStatus'
import 'styled-components/macro'

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
  //   {
  //     id: 11,
  //     title: 'Lorem ipsum',
  //     views: 123321,
  //     applications: 55,
  //     publishedAt: '01.12.2021',
  //     expirationAt: '01.12.2021',
  //     status: 'active',
  //   },
  //   {
  //     id: 12,
  //     title: 'Lorem ipsum',
  //     views: 123321,
  //     applications: 55,
  //     publishedAt: '01.12.2021',
  //     expirationAt: '01.12.2021',
  //     status: 'active',
  //   },
  //   {
  //     id: 13,
  //     title: 'Lorem ipsum',
  //     views: 123321,
  //     applications: 55,
  //     publishedAt: '01.12.2021',
  //     expirationAt: '01.12.2021',
  //     status: 'active',
  //   },
  //   {
  //     id: 14,
  //     title: 'Lorem ipsum',
  //     views: 123321,
  //     applications: 55,
  //     publishedAt: '01.12.2021',
  //     expirationAt: '01.12.2021',
  //     status: 'active',
  //   },
  //   {
  //     id: 15,
  //     title: 'Lorem ipsum',
  //     views: 123321,
  //     applications: 55,
  //     publishedAt: '01.12.2021',
  //     expirationAt: '01.12.2021',
  //     status: 'active',
  //   },
  //   {
  //     id: 16,
  //     title: 'Lorem ipsum',
  //     views: 123321,
  //     applications: 55,
  //     publishedAt: '01.12.2021',
  //     expirationAt: '01.12.2021',
  //     status: 'active',
  //   },
  //   {
  //     id: 17,
  //     title: 'Lorem ipsum',
  //     views: 123321,
  //     applications: 55,
  //     publishedAt: '01.12.2021',
  //     expirationAt: '01.12.2021',
  //     status: 'active',
  //   },
  //   {
  //     id: 222,
  //     title: 'Lorem ipsum',
  //     views: 123321,
  //     applications: 55,
  //     publishedAt: '01.12.2021',
  //     expirationAt: '01.12.2021',
  //     status: 'active',
  //   },
]

const SecondTable = () => (
  <main tw="grid gap-2">
    <PageHeader
      title="TestPage"
      totalItems={10}
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
    />

    <MobileListWrapper>
      {data.map(({ applications, expirationAt, publishedAt, status, title, id, views }) => (
        <MobilePropertyWrapper title={title} actions={<Actions id={id} />}>
          <MobileTableKeyValueRender name="status" value={status} />
          <MobileTableKeyValueRender name="applications" value={applications} />
          <MobileTableKeyValueRender name="views" value={views} />
          <MobileTableKeyValueRender name="publishedAt" value={publishedAt} />
          <MobileTableKeyValueRender name="expirationAt" value={expirationAt} />
        </MobilePropertyWrapper>
      ))}
    </MobileListWrapper>
  </main>
)

export default SecondTable

// const Container = tw.main`grid gap-2 content-start grid-rows-[max-content minmax(calc(100vh - 168px), 1fr) max-content] sm:grid-rows-[max-content minmax(calc(100vh - 176px), 1fr) max-content] xl:grid-rows-[max-content calc(100vh - 128px) max-content]`
const Header = tw.div`flex justify-between relative items-center`
// const TableFooter = tw.div`h-10 flex justify-end xl:justify-between`
// const TableWrapper = tw.div`grid content-start relative`
// const TableHeader = styled.div(({ hasScroll }: { hasScroll: boolean }) => [
//   tw`hidden xl:flex h-8  text-xs 2xl:text-sm`,
//   hasScroll && tw`pr-1.5`,
// ])
// const ListContainer = tw.div`xl:(h-[calc(100vh - 168px)] overflow-auto rounded-sm)`
// const ListWrapper = tw.div`shadow-sm content-start grid gap-3 lg:gap-4 xl:(gap-0 divide-y divide-gray-100)`
// const ListItem = tw.div`bg-white rounded-md xl:rounded-none hover:bg-gray-300`
// const Row = tw.div`items-center px-1`
// const ListItemRow = tw(Row)`py-2 !hidden xl:!flex`
const MobileListWrapper = tw.div`grid gap-4`
// const CellStyled = tw.div`px-2 flex`

interface PageHeaderProps {
  title: string
  totalItems: number
  actionsTopBar: ReactNode
}
const PageHeader = ({ title, totalItems, actionsTopBar }: PageHeaderProps) => (
  <Header>
    <Heading tag="h1" size="2xl">
      {title}
      <span tw="text-xs ml-1 2xl:(text-sm ml-2)">{`(${totalItems})`}</span>
    </Heading>
    <ButtonsWrapper>{actionsTopBar}</ButtonsWrapper>
  </Header>
)

export { PageHeader }

interface MobilePropertyWrapperProps {
  children: ReactNode
  title: string
  actions: ReactNode
}
const MobilePropertyWrapper = ({ actions, children, title }: MobilePropertyWrapperProps) => (
  <Container2>
    <Heading tag="h2" size="lg" tw="py-2 px-3">
      {title}
    </Heading>
    <Wrapper>{children}</Wrapper>
    <ActionsWrapper>{actions}</ActionsWrapper>
  </Container2>
)

const Container2 = tw.div`grid divide-y divide-gray-200 bg-white rounded-md`
const Wrapper = tw.div`grid grid-cols-2 gap-1 py-2 px-3`
const ActionsWrapper = tw.div`flex justify-center py-2`

export { MobilePropertyWrapper }

interface ActionsProps {
  id: number
}
const Actions = ({ id }: ActionsProps) => (
  <ButtonsWrapper>
    <MyJobOffertsConfirmPublishDialogs
      ids={[id]}
      trigger={
        <Tooltip content="Publish">
          <IconButton color="gray" size="md">
            <MdPublishedWithChanges size="22" />
          </IconButton>
        </Tooltip>
      }
    />
    <MyJobOffertsConfirmPromoteDialogs
      ids={[id]}
      trigger={
        <Tooltip content="Promote">
          <IconButton color="gray" size="md">
            <MdOutlineVerified size="22" />
          </IconButton>
        </Tooltip>
      }
    />
    <MyJobOffertsConfirmDuplicateDialogs
      ids={[id]}
      trigger={
        <Tooltip content="Duplicate">
          <IconButton color="gray" size="md">
            <HiOutlineDuplicate size="22" />
          </IconButton>
        </Tooltip>
      }
    />
    <Tooltip content="Edit">
      <IconButton color="gray" size="md">
        <MdEdit size="22" />
      </IconButton>
    </Tooltip>
    <MyJobOffertsConfirmCloseDialogs
      ids={[id]}
      trigger={
        <Tooltip content="Close">
          <IconButton color="gray" size="md">
            <CgCloseO size="21" />
          </IconButton>
        </Tooltip>
      }
    />
    <MyJobOffertsConfirmRemoveDialogs
      ids={[id]}
      trigger={
        <Tooltip content="Remove">
          <IconButton color="gray" size="md">
            <MdOutlineDelete size="22" />
          </IconButton>
        </Tooltip>
      }
    />
  </ButtonsWrapper>
)

export { Actions }

interface MobileTableKeyValueRenderProps {
  name: string
  value: ReactNode
}
const MobileTableKeyValueRender = ({ name, value }: MobileTableKeyValueRenderProps) => (
  <div>
    <PropertyNameWrapper>
      {name}
      <span>:</span>
    </PropertyNameWrapper>
    <div>{value}</div>
  </div>
)

const PropertyNameWrapper = tw.div`opacity-50 text-xs`
