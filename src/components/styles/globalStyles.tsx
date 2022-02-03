import { createGlobalStyle } from 'styled-components'

import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    // WebkitTapHighlightColor: theme`colors.green.600`,
    ...tw`antialiased`,
    // ...css`
    //   @media screen and (max-width: 600px){
    //     font-size:16px,
    //   }
    // `,
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
const CustomStylesCss = createGlobalStyle`
body {
  font-size: 13px;
  @media screen and (min-width: 1024px) {
    font-size:16px;
  }
}`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStylesCss />
    <CustomStyles />
  </>
)

export { GlobalStyles }
