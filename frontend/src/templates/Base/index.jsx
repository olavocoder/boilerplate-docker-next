import { useEffect, useState } from 'react'

import Footer from 'components/Footer'
import Header from 'components/Header'
import { UseSeoTreated } from 'hooks/useSeoTreated'
import { NextSeo } from 'next-seo'

import * as S from './styles'

const Base = ({ children, seo, header, footer }) => {
  const [seoTreated, setSeoTreated] = useState([])

  useEffect(() => {
    const tempSeo = UseSeoTreated({ seo })
    setSeoTreated(tempSeo)
  }, [seo])

  return (
    <S.Wrapper>
      {seoTreated && (
        <NextSeo
          title={seoTreated.title || process.env.NEXT_PUBLIC_WORDPRESS_API_URL}
          description={
            seoTreated.description || process.env.NEXT_PUBLIC_WORDPRESS_API_URL
          }
          {...(seoTreated.canonical && { canonical: seoTreated.canonical })}
          {...(seoTreated.noindex && { noindex: seoTreated.noindex })}
        />
      )}

      {header && <Header {...header} />}

      {children}

      {footer && header && <Footer {...footer} {...header} />}
    </S.Wrapper>
  )
}

export default Base
