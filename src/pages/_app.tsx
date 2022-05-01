import Head from 'next/head';
import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';
import NextNProgress from 'nextjs-progressbar';

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

        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.8.0/dist/leaflet.css"
          integrity="sha512-hoalWLoI8r4UszCkZ5kL8vayOGVae1oxXe/2A4AO6J9+580uKHDO3JdHb7NzwwzK5xr/Fs0W40kiNHxM9vyTtQ=="
          crossOrigin=""
        />

        <meta name="theme-color" content="#FFFFFF" />
        <meta
          name="description"
          content="Projeto para mostrar viagens pelo mundo."
        />
      </Head>

      <GlobalStyle />

      <NextNProgress
        color="#e20e8d"
        startPosition={0.3}
        stopDelayMs={200}
        height={3}
      />

      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default App;
