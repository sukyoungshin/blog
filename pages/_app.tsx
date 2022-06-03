import '@styles/globals.css'
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from '@styles/theme'
import type { AppProps } from 'next/app'
import React from 'react'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
