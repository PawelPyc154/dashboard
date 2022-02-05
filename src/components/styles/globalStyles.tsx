import { createGlobalStyle } from 'styled-components'

import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    ...tw`antialiased`,
    background: theme`colors.gray.200`,
  },
  '::-webkit-scrollbar': {
    width: '6px',
  },
  '::-webkit-scrollbar-track': {
    background: '#f1f1f1',
  },
  '::-webkit-scrollbar-thumb': {
    background: theme`colors.green.600`,
  },
  '::-webkit-scrollbar-thumb:hover': {
    background: theme`colors.green.700`,
  },
})

const CustomStylesCss = createGlobalStyle`
body {
  
  font-size: 13px;
  @media screen and (min-width: 1024px) {
    font-size:14px;
  } 
  @media screen and (min-width:1280px) {
    font-size:15px;
  } 
  @media screen and (min-width: 1636px) {
    font-size:16px;
  }
  #popper[data-popper-reference-hidden] {
  visibility: hidden;
  pointer-events: none;
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
