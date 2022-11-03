import { Container } from 'components/Container'
import Loading from 'components/Loading'
import Base from 'templates/Base'

import * as S from './styles'

export default function LoadingTemplate({ header }) {
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
