import { Apple, Windows, Linux } from '@styled-icons/fa-brands'
import Heading from 'components/Heading'
import MediaMatch from 'components/MediaMatch'

import * as s from './styles'

type Platform = 'windows' | 'linux' | 'mac'

type Rating = 'BR0' | 'BR10' | 'BR12' | 'BR14' | 'BR16' | 'BR18'

export type GameDetailsProps = {
  developer: string
  releaseDate: string
  platforms: Platform[]
  rating: Rating
  genres: string[]
}

const GameDetails = ({
  developer,
  releaseDate,
  platforms,
  rating,
  genres
}: GameDetailsProps) => {
  const platformIcons = {
    linux: <Linux title="Linux" size={18} />,
    mac: <Apple title="Mac" size={18} />,
    windows: <Windows title="Windows" size={18} />
  }

  return (
    <s.Wrapper>
      <MediaMatch greaterThan="small">
        <Heading lineLeft lineColor="secondary">
          Game Details
        </Heading>
      </MediaMatch>

      <s.Content>
        <s.Block>
          <s.Label>Developer</s.Label>
          <s.Description>{developer}</s.Description>
        </s.Block>
        <s.Block>
          <s.Label>Release Date</s.Label>
          <s.Description>
            {new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(releaseDate))}
          </s.Description>
        </s.Block>
        <s.Block>
          <s.Label>Platforms</s.Label>
          <s.IconsWrapper>
            {platforms.map((icon: Platform) => (
              <s.Icon key={icon}>{platformIcons[icon]}</s.Icon>
            ))}
          </s.IconsWrapper>
        </s.Block>
        <s.Block>
          <s.Label>Publisher</s.Label>
          <s.Description>G2K</s.Description>
        </s.Block>
        <s.Block>
          <s.Label>Rating</s.Label>
          <s.Description>
            {rating === 'BR0' ? 'FREE' : `${rating.replace('BR', '')}+`}
          </s.Description>
        </s.Block>
        <s.Block>
          <s.Label>Genres</s.Label>
          <s.Description>{genres.join(' / ')}</s.Description>
        </s.Block>
      </s.Content>
    </s.Wrapper>
  )
}

export default GameDetails
