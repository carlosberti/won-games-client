import Button from 'components/Button'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'

import * as s from './styles'

export type BannerProps = {
  img: string
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  ribbon?: React.ReactNode
  ribbonSize?: RibbonSizes
  ribbonColor?: RibbonColors
}

const Banner = ({
  img,
  buttonLabel,
  buttonLink,
  subtitle,
  title,
  ribbon,
  ribbonSize = 'normal',
  ribbonColor = 'primary'
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

    {!!ribbon && (
      <Ribbon size={ribbonSize} color={ribbonColor}>
        {ribbon}
      </Ribbon>
    )}
  </s.Wrapper>
)
export default Banner
