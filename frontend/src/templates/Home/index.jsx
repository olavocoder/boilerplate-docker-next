import Base from 'templates/Base'

import * as S from './styles'

export default function HomeTemplate({
  seo,
  header,
  footer,
}) {

  return (
    <Base seo={seo} header={header} footer={footer}>
      <S.Wrapper>
        Página inicial
      </S.Wrapper>
    </Base>
  )
}
