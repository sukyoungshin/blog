import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { GlobalStyle } from '@styles/globals';
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from '@styles/theme';
import { ReactElement, ReactNode } from 'react';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

const client = new ApolloClient({
  uri: 'http://localhost:4000',
  cache: new InMemoryCache(),
});

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout || ((page) => page);

  return (
    <ApolloProvider client={client}>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>{getLayout(<Component {...pageProps} />)}</ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
