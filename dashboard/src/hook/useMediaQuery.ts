import { useState, useEffect } from 'react'

type KeyScreenValues = 'isScreenMobile' | 'isScreenSm' | 'isScreenMd' | 'isScreenLg' | 'isScreenXl' | 'isScreen2xl'

type ScreenValuesType = Record<KeyScreenValues, boolean>

const queries = [
  ['isScreenMobile', '(max-width: 640px)'],
  ['isScreenSm', '(min-width: 640px)'],
  ['isScreenMd', '(min-width: 768px)'],
  ['isScreenLg', '(min-width: 1024px)'],
  ['isScreenXl', '(min-width: 1280px)'],
  ['isScreen2xl', '(min-width: 1536px)'],
]
const getValue = () => Object.fromEntries(mediaQueryLists.map((item) => [item[0], item[1].matches])) as ScreenValuesType

const mediaQueryLists: [string, MediaQueryList][] = queries.map((q) => [q[0], window.matchMedia(q[1])])

const useMediaQuery = () => {
  const [value, setValue] = useState(getValue)

  useEffect(() => {
    const handler = () => setValue(getValue)
    mediaQueryLists.forEach((mql) => mql[1].addEventListener('change', handler))
    return () => mediaQueryLists.forEach((mql) => mql[1].removeEventListener('change', handler))
  }, [])

  return value
}

export { useMediaQuery }
