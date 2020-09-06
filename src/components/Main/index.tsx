import s from './styles'

const Main = ({
  title = 'React Avançado',
  description = 'Typescript, ReactJs, NextJs, Styled Components'
}) => (
  <s.Wrapper>
    <s.Logo
      src="/img/logo.svg"
      alt="Imagem de um átomo e React avançado escrito ao lado."
    />
    <s.Title>{title}</s.Title>
    <s.Description>{description}</s.Description>
    <s.Ilustration
      src="img/hero-illustration.svg"
      alt="um desenvolvedor de frente para uma tela com código."
    />
  </s.Wrapper>
)
export default Main
