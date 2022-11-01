import styled, { css } from 'styled-components'
import { devices } from 'styles/utils/devices'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.neutral.offwhite};

    @media ${devices.tabletL} {
      background-color: ${theme.colors.neutral.offwhite};
    }
  `}
`
