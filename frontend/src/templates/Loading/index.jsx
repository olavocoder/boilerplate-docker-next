import { Container } from 'components/Container'
import Loading from 'components/Loading'
import Base from 'templates/Base'

import * as S from './styles'

export default function LoadingTemplate({ header, contrast, fontsize }) {
  header = {
    ...header,
    contrast: contrast,
    fontsize: fontsize
  }

  return (
    <Base header={header}>
      <S.Wrapper>
        <Container>
          <Loading />
        </Container>
      </S.Wrapper>
    </Base>
  )
}
