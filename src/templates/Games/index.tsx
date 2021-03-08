import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'
import LoadingSpinner from 'components/LoadingSpinner'
import { useQueryGames } from 'graphql/queries/games'
import Base from 'templates/Base'

import * as s from './styles'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { data, loading, fetchMore } = useQueryGames({
    variables: { limit: 15 }
  })

  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    fetchMore({
      variables: {
        limit: 15,
        start: data?.games.length
      }
    })

    return
  }

  return (
    <Base>
      <s.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />
        {loading ? (
          <s.LoadingSpinnerWrapper>
            <LoadingSpinner />
          </s.LoadingSpinnerWrapper>
        ) : (
          <section>
            <Grid>
              {data?.games.map((game) => (
                <GameCard
                  key={game.slug}
                  slug={game.slug}
                  title={game.name}
                  developer={game.developers[0].name}
                  img={`http://localhost:1337${game.cover!.url}`}
                  price={game.price}
                />
              ))}
            </Grid>

            <s.ShowMore role="button" onClick={handleShowMore}>
              <p>Show More</p>
              <ArrowDown size={35} />
            </s.ShowMore>
          </section>
        )}
      </s.Main>
    </Base>
  )
}
export default GamesTemplate
