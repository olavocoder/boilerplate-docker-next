import { useEffect, useState } from 'react'

import { customData, dataLayerPush } from 'components/Analytics'
import Button from 'components/Button'
import { Container } from 'components/Container'
import RelatedPost from 'components/RelatedPost'
import SelfHelp from 'components/SelfHelp'
import Image from 'next/image'
import Base from 'templates/Base'
import { ArrowLeftLong } from 'utils/icons'

import * as S from './styles'

export default function ErrorTemplate({
  seo,
  header,
  footer,
  props,
  contrast,
  fontsize,
  mostRead,
  frequentDoubts
}) {
  const [openSearch, setOpenSearch] = useState(false)
  const [headerData, UpdateHeader] = useState(header)
  const image = props.acf.image
  const frequent_doubts = frequentDoubts !== undefined ? frequentDoubts : null

  useEffect(() => {
    UpdateHeader({ ...header, searchOpen: openSearch })
    setOpenSearch(false)
  }, [header, openSearch])

  header = {
    ...header,
    contrast: contrast,
    fontsize: fontsize
  }

  useEffect(() => {
    customData('pagina-erro', 'error-404', 'porto', 'blog')
    dataLayerPush('pageview')
  }, [])

  return (
    <Base seo={seo} header={headerData} footer={footer} search={openSearch}>
      <S.Wrapper>
        <Container>
          {image && (
            <S.WrapperImage>
              <Image src={image.sizes.large} layout="fill"></Image>
            </S.WrapperImage>
          )}

          <S.Title className="title-4">
            Não foi possível encontrar a página solicitada
          </S.Title>

          <S.WrapperButtons>
            <Button
              onClick={() => setOpenSearch(true)}
              size={'medium'}
              variant={'secondary'}
            >
              Fazer nova busca
            </Button>

            <Button
              href="/"
              route={true}
              size={'medium'}
              icon={<ArrowLeftLong />}
            >
              Voltar a página inicial
            </Button>
          </S.WrapperButtons>

          {mostRead.length > 0 && (
            <RelatedPost
              props={mostRead}
              title={'Artigos mais procurados'}
            ></RelatedPost>
          )}
        </Container>

        {frequent_doubts && <SelfHelp props={frequent_doubts} />}
      </S.Wrapper>
    </Base>
  )
}
