import { Container } from 'components/Container'
import styled, { css } from 'styled-components'
import { devices } from 'styles/utils/devices'

export const Wrapper = styled(Container)``

export const Content = styled.div`
  width: 100%;
  height: 100%;

  &.padded {
    @media ${devices.tablet} {
      padding-bottom: 40px;
    }

    @media ${devices.tabletL} {
      padding-top: 81px;
    }
  }
`

export const Sticked = styled.div`
  ${({ theme }) => css`
    padding: 0 15px;

    @media ${devices.tablet} {
      padding: 0;
      position: sticky;
      top: ${theme.sizes.headerM};
      align-self: flex-start;
    }

    @media ${devices.tabletL} {
      top: ${`calc(${theme.sizes.headerD} + ${theme.sizes.topHeader})`};
    }

    @media ${devices.laptopS} {
      position: relative;
      top: 0;
    }
  `}
`
