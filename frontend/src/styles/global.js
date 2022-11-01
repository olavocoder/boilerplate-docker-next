import { createGlobalStyle, css } from 'styled-components'
import { devices } from 'styles/utils/devices'

const GlobalStyles = createGlobalStyle`
  ${({ theme }) => css`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html,
    body,
    #__next {
    }

    body {
      font-family: ${theme.font.family.normal};
      font-size: ${theme.font.sizes.normal};
      line-height: ${theme.font.height.normal};
      font-weight: ${theme.font.weight.medium};
      letter-spacing: ${theme.font.spacing.medium};
      width: 100%;
      overflow-x: hidden;
      padding-top: ${theme.sizes.headerM};

      &.no-scroll {
        overflow: hidden;
      }

      @media ${devices.tabletL} {
        padding-top: ${`calc(${theme.sizes.headerD} + 40px)`};
      }
    }
    themeActive
    .font-large {
      font-size: 18px;
    }

    // Os seguintes estilos levam em consideração a estilização de textos em artigos
    // Obs.: Para manter o mesmo tamanho que no mobile usar a classe "keep-mb"
    button:not(.title-1):not(.title-2):not(.title-3):not(.title-4):not(.title-5):not(.title-6):not(.overline):not(.subtitle):not(.text-small):not(.subtitle-small):not(.text),
    a:not(.title-1):not(.title-2):not(.title-3):not(.title-4):not(.title-5):not(.title-6):not(.overline):not(.subtitle):not(.text-small):not(.subtitle-small):not(.text),
    input:not(.title-1):not(.title-2):not(.title-3):not(.title-4):not(.title-5):not(.title-6):not(.overline):not(.subtitle):not(.text-small):not(.subtitle-small):not(.text) {
      font-family: inherit;
      font-size: ${theme.font.sizes.normal};
      line-height: ${theme.font.height.small2};
      font-weight: ${theme.font.weight.semibold};
      letter-spacing: ${theme.font.spacing.medium};

      > span {
        font-size: inherit;
        line-height: inherit;
        font-weight: inherit;
        letter-spacing: inherit;
      }
    }

    h1:not(.title-2):not(.title-3):not(.title-4):not(.title-5):not(.title-6):not(.subtitle):not(.subtitle-small):not(.overline):not(.text):not(.text-small):not(.caption),
    .title {
      font-size: ${theme.font.sizes.medium3};
      line-height: ${theme.font.height.medium2};
      font-weight: ${theme.font.weight.medium};
      letter-spacing: ${theme.font.spacing.small2};

      &:not(.keep-mb) {
        @media ${devices.tabletL} {
          font-size: ${theme.font.sizes.large2};
          line-height: ${theme.font.height.large2};
          letter-spacing: ${theme.font.spacing.small};
        }
      }
    }

    h2:not(.title):not(.title-3):not(.title-4):not(.title-5):not(.title-6):not(.subtitle):not(.subtitle-small):not(.overline):not(.text):not(.text-small):not(.caption),
    .title-2 {
      font-size: ${theme.font.sizes.medium2};
      line-height: ${theme.font.height.medium};
      font-weight: ${theme.font.weight.medium};
      letter-spacing: ${theme.font.spacing.small2};

      &:not(.keep-mb) {
        @media ${devices.tabletL} {
          font-size: ${theme.font.sizes.large};
          line-height: ${theme.font.height.large};
          letter-spacing: ${theme.font.spacing.normal};
        }
      }
    }

    h3:not(.title):not(.title-2):not(.title-4):not(.title-5):not(.title-6):not(.subtitle):not(.subtitle-small):not(.overline):not(.text):not(.text-small):not(.caption),
    .title-3 {
      font-size: ${theme.font.sizes.medium};
      line-height: ${theme.font.height.medium};
      font-weight: ${theme.font.weight.medium};
      letter-spacing: ${theme.font.spacing.normal2};

      &:not(.keep-mb) {
        @media ${devices.tabletL} {
          font-size: ${theme.font.sizes.medium3};
          line-height: ${theme.font.height.medium3};
          letter-spacing: ${theme.font.spacing.normal};
        }
      }
    }

    h4:not(.title):not(.title-2):not(.title-3):not(.title-5):not(.title-6):not(.subtitle):not(.subtitle-small):not(.overline):not(.text):not(.text-small):not(.caption),
    .title-4 {
      font-size: ${theme.font.sizes.normal4};
      line-height: ${theme.font.height.normal4};
      font-weight: ${theme.font.weight.medium};
      letter-spacing: ${theme.font.spacing.normal3};

      &:not(.keep-mb) {
        @media ${devices.tabletL} {
          font-size: ${theme.font.sizes.medium};
          line-height: ${theme.font.height.medium};
          letter-spacing: ${theme.font.spacing.normal3};
        }
      }
    }

    h5:not(.title):not(.title-2):not(.title-3):not(.title-4):not(.title-6):not(.subtitle):not(.subtitle-small):not(.overline):not(.text):not(.text-small):not(.caption),
    .title-5 {
      font-size: ${theme.font.sizes.normal3};
      line-height: ${theme.font.height.normal3};
      font-weight: ${theme.font.weight.medium};
      letter-spacing: ${theme.font.spacing.normal4};
    }

    h6:not(.title):not(.title-2):not(.title-3):not(.title-4):not(.title-5):not(.subtitle):not(.subtitle-small):not(.overline):not(.text):not(.text-small):not(.caption),
    .title-6 {
      font-size: ${theme.font.sizes.normal2};
      line-height: ${theme.font.height.normal2};
      font-weight: ${theme.font.weight.bold};
      letter-spacing: ${theme.font.spacing.medium2};
    }

    .subtitle {
      font-size: ${theme.font.sizes.normal};
      line-height: ${theme.font.height.normal};
      font-weight: ${theme.font.weight.bold};
      letter-spacing: ${theme.font.spacing.medium2};
    }

    .subtitle-small,
    .text-small,
    .overline {
      font-size: ${theme.font.sizes.small2};
      line-height: ${theme.font.height.small2};
      letter-spacing: ${theme.font.spacing.medium3};
      letter-spacing: ${theme.font.spacing.medium2};
    }

    .subtitle-small,
    .overline {
      font-weight: ${theme.font.weight.bold};
      letter-spacing: ${theme.font.spacing.medium3};
    }

    .caption {
      font-size: ${theme.font.sizes.small};
      line-height: ${theme.font.height.small};
      letter-spacing: ${theme.font.spacing.large};
    }
  `}
`

export default GlobalStyles
