import Base from 'templates/Base'

import * as S from './styles'

export default function CategoryTemplate({
  seo,
  header,
  footer,
  posts
}) {
  console.table(posts);

  return (
    <Base seo={seo} header={header} footer={footer}>
      <S.Wrapper>
        Categoria
      </S.Wrapper>
    </Base>
  )
}
