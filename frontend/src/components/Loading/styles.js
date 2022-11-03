import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  position: relative;

  &:not(.no-padd) {
    height: 210px;
    width: 100%;
  }
`

export const Loading = styled.div`
  ${({ theme }) => css`
    &::after {
      content: '';
      z-index: 3;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      height: 70px;
      width: 70px;
      border-top: 2px solid ${theme.colors.primary[70]};
      border-right: 2px solid ${theme.colors.primary[70]};
      border-bottom: 2px solid ${theme.colors.primary[70]};
      border-left: 2px solid transparent;
      animation: loading 1s infinite linear;
      border-radius: 50%;
    }

    &.small {
      &::after {
        height: 20px;
        width: 20px;
      }
    }

    @keyframes loading {
      from {
        transform: translate(-50%, -50%) rotate(0);
      }
      to {
        transform: translate(-50%, -50%) rotate(360deg);
      }
    }
  `}
`
