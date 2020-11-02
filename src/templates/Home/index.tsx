import { BannerProps } from 'components/Banner'
import BannerSlider from 'components/BannerSlider'
import { Container } from 'components/Container'
import Footer from 'components/Footer'
import { GameCardProps } from 'components/GameCard'
import GameCardSlider from 'components/GameCardSlider'
import Heading from 'components/Heading'
import Highlight, { HighlightProps } from 'components/Highlight'
import Menu from 'components/Menu'
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
  <section>
    <Container>
      <Menu />
      <s.SectionBanner>
        <BannerSlider items={banners} />
      </s.SectionBanner>
    </Container>

    <s.SectionNews>
      <Container>
        <Heading lineLeft lineColor="secondary">
          News
        </Heading>
        <GameCardSlider items={newGames} color="black" />
      </Container>
    </s.SectionNews>

    <Container>
      <s.SectionMostPopular>
        <Heading lineLeft lineColor="secondary">
          Most Popular
        </Heading>
        <Highlight {...mostPopularHighlight} />
        <GameCardSlider items={mostPopularGames} />
      </s.SectionMostPopular>

      <s.SectionUpcoming>
        <Heading lineLeft lineColor="secondary">
          Upcomming
        </Heading>
        <GameCardSlider items={upcommingGames} />
        <Highlight {...upcommingHighlight} />
        <GameCardSlider items={upcommingMoreGames} />
      </s.SectionUpcoming>

      <s.SectionFreeGames>
        <Heading lineLeft lineColor="secondary">
          Free games
        </Heading>
        <Highlight {...freeHighlight} />
        <GameCardSlider items={freeGames} />
      </s.SectionFreeGames>
    </Container>

    <s.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </s.SectionFooter>
  </section>
)
export default Home
