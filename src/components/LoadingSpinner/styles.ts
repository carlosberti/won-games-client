import styled, { css, keyframes } from 'styled-components'

const spinningAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  ${({ theme }) => css`
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    border: 0.6rem solid ${theme.colors.black};
    border-left-color: ${theme.colors.primary};
    animation: ${spinningAnimation} 1s linear infinite;
  `}
`
