import Button from 'components/Button'
import * as s from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
}

const Banner = ({
  img,
  buttonLabel,
  buttonLink,
  subtitle,
  title
}: BannerProps) => (
  <s.Wrapper>
    <s.Image src={img} role="img" aria-label={title} />

    <s.Caption>
      <s.Title>{title}</s.Title>
      <s.Subtitle dangerouslySetInnerHTML={{ __html: subtitle }} />
      <Button as="a" href={buttonLink} size="large">
        {buttonLabel}
      </Button>
    </s.Caption>
  </s.Wrapper>
)
export default Banner
