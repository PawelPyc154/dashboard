import { createGlobalStyle } from 'styled-components'

import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    ...tw`antialiased text-sm`,
    background: theme`colors.gray.200`,
  },
  '::-webkit-scrollbar': {
    width: '6px',
  },
  '::-webkit-scrollbar-track': {
    background: theme`colors.gray.200`,
  },
  '::-webkit-scrollbar-thumb': {
    background: theme`colors.green.600`,
  },
  '::-webkit-scrollbar-thumb:hover': {
    background: theme`colors.green.700`,
  },
})

const GlobalStyles = () => (
  <>
    <BaseStyles />

    <CustomStyles />
  </>
)

export { GlobalStyles }
