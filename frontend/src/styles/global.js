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
      width: 100%;
      overflow-x: hidden;

      &.no-scroll {
        overflow: hidden;
      }

      @media ${devices.tabletL} {
        background: ${theme.colors.primary[0]};
      }

      &.font-large {
        font-size: 18px;
      }
    }
  `}
`

export default GlobalStyles
