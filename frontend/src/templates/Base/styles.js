import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    background-color: ${theme.colors.neutral[100]};
    color: ${theme.colors.neutral[0]};
    width: 100%;
  `}
`
