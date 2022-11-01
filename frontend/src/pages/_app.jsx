import { useEffect, useState } from 'react'

import CookiesConsent from 'components/CookiesConsent'
import HandTalk from 'components/HandTalk'
import LoadScroll from 'components/LoadScroll'
import { DefaultSeo } from 'next-seo'
import Head from 'next/head'
import { useRouter } from 'next/router'
import { ThemeProvider } from 'styled-components'
import GlobalStyles from 'styles/global'
import theme from 'styles/theme'
import { SetTheme } from 'styles/utils/colors'
import GlobalFonts from 'styles/utils/fonts'

import SEO from '../../next-seo.config'

function App({ Component, pageProps }) {
  const router = useRouter()
  const [contrast, setContrast] = useState(0)
  const [fontSize, setFontSize] = useState(0)
  const postsAcf = pageProps !== undefined ? pageProps : null
  const postUrl =
    postsAcf.props !== undefined
      ? postsAcf.props[0]?.url?.replace('admin.', '').replace('/wordpress', '')
      : ''

  const categoryUrl =
    postsAcf.category !== undefined
      ? postsAcf.category[0]?.link
          ?.replace('admin.', '')
          .replace('/wordpress', '')
      : ''

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
        <meta name="application-name" content="Porto Seguro Blog" />
        <meta name="description" content="Porto Seguro Blog" />
        <meta name="keywords" content="blog" />
        {router.asPath == '/' && (
          //home
          <>
            {/*twiter*/}
            <meta
              name="twitter:url"
              content="https://blog.portoseguro.com.br/"
            />
            <meta name="twitter:title" content={postsAcf.seo.title} />
            <meta
              name="twitter:description"
              content={postsAcf?.seo?.description || 'Blog da Porto Seguro'}
            />
            <meta
              name="twitter:image"
              content={postsAcf.header.logo.sizes.thumbnail}
            />
            {/*facebook*/}
            <meta property="og:url" content="https://blog.portoseguro.com.br" />
            <meta
              property="og:image"
              content={postsAcf.header.logo.sizes.thumbnail}
            />
          </>
        )}
        {postsAcf.path && (
          //posts
          <>
            {/*twiter*/}
            <meta name="twitter:url" content={postUrl} />
            <meta name="twitter:title" content={postsAcf.props[0].title} />
            <meta
              name="twitter:description"
              content={
                postsAcf?.tempSeo?.description || 'Artigo do Blog da Porto'
              }
            />
            <meta name="twitter:image" content={postsAcf.props[0].image} />
            {/*facebook*/}
            <meta property="fb:app_id" content="452006143360505" />
            <meta
              property="og:url"
              content={postUrl.substring(0, postUrl.length - 1)}
            />
            <meta property="og:image" content={postsAcf.props[0].image} />
          </>
        )}
        {postsAcf.posts && (
          //category and subcategorys
          <>
            {/*twiter*/}
            <meta name="twitter:url" content={categoryUrl} />
            <meta
              name="twitter:image"
              content={postsAcf.header.logo.sizes.thumbnail}
            />
            {/*facebook*/}
            <meta property="og:url" content={categoryUrl} />
            <meta
              property="og:image"
              content={postsAcf.header.logo.sizes.thumbnail}
            />
          </>
        )}
        <meta name="twitter:card" value="summary" />
        <meta property="og:image:width" content="600" />
        <meta property="og:image:height" content="600" />
      </Head>
      <Component {...pageProps} />
      <SetTheme activeTheme={contrast} />
      <CookiesConsent />
      <GlobalStyles />
      <DefaultSeo {...SEO} />
      <LoadScroll
        items={
          <>
            <GlobalFonts />
            <HandTalk />
          </>
        }
      />
    </ThemeProvider>
  )
}

export default App
