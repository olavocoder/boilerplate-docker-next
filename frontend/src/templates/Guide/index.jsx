import Button from 'components/Button'
import Base from 'templates/Base'

import GhostButtons from './buttons-ghost'
import PrimaryButtons from './buttons-primary'
import SecondaryButtons from './buttons-secondary'
import * as S from './styles'

export default function GuideTemplate({
  seo,
  header,
  footer,
  contrast,
  fontsize
}) {
  let cols12 = []
  for (let i = 1; i < 13; i++) {
    cols12.push(i)
  }
  let cols6 = []
  for (let i = 1; i < 7; i++) {
    cols6.push(i)
  }

  header = {
    ...header,
    contrast: contrast,
    fontsize: fontsize
  }

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
        <div className="content">
          <h2>Exemplos de uso de botões</h2>
          <br />
          <div className="box">
            <PrimaryButtons size={'thini'} />
            <PrimaryButtons size={'medium'} />
            <PrimaryButtons size={''} />
            <PrimaryButtons size={'link'} />
          </div>

          <div className="box">
            <SecondaryButtons size={'thini'} />
            <SecondaryButtons size={'medium'} />
            <SecondaryButtons size={''} />
            <SecondaryButtons size={'link'} />
          </div>

          <div className="box">
            <GhostButtons size={'thini'} />
            <GhostButtons size={'medium'} />
            <GhostButtons size={''} />
            <GhostButtons size={'link'} />
          </div>

          <br />
          <br />
          <h2>
            Exemplos de uso de tipografias utilizando o componente Typography
          </h2>
          <br />

          <S.RowExemple gutter="16px">
            <S.ColExemple xs={12} lg={6}>
              <div className="col-content">
                <p className="overline">Mantám o estilo do title 1</p>
                <br />
                <h1>H1 - Title 1</h1>
                <h2 className="title">H2 - Title 1</h2>
                <h3 className="title">H3 - Title 1</h3>
                <h4 className="title">H4 - Title 1</h4>
                <h5 className="title">H5 - Title 1</h5>
                <h6 className="title">H6 - Title 1</h6>
              </div>
            </S.ColExemple>

            <S.ColExemple xs={'hidden'} lg={6}>
              <div className="col-content">
                <p className="overline">Mantám tamanho do title 1 mobile</p>
                <br />
                <h1 className="keep-mb">H1 - Title 1</h1>
                <h2 className="title keep-mb">H2 - Title 1</h2>
                <h3 className="title keep-mb">H3 - Title 1</h3>
                <h4 className="title keep-mb">H4 - Title 1</h4>
                <h5 className="title keep-mb">H5 - Title 1</h5>
                <h6 className="title keep-mb">H6 - Title 1</h6>
              </div>
            </S.ColExemple>

            <S.ColExemple xs={12} lg={6}>
              <div className="col-content">
                <p className="overline">Mantám o estilo do title 2</p>
                <br />
                <h1 className="title-2">H1 - Title 2</h1>
                <h2>H2 - Title 2</h2>
                <h3 className="title-2">H3 - Title 2</h3>
                <h4 className="title-2">H4 - Title 2</h4>
                <h5 className="title-2">H5 - Title 2</h5>
                <h6 className="title-2">H6 - Title 2</h6>
              </div>
            </S.ColExemple>

            <S.ColExemple xs={'hidden'} lg={6}>
              <div className="col-content">
                <p className="overline">Mantám tamanho do title 2 mobile</p>
                <br />
                <h1 className="title-2 keep-mb">H1 - Title 2</h1>
                <h2 className="keep-mb">H2 - Title 2</h2>
                <h3 className="title-2 keep-mb">H3 - Title 2</h3>
                <h4 className="title-2 keep-mb">H4 - Title 2</h4>
                <h5 className="title-2 keep-mb">H5 - Title 2</h5>
                <h6 className="title-2 keep-mb">H6 - Title 2</h6>
              </div>
            </S.ColExemple>

            <S.ColExemple xs={12} lg={6}>
              <div className="col-content">
                <p className="overline">Mantám o estilo do title 3</p>
                <br />
                <h1 className="title-3">H1 - Title 3</h1>
                <h2 className="title-3">H2 - Title 3</h2>
                <h3 className="">H3 - Title 3</h3>
                <h4 className="title-3">H4 - Title 3</h4>
                <h5 className="title-3">H5 - Title 3</h5>
                <h6 className="title-3">H6 - Title 3</h6>
              </div>
            </S.ColExemple>

            <S.ColExemple xs={'hidden'} lg={6}>
              <div className="col-content">
                <p className="overline">Mantám tamanho do title 3 mobile</p>
                <br />
                <h1 className="title-3 keep-mb">H1 - Title 3</h1>
                <h2 className="title-3 keep-mb">H2 - Title 3</h2>
                <h3 className="keep-mb">H3 - Title 3</h3>
                <h4 className="title-3 keep-mb">H4 - Title 3</h4>
                <h5 className="title-3 keep-mb">H5 - Title 3</h5>
                <h6 className="title-3 keep-mb">H6 - Title 3</h6>
              </div>
            </S.ColExemple>

            <S.ColExemple xs={12} lg={6}>
              <div className="col-content">
                <p className="overline">Mantám o estilo do title 4</p>
                <br />
                <h1 className="title-4">H1 - Title 4</h1>
                <h2 className="title-4">H2 - Title 4</h2>
                <h3 className="title-4">H3 - Title 4</h3>
                <h4 className="">H4 - Title 4</h4>
                <h5 className="title-4">H5 - Title 4</h5>
                <h6 className="title-4">H6 - Title 4</h6>
              </div>
            </S.ColExemple>

            <S.ColExemple xs={'hidden'} lg={6}>
              <div className="col-content">
                <p className="overline">Mantám tamanho do title 4 mobile</p>
                <br />
                <h1 className="title-4 keep-mb">H1 - Title 4</h1>
                <h2 className="title-4 keep-mb">H2 - Title 4</h2>
                <h3 className="title-4 keep-mb">H3 - Title 4</h3>
                <h4 className="keep-mb">H4 - Title 4</h4>
                <h5 className="title-4 keep-mb">H5 - Title 4</h5>
                <h6 className="title-4 keep-mb">H6 - Title 4</h6>
              </div>
            </S.ColExemple>

            <S.ColExemple xs={'hidden'} lg={12}>
              <div className="col-content">
                <p>
                  As tags H5 e H6 possuem o mesmo tamanho tanto no mobile quanto
                  desk
                </p>
              </div>
            </S.ColExemple>

            <S.ColExemple xs={12} lg={6}>
              <div className="col-content">
                <p className="overline">Mantám o estilo do title 5</p>
                <br />
                <h1 className="title-5">H1 - Title 5</h1>
                <h2 className="title-5">H2 - Title 5</h2>
                <h3 className="title-5">H3 - Title 5</h3>
                <h4 className="title-5">H4 - Title 5</h4>
                <h5 className="">H5 - Title 5</h5>
                <h6 className="title-5">H6 - Title 5</h6>
              </div>
            </S.ColExemple>

            <S.ColExemple xs={12} lg={6}>
              <div className="col-content">
                <p className="overline">Mantám o estilo do title 6</p>
                <br />
                <h1 className="title-6">H1 - Title 6</h1>
                <h2 className="title-6">H2 - Title 6</h2>
                <h3 className="title-6">H3 - Title 6</h3>
                <h4 className="title-6">H4 - Title 6</h4>
                <h5 className="title-6">H5 - Title 6</h5>
                <h6 className="">H6 - Title 6</h6>
              </div>
            </S.ColExemple>

            <S.ColExemple xs={12} lg={6}>
              <div className="col-content">
                <p className="subtitle">Subtitle 1</p>
                <p className="subtitle-small">Subtitle 2</p>
                <p>Body 1</p>
                <p className="text-small">Body 1</p>
                <p className="caption">Caption</p>
                <p className="overline">Overline</p>
                <button>Botão</button>
                <a>Link</a>
              </div>
            </S.ColExemple>
          </S.RowExemple>
        </div>
      </S.GuideContent>
    </Base>
  )
}
