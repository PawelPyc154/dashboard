import { useEffect, useState } from 'react'
import { useDebouncedCallback } from 'use-debounce'
import { useQueryParam } from 'use-query-params'

const useQueryParamDebounce = <T>(name: string, defaultValue: T, time = 400) => {
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
      setState(query || defaultValue)
    }
  }, [query])

  return [state, setState] as const
}

export { useQueryParamDebounce }
