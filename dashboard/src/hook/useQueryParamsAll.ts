import { useLocation, useNavigate } from 'react-router-dom'
import queryString from 'query-string'

const useQueryParamsAll = () => {
  const { search, pathname } = useLocation()
  const navigate = useNavigate()
  const queryParams = queryString.parse(search, {
    parseBooleans: true,
    parseNumbers: true,
    arrayFormat: 'index',
  })

  const setQueryParams = (value: object) => {
    navigate({
      pathname,
      search: queryString.stringify(value, { skipNull: true, skipEmptyString: true, arrayFormat: 'index' }),
    })
  }
  return { queryParams, setQueryParams }
}

export { useQueryParamsAll }
