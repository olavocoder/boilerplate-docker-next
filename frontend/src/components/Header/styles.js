import styled, { css } from 'styled-components'

export const Wrapper = styled.footer`
  ${({ theme }) => css`
    background-color: ${theme.colors.white};
  `}
`
