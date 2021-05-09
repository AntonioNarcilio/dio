/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import defaultTheme from '../styles/themes/default';
import GlobalStyles from '../styles/global';

export default function App({ Component, pageProps }: any) {
  return (
    <>
      <ThemeProvider theme={defaultTheme}>
        <Head>
          <title>Netflix: Clone</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <GlobalStyles />
          <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
