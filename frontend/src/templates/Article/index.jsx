import { useEffect, useState } from 'react'
import { Row, Col } from 'react-flexa'

import { customData, dataLayerPush } from 'components/Analytics'
const Breadcrumb = dynamic(() => import('components/Breadcrumb'), {
  ssr: false
})
const CardCta = dynamic(() => import('components/CardCta'), {
  ssr: false
})
const CardDownload = dynamic(() => import('components/CardDownload'), {
  ssr: false
})
import Loading from 'components/Loading'
const Newsletter = dynamic(() => import('components/Newsletter'), {
  ssr: false
})
import PostDetails from 'components/PostDetails'
const RelatedPost = dynamic(() => import('components/RelatedPost'), {
  ssr: false
})
const RelatedTopics = dynamic(() => import('components/RelatedTopics'), {
  ssr: false
})
const ShareBar = dynamic(() => import('components/ShareBar'), {
  ssr: false
})
const SideBanner = dynamic(() => import('components/SideBanner'), {
  ssr: false
})
import useCutString from 'hooks/useCutString'
import { useWindowSize } from 'hooks/useWindowSize'
import dynamic from 'next/dynamic'
import { getProductName } from 'services/wordpress'
import { size } from 'styles/utils/devices'
import Base from 'templates/Base'

import * as S from './styles'

export default function ArticleTemplate({
  header,
  footer,
  sideBanner,
  contrast,
  fontsize,
  props,
  category,
  subcategory,
  sideCotations,
  tempSeo,
  filteredPosts,
  newsletter
}) {
  const [tags, setTags] = useState([])
  const [paths, setPaths] = useState([])
  const [loadingTags, setLoadingTags] = useState(true)
  const [side_banner, setSideBanner] = useState(null)
  const [side_cotation, setSideCotation] = useState(null)
  const [seoTreated, setSeoTreated] = useState([])
  const [productId, setProductId] = useState(
    props[0].acf.product_id !== undefined ? props[0].acf.product_id : 0
  )
  const { width } = useWindowSize()
  const isVideo = props[0].type === 'video' ? true : false
  const isPodcast = props[0].type === 'podcast' ? true : false
  const isRich = props[0].type === 'rich' ? true : false
  const postTitle = useCutString(props[0]?.title, 23)

  useEffect(() => {
    setSeoTreated(tempSeo)
  }, [tempSeo])

  useEffect(() => {
    // Obtém os caminhos do Breadcrumb
    const tempPaths = [{ name: 'Página Inicial', link: '/' }]

    if (!isRich) {
      if (category)
        tempPaths.push({ name: category.name, link: `/c/${category.slug}` })

      if (subcategory)
        tempPaths.push({
          name: subcategory.name,
          link: `/c/${subcategory.slug}`
        })
    } else {
      tempPaths.push({ name: 'Conteúdos Exclusivos', link: `materiais-ricos` })

      let obj = props[0]
      if (obj['content-type'][0]) {
        let name = obj['content-type'][0].name
        name = name.substring(0, name.length - 1)
        tempPaths.push({ name, link: `materiais-ricos` })
      }
    }

    tempPaths.push({ name: postTitle, link: `/${props[0].postLink}` })

    setPaths(tempPaths)
  }, [category, subcategory])

  useEffect(async () => {
    const product_name = await getProductName(props[0].id)
    window.dataLayer.push({
      event: 'send-product-name',
      productName: product_name.produto
        ? product_name.produto
        : 'nao cadastrado'
    })

    props[0].acf.product_id !== undefined
      ? setProductId(props[0].acf.product_id)
      : setProductId(1)

    let tempCotation

    if (sideCotations !== undefined) {
      sideCotations.map((card) => {
        if (card.category[0].name == product_name.produto) {
          tempCotation = card
        }
      })

      if (tempCotation === undefined) {
        sideCotations.map((card) => {
          if (card.is_holding) {
            tempCotation = card
          }
        })
      }
    } else {
      tempCotation = []
    }

    setSideCotation(tempCotation)

    //filtra o banner lateral
    const tempBanner =
      sideBanner !== undefined
        ? sideBanner.find((item) => {
            const isTheOne = item.category.find((item) => {
              return item === category?.id || item === subcategory?.id
            })

            return isTheOne ? item : item.is_holding
          })
        : []

    setSideBanner(tempBanner)

    // Obtém a lista de tags após o carregamento da página
    setLoadingTags(true)

    if (props[0].tag) {
      const tempTags = []
      props[0].tag?.map((item) => {
        tempTags.push(item)
      })
      setTags(tempTags)
    }

    setLoadingTags(false)
  }, [sideBanner, sideCotations, category, subcategory, props])

  header = {
    ...header,
    contrast: contrast,
    fontsize: fontsize
  }

  useEffect(() => {
    let h2s = Array.from(document.querySelectorAll('h2'))
    h2s.map((h2) => {
      h2.classList.add('title-5')
    })

    let h3s = Array.from(document.querySelectorAll('h3'))
    h3s.map((h3) => {
      h3.classList.add('title-6')
    })
  })

  useEffect(() => {
    customData(
      'pagina-conteudo',
      (subcategory && subcategory.name) || (category && category.name),
      'porto',
      'blog'
    )
    dataLayerPush('pageview')
  }, [props, subcategory])

  return (
    <Base seo={seoTreated} header={header} footer={footer}>
      <S.Wrapper>
        {paths.length > 0 && <Breadcrumb props={paths} rich={isRich} />}
        <S.ContentWrapper rich={isRich}>
          {width >= size.laptopS && <ShareBar post={props} />}
          <S.PostContainer>
            <Row gutter={{ xs: '0', md: '35px', lg: '65px' }}>
              <Col
                gutter={{ xs: '0', md: '35px', lg: '65px' }}
                xs={12}
                md={7}
                lg={'calc(100% - 373px)'}
              >
                <PostDetails
                  props={props[0]}
                  category={category}
                  video={isVideo}
                  podcast={isPodcast}
                  rich={isRich}
                />
                {width < size.laptopS && <ShareBar post={props} />}
              </Col>

              <Col
                gutter={{ xs: '0', md: '35px', lg: '65px' }}
                xs={12}
                md={5}
                lg={'373px'}
              >
                <S.Content className="sticked scroled">
                  {loadingTags && <Loading isNone={true} />}
                  {side_cotation && !isRich && (
                    <CardCta props={side_cotation} />
                  )}
                  {!loadingTags && tags.length > 0 && (
                    <RelatedTopics props={tags} title="Tópicos Relacionados" />
                  )}
                  {side_banner && !isRich && <SideBanner props={side_banner} />}
                  {isRich && <CardDownload product={productId} />}
                </S.Content>
              </Col>
            </Row>
          </S.PostContainer>
        </S.ContentWrapper>

        <S.RelatedWrapper>
          <S.PostContainer>
            {filteredPosts.length > 0 && (
              <RelatedPost
                title="Conteúdos Relacionados"
                props={filteredPosts}
              />
            )}
          </S.PostContainer>
        </S.RelatedWrapper>

        <Newsletter props={newsletter} />
      </S.Wrapper>
    </Base>
  )
}
getPost