/* eslint-disable react/jsx-props-no-spreading */
import Head from 'next/head';
import { ThemeProvider } from 'styled-components';

import dracula from '../styles/themes/dracula';
// import light from '../styles/themes/light';
import GlobalStyles, { GlobalContainer } from '../styles/global';

export default function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={dracula}>
        <Head>
          <title>Template</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <GlobalStyles />
        <GlobalContainer>
          <Component {...pageProps} />
        </GlobalContainer>
      </ThemeProvider>
    </>
  );
}
