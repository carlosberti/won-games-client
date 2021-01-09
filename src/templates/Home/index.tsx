import Base from 'templates/Base'

import { BannerProps } from 'components/Banner'
import { Container } from 'components/Container'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import BannerSlider from 'components/BannerSlider'
import Showcase from 'components/Showcase'

import * as s from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcommingGames: GameCardProps[]
  upcommingHighlight: HighlightProps
  upcommingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcommingGames,
  upcommingHighlight,
  upcommingMoreGames,
  freeHighlight,
  freeGames
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <s.SectionBanner>
        <BannerSlider items={banners} />
      </s.SectionBanner>
    </Container>

    <s.SectionNews>
      <Showcase title="News" games={newGames} />
    </s.SectionNews>

    <Showcase
      title="Most Popular"
      highlight={mostPopularHighlight}
      games={mostPopularGames}
    />

    <s.SectionUpcoming>
      <Showcase title="Upcoming" games={upcommingGames} />
      <Showcase highlight={upcommingHighlight} games={upcommingMoreGames} />
    </s.SectionUpcoming>

    <Showcase title="Free Games" highlight={freeHighlight} games={freeGames} />
  </Base>
)
export default Home
