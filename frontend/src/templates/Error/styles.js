import styled, { css } from 'styled-components'
import { devices } from 'styles/utils/devices'

export const Wrapper = styled.div`
  padding-top: 20px;
  width: 100%;
  overflow: hidden;

  @media ${devices.tabletL} {
    padding-top: 36px;
  }
`

export const WrapperImage = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.primary[45]};
    position: relative;
    width: 100%;
    max-width: 650px;
    margin: 0 auto 24px;
    overflow: hidden;
    border-radius: 12px;

    &::before {
      content: '';
      display: block;
      padding-top: 46.25%;
    }

    img {
      position: absolute;
      top: 0;
      left: 0;
      object-fit: cover;
    }

    /* @media ${devices.tabletL} {
      height: 360px;
    } */
  `}
`

export const Title = styled.h1`
  width: 100%;
  max-width: 650px;
  text-align: center;
  margin: 0 auto 32px;
`

export const WrapperButtons = styled.div`
  width: 245px;
  margin: 0 auto 40px;

  display: flex;
  justify-content: flex-start;
  flex-direction: column;

  button {
    margin-bottom: 24px;
  }

  button,
  a {
    width: 100%;
  }
`

export const Content = styled.div``
