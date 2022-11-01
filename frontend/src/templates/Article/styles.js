import { Container } from 'components/Container'
import styled, { css } from 'styled-components'
import { devices } from 'styles/utils/devices'

export const Wrapper = styled.div`
  padding-top: 0;

  @media ${devices.tablet} {
    padding-top: 30px;
  }

  @media ${devices.tabletL} {
    padding-top: 60px;
  }
`

export const ContentWrapper = styled(Container)`
  position: relative;
`

export const PostContainer = styled.div`
  width: 100%;
  @media ${devices.tablet} {
    padding: 0 30px;
  }

  @media ${devices.tabletL} {
    padding: 0 30px 0 100px;
  }
`

export const Content = styled.div`
  ${({ theme }) => css`
    &.sticked {
      margin-bottom: 16px;

      @media ${devices.tablet} {
        margin-bottom: 40px;
        padding: 0;
        position: sticky;
        align-self: flex-start;
        top: ${`calc(${theme.sizes.header} + 20px)`};

        &.scroled {
          top: 20px;
        }
      }

      @media ${devices.tabletL} {
        top: ${`calc(${theme.sizes.headerD} + ${theme.sizes.topHeader} + 20px)`};

        &.scroled {
          top: 20px;
        }
      }
    }
  `}
`

export const RelatedWrapper = styled(Container)`
  display: flex;
  align-items: center;
  overflow: hidden;

  @media ${devices.maxtabletL} {
    ${PostContainer} {
      padding: 0;
    }
  }
`
