import styled, { css, keyframes } from 'styled-components'

const spinningAnimation = keyframes`
  to {
    transform: rotate(360deg);
  }
`

export const Loader = styled.div`
  ${({ theme }) => css`
    width: 4rem;
    height: 4rem;
    border-radius: 50%;
    border: 0.4rem solid ${theme.colors.black};
    border-left-color: ${theme.colors.primary};
    animation: ${spinningAnimation} 0.5s linear infinite;
  `}
`
