import { MdSearch } from 'react-icons/md'
import { useQueryParamDebounce } from '../../hook/useQueryParamDebounce'
import { Input } from './input'

const InputSearch = () => {
  const [searchPhrase, setSearchPhrase] = useQueryParamDebounce('searchPhrase')

  return (
    <Input
      icon={<MdSearch />}
      placeholder="Search..."
      value={searchPhrase}
      onChange={(e) => setSearchPhrase(e.target.value)}
    />
  )
}

export { InputSearch }
