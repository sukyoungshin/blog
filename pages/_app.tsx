import type { NextPage } from 'next'
import type { AppProps } from 'next/app'
import { GlobalStyle } from '@styles/globals'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@styles/theme'
import { ReactElement, ReactNode } from 'react'

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page)

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        {getLayout(<Component {...pageProps} />)}
      </ThemeProvider>
    </>
  )
}

export default MyApp
