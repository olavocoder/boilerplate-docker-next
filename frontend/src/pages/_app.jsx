import { useEffect, useState } from 'react'

import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { SetTheme } from 'styles/utils/colors'

import SEO from '../../next-seo.config'

function App({ Component, pageProps }) {
  // Configurações de acessibilidade (fontes e cores)
  const [contrast, setContrast] = useState(0)
  const [fontSize, setFontSize] = useState(0)

  useEffect(() => {
    localStorage.getItem('@contrast') != null
      ? setContrast(localStorage.getItem('@contrast'))
      : setContrast(0)
  }, [contrast])

  useEffect(() => {
    setFontSize(localStorage.getItem('@fontSize'))
    if (fontSize == 1) {
      document.querySelector('html').classList.add('font-large')
    } else {
      document.querySelector('html').classList.remove('font-large')
    }
  }, [fontSize])

  pageProps = {
    ...pageProps,
    contrast: setContrast,
    fontsize: setFontSize
  }

  return (
    <ThemeProvider theme={theme}>
      <Head>
        <link rel="icon" href="/img/favicon.ico" />
        <link rel="shortcut icon" href="/img/icon-512.png" />
        <link rel="apple-touch-icon" href="/img/icon-512.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="application-name" content="Blog" />
        <meta name="description" content="Blog" />
        <meta name="keywords" content="keywords necessárias para o projeto" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} />
      <SetTheme activeTheme={contrast} />
      <GlobalStyles />
      <DefaultSeo {...SEO} />
    </ThemeProvider>
  )
}

export default App
