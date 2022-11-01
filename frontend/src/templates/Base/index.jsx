import { useEffect, useState } from 'react'

import Footer from 'components/Footer'
import Header from 'components/Header'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'

import * as S from './styles'

const Base = ({ children, seo, header, footer }) => {
  const [canonical, setCanonical] = useState(null)
  const router = useRouter()

  useEffect(() => {
    const base = process.env.NEXT_PUBLIC_PORTO_URL
    const oldUrl = seo?.canonical || base
    let newUrl = base
    if (oldUrl)
      if (
        router.asPath == '/' ||
        router.route == '/tag/[...slug]' ||
        router.asPath.indexOf('/c/') != -1
      ) {
        newUrl = base + router.asPath
      } else {
        newUrl = oldUrl.replace('https://admin.blog.portoseguro.com.br', base)
      }
    setCanonical(newUrl)
  }, [seo])

  return (
    <S.Wrapper>
      {seo && (
        <NextSeo
          title={seo.title || ''}
          description={seo.description || ''}
          {...(canonical && { canonical: canonical })}
          {...(seo.noindex && { noindex: seo.noindex })}
        />
      )}

      {header && <Header {...header} />}

      {children}

      {footer && header && <Footer {...footer} {...header} />}
    </S.Wrapper>
  )
}

export default Base
