import tw, { styled, css, theme } from 'twin.macro'
import ReactPaginate from 'react-paginate'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md'
import { useState } from 'react'
import { Select } from '../form/select'
import { ButtonsWrapper } from '../form/buttonsWrapper'

const Pagination = () => {
  const [pageNumber, setPageNumber] = useState(1)
  const pageCount = 5

  return (
    // const handlePageClick = (value: number) => {
    //   console.log(value)
    // }
    <ButtonsWrapper>
      {pageCount > 1 && (
        <ReactPaginateStyled
          breakClassName="hidden"
          // breakLabel="..."
          previousLabel={<MdKeyboardArrowLeft />}
          onPageChange={({ selected }) => setPageNumber(selected)}
          pageRangeDisplayed={pageNumber === 0 || pageCount - 1 === pageNumber ? 3 : 2}
          marginPagesDisplayed={0}
          forcePage={pageNumber}
          previousClassName={pageNumber === 0 ? 'transparent' : ''}
          nextClassName={pageCount - 1 === pageNumber ? 'transparent' : ''}
          pageCount={pageCount}
          nextLabel={<MdKeyboardArrowRight />}
          activeClassName="activePage"
        />
      )}
      <Select tw="hidden sm:flex" />
    </ButtonsWrapper>
  )
}

const ReactPaginateStyled = styled(ReactPaginate)(() => [
  tw`flex divide-x rounded-md select-none overflow-hidden divide-gray-200  all-child:(bg-white hover:bg-gray-100 all-child:(w-10 sm:w-11 h-11 flex items-center justify-center))`,
  css`
    && .activePage {
      background: ${theme('colors.green.600')};
      color: white;
      pointer-events: none;
    }

    && .hidden {
      display: none;
    }
    && .transparent {
      opacity: 0.5;
      pointer-events: none;
    }
  `,
])

export { Pagination }
