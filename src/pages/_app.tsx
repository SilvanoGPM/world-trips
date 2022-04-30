import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import { GlobalStyle } from 'styles/global';
import { lightTheme } from 'styles/themes/light';

function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={lightTheme}>
      <Head>
        <title>Wolrd Trips</title>

        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="theme-color" content="#FFFFFF" />
        <meta
          name="description"
          content="Projeto para mostrar viagens pelo mundo."
        />
      </Head>

      <GlobalStyle />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
