import Base from 'templates/Base'

import * as S from './styles'

export default function GuideTemplate({
  seo,
  header,
  footer,
}) {

  return (
    <Base seo={seo} header={header} footer={footer}>
      <S.ContainerExemple>
        <S.RowExemple gutter={{ xs: '12px', md: '16px' }}>
          <S.ColExemple xs={12}>
            <strong className="title-2">SEO</strong>
            <br />
            <br />
            <p>
              Para mais informações sobre o SEO acesse:{' '}
              <Button
                target="blank"
                size={'link'}
                href="https://www.npmjs.com/package/next-seo"
              >
                Next SEO
              </Button>
            </p>
          </S.ColExemple>
        </S.RowExemple>
      </S.ContainerExemple>

      <S.ContainerExemple noPadded={true}>
        <div className="content">
          <h2>Container sem padding </h2>
          <p>Usado no header</p>
        </div>
      </S.ContainerExemple>

      <S.ContainerExemple>
        <div className="content">
          <h2>Container com padding</h2>
          <p>Usado na maior parte do blog</p>
        </div>
      </S.ContainerExemple>

      <S.ContainerExemple className="last" largePadded={true}>
        <div className="content">
          <h2>Container com padding extra</h2>
          <p>
            No mockup pode ser encontrado em conteúdos relacionados dentro da
            página do artigo
          </p>
        </div>
      </S.ContainerExemple>

      <S.ContainerExemple>
        <S.RowExemple gutter={{ xs: '12px', md: '16px' }}>
          <S.ColExemple xs={12}>
            <strong className="title-2">
              Exemplo simples para uso de grid.
            </strong>
          </S.ColExemple>

          {cols12.map((item) => (
            <S.ColExemple xs={12} sm={6} md={3} lg={1} key={item}>
              <div className="col-content">col - {item}</div>
            </S.ColExemple>
          ))}

          {cols6.map((item) => (
            <S.ColExemple xs={12} sm={6} md={4} lg={2} key={item}>
              <div className="col-content">col - {item}</div>
            </S.ColExemple>
          ))}

          <S.ColExemple xs={12}>
            <p>
              Para mais detalhes acesse a documentação do{' '}
              <Button
                target="blank"
                size={'link'}
                href="https://github.com/aaronvanston/react-flexa"
              >
                Flexa
              </Button>
            </p>
          </S.ColExemple>
        </S.RowExemple>
      </S.ContainerExemple>

      <S.GuideContent>
        Aqui devem ficar os botões e typografias
      </S.GuideContent>
    </Base>
  )
}
