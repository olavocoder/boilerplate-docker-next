import { useEffect, useState } from 'react'
import { Row, Col } from 'react-flexa'

import { customData, dataLayerPush } from 'components/Analytics'
import ExclusiveContent from 'components/ExclusiveContent'
import HeroBlog from 'components/HeroBlog'
import LastPosts from 'components/LastPosts'
import MostRead from 'components/MostRead'
import Newsletter from 'components/Newsletter'
import SelfHelp from 'components/SelfHelp'
import SideBanner from 'components/SideBanner'
import Base from 'templates/Base'

import * as S from './styles'

export default function HomeTemplate({
  seo,
  props,
  lastPosts,
  mostRead,
  contrast,
  fontsize,
  header,
  footer,
  sideBanner,
  frequentDoubts,
  specialPosts,
  bannersHero,
  newsletter
}) {
  const [last_posts, setLastPosts] = useState(null)
  const [most_read, setMostRead] = useState(null)
  const [side_banner, setSideBanner] = useState(null)
  const [frequent_doubts, setFrequentDoubts] = useState(null)
  const hero_blog = props[0].acf.hero_blog
  const special_section = props[0].acf.special_section
  const exclusive_content = props[0].acf.exclusive_content
  HeroBlog
  useEffect(() => {
    if (frequentDoubts !== undefined) setFrequentDoubts(frequentDoubts)
    if (lastPosts !== undefined) setLastPosts(lastPosts)
    if (mostRead !== undefined) setMostRead(mostRead)
  }, [frequentDoubts, lastPosts, mostRead])

  useEffect(() => {
    if (special_section) {
      // Seleciona o sidebanner de acordo com a categoria do acf
      if (sideBanner !== undefined) {
        const tempSideBanner = sideBanner.find((item) => {
          const isTheOne = item.category.find((item) => {
            return item === special_section
          })
          return isTheOne ? item : item.is_holding
        })
        setSideBanner(tempSideBanner)
      }
    }
  }, [special_section, sideBanner])

  header = {
    ...header,
    contrast: contrast,
    fontsize: fontsize
  }

  useEffect(() => {
    customData()
    dataLayerPush('pageview')
  }, [])

  return (
    <Base seo={seo} header={header} footer={footer}>
      {hero_blog && <HeroBlog props={bannersHero}></HeroBlog>}

      <S.Wrapper>
        <Row gutter={{ xs: '0', md: '38px', lg: '38px' }}>
          {last_posts && (
            <Col
              gutter={{ xs: '0', md: '38px', lg: '38px' }}
              xs={12}
              md={7}
              lg={'calc(100% - 328px)'}
            >
              <S.Content>
                <LastPosts
                  props={last_posts}
                  title="Últimos Posts"
                  configs="home-last-posts"
                ></LastPosts>
              </S.Content>
            </Col>
          )}

          {most_read && (
            <Col
              gutter={{ xs: '0', md: '38px', lg: '38px' }}
              xs={12}
              md={5}
              lg={'328px'}
            >
              <S.Content>
                <MostRead props={most_read}></MostRead>
              </S.Content>
            </Col>
          )}
        </Row>
      </S.Wrapper>

      {exclusive_content && (
        <ExclusiveContent props={exclusive_content}></ExclusiveContent>
      )}

      {specialPosts && (
        <S.Wrapper>
          <Row gutter={{ xs: '0', md: '38px', lg: '65px' }}>
            <Col
              gutter={{ xs: '0', md: '38px', lg: '65px' }}
              xs={12}
              md={7}
              lg={'calc(100% - 373px)'}
            >
              <S.Content>
                <LastPosts
                  props={specialPosts}
                  title={special_section.title}
                  configs="home-special-section"
                ></LastPosts>
              </S.Content>
            </Col>

            <Col
              gutter={{ xs: '0', md: '38px', lg: '65px' }}
              xs={12}
              md={5}
              lg={'373px'}
            >
              <S.Content className="padded">
                <S.Sticked>
                  {side_banner && <SideBanner props={side_banner} />}
                </S.Sticked>
              </S.Content>
            </Col>
          </Row>
        </S.Wrapper>
      )}

      <Newsletter props={newsletter} />

      {frequent_doubts && <SelfHelp props={frequent_doubts} />}
    </Base>
  )
}
