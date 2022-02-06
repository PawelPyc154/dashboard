import { useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { useQueryParam } from 'use-query-params'

const useQueryParamDebounce = <T>(name: string, time = 400) => {
  const [query, setQuery] = useQueryParam<T>(name)
  const [state, setState] = useState(() => query)

  const debounced = useDebouncedCallback((value) => {
    setQuery(value)
  }, time)

  useEffect(() => {
    if (query !== state) {
      debounced(state)
    }
  }, [debounced, state])

  useEffect(() => {
    if (query !== state) {
      setState(query)
    }
  }, [query])

  return [state, setState]
}

export { useQueryParamDebounce }
