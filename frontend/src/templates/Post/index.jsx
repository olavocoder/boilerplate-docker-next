import Base from 'templates/Base'
// import dynamic from 'next/dynamic'
// Insert dynamic
// https://nextjs.org/docs/advanced-features/preview-mode
// Insert a preview mode

import * as S from './styles'

export default function ArticleTemplate({
  seo,
  header,
  footer,
}) {

  return (
    <Base seo={seo} header={header} footer={footer}>
      <S.Wrapper>
        Postagem
      </S.Wrapper>
    </Base>
  )
}
getPost