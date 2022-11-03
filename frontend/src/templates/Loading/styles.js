import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: ${theme.colors.primary[5]};
    display: flex;
    justify-content: center;
    align-items: center;
  `}
`
