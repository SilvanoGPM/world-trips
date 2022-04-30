import { AppProps } from 'next/app';
import Head from 'next/head';

import { GlobalStyle } from 'styles/global';

function App({ Component, pageProps }: AppProps) {
  return (
    <>
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
    </>
  );
}

export default App;
