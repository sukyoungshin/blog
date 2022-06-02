import '@styles/globals.css'
import { ThemeProvider } from 'styled-components'
import { lightModeTheme } from '@styles/theme'
import type { AppProps } from 'next/app'
import React from 'react'

// FIXME: ThemeProvider 제대로 된거 맞는지 체크
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightModeTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
