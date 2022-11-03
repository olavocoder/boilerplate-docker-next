import { Row, Col } from 'react-flexa'

import { Container } from 'components/Container'
import styled, { css } from 'styled-components'
import { devices } from 'styles/utils/devices'

export const RowExemple = styled(Row)`
  padding-top: 16px;
  margin-bottom: 50px;
`

export const ColExemple = styled(Col)`
  ${({ theme }) => css`
    margin-bottom: 16px;

    .col-content {
      min-height: 100px;
      color: ${theme.colors.neutral[100]};
      background: ${theme.colors.primary[75]};
      padding: 10px;
      border-radius: 4px;
    }
  `}
`

export const ContainerExemple = styled(Container)`
  ${({ theme }) => css`
    margin-top: 20px;
    background: ${theme.colors.neutral.offwhite};

    &.last {
      margin-bottom: 50px;
    }

    .content {
      background: ${theme.colors.primary[75]};
      padding: 20px;

      h2,
      p {
        color: ${theme.colors.neutral[100]};
      }

      h2 {
        margin-bottom: 20px;
      }
    }
  `}
`

export const GuideContent = styled(Container)`
  ${({ theme }) => css`
    .content {
      width: 100%;
      min-height: 100px;
    }

    ${ColExemple} {
      .col-content {
        color: ${theme.colors.neutral[0]};
        background: ${theme.colors.neutral.offwhite};
        height: 100%;
        min-height: auto;
      }
    }

    .box {
      display: flex;
      justify-content: space-between;
      align-content: flex-start;
      flex-wrap: wrap;
      gap: 6px;

      .col {
        background: ${theme.colors.neutral.offwhite};
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        padding: 20px;
        min-height: 148px;
        width: 100%;
        flex-direction: column;
        border-radius: 4px;

        @media ${devices.tablet} {
          width: calc(25% - 6px);
        }
      }

      &:not(:last-child) {
        margin-bottom: 8px;
      }
    }
  `}
`
