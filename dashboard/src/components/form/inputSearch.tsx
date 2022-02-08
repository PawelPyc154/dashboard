import { MdSearch } from 'react-icons/md'
import { useQueryParamDebounce } from '../../hook/useQueryParamDebounce'
import { Input } from './input'

interface InputSearchProps {
  className?: string
}
const InputSearch = ({ className }: InputSearchProps) => {
  const [searchPhrase, setSearchPhrase] = useQueryParamDebounce('searchPhrase', '')

  return (
    <Input
      className={className}
      icon={<MdSearch />}
      placeholder="Search..."
      value={searchPhrase}
      onChange={(e) => setSearchPhrase(e.target.value)}
    />
  )
}

export { InputSearch }
