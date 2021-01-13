import { Divider } from 'components/Divider'
import Gallery, { GalleryImageProps } from 'components/Gallery'
import { GameCardProps } from 'components/GameCard'
import GameDetails, { GameDetailsProps } from 'components/GameDetails'
import GameInfo, { GameInfoProps } from 'components/GameInfo'
import { HighlightProps } from 'components/Highlight'
import Showcase from 'components/Showcase'
import TextContent from 'components/TextContent'
import Base from 'templates/Base'
import * as s from './styles'

export type GameTemplateProps = {
  cover: string
  gameInfo: GameInfoProps
  gallery?: GalleryImageProps[]
  description: string
  details: GameDetailsProps
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  recommendedGames: GameCardProps[]
}

const Game = ({
  cover,
  gameInfo,
  gallery,
  description,
  details,
  upcomingGames,
  upcomingHighlight,
  recommendedGames
}: GameTemplateProps) => (
  <Base>
    <s.Cover src={cover} role="image" aria-label="cover" />
    <s.Main>
      <s.SectionGameInfo>
        <GameInfo {...gameInfo} />
      </s.SectionGameInfo>

      <s.SectionGallery>
        {!!gallery && <Gallery items={gallery} />}
      </s.SectionGallery>

      <s.SectionDescription>
        <TextContent title="Description" content={description} />
      </s.SectionDescription>

      <s.SectionGameDetails>
        <GameDetails {...details} />
        <Divider />
      </s.SectionGameDetails>

      <Showcase
        title="Upcoming"
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

      <Showcase title="You may like these games" games={recommendedGames} />
    </s.Main>
  </Base>
)

export default Game
