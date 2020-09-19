import Button from 'components/Button'
import * as s from './styles'

export type HighlightProps = {
  title: string
  subtitle: string
  buttonLabel: string
  backgroundImage: string
  buttonLink: string
  floatImage?: string
  alignment?: 'right' | 'left'
}

const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage,
  floatImage,
  alignment = 'right'
}: HighlightProps) => (
  <s.Wrapper backgroundImage={backgroundImage} alignment={alignment}>
    {!!floatImage && <s.FloatImage src={floatImage} alt={title} />}
    <s.Content>
      <s.Title>{title}</s.Title>
      <s.SubTitle>{subtitle}</s.SubTitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </s.Content>
  </s.Wrapper>
)
export default Highlight
