import tw from 'twin.macro'
import { MdSearch } from 'react-icons/md'
import { FaSlidersH } from 'react-icons/fa'
import { useMemo } from 'react'
import { Input } from '../../form/input'
import { Heading } from '../heading'
import { Pagination } from '../pagination'
import { Columns, Table } from './table'
import { IconButton } from '../../form/iconButton'
import { Button } from '../../form/button'

const TablePage = () => {
  const columns = useMemo(
    (): Columns<{
      id: number
      title: string
      views: number
      applications: number
    }> => [
      { Header: 'Title', accessor: 'title' },
      { Header: 'Views', accessor: 'views' },
      { Header: 'Applications', accessor: 'applications' },
      {
        Header: () => <div tw="bg-blue-500">Actions</div>,
        accessor: 'id',
        justify: 'center',
        Cell: () => <div tw="bg-blue-800">test</div>,
      },
    ],
    [],
  )

  return (
    <Container>
      <Header>
        <Heading tag="h1" size="3xl">
          My job offerts
          <span tw="text-sm ml-4">(323)</span>
        </Heading>
        <InputsWrapper>
          <Button>Add</Button>
          <Input icon={<MdSearch />} placeholder="Search..." />
          <IconButton>
            <FaSlidersH />
          </IconButton>
        </InputsWrapper>
      </Header>

      <Table
        data={[
          { id: 1, title: 'test', views: 123321, applications: 55 },
          { id: 1, title: 'test', views: 123321, applications: 55 },
          // { id: 1, title: 'test', views: 123321, applications: 55 },
          // { id: 1, title: 'test', views: 123321, applications: 55 },
          // { id: 1, title: 'test', views: 123321, applications: 55 },
          // { id: 1, title: 'test', views: 123321, applications: 55 },
          // { id: 1, title: 'test', views: 123321, applications: 55 },
          // { id: 1, title: 'test', views: 123321, applications: 55 },
          // { id: 1, title: 'test', views: 123321, applications: 55 },
          // { id: 1, title: 'test', views: 123321, applications: 55 },
          // { id: 1, title: 'test', views: 123321, applications: 55 },
          // { id: 1, title: 'test', views: 123321, applications: 55 },
          // { id: 1, title: 'test', views: 123321, applications: 55 },
          { id: 1, title: 'test', views: 123321, applications: 55 },
          { id: 1, title: 'test', views: 123321, applications: 55 },
          { id: 1, title: 'test', views: 123321, applications: 55 },
          { id: 1, title: 'test', views: 123321, applications: 55 },
          { id: 1, title: 'test', views: 123321, applications: 55 },
        ]}
        columns={columns}
      />
      <BottomBar>
        <div tw="flex gap-4">
          <Button>Delete</Button>

          <Button>Add</Button>

          <Button>Add</Button>
        </div>
        <Pagination />
      </BottomBar>
    </Container>
  )
}

export { TablePage }

const Container = tw.main`grid gap-6 grid-rows-[max-content 1fr max-content]`
const Header = tw.div`flex justify-between relative`
const InputsWrapper = tw.div`flex gap-4`
const BottomBar = tw.div`flex justify-between`
