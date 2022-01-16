import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    WebkitTapHighlightColor: theme`colors.green.600`,
    ...tw`antialiased`,
    background: theme`colors.gray.200`,
  },
  '::-webkit-scrollbar': {
    width: '6px',
  },

  /* Track */
  '::-webkit-scrollbar-track': {
    background: '#f1f1f1',
  },

  /* Handle */
  '::-webkit-scrollbar-thumb': {
    background: theme`colors.green.600`,
  },

  /* Handle on hover */
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
