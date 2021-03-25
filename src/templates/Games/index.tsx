import { useRouter } from 'next/router'
import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard from 'components/GameCard'
import { Grid } from 'components/Grid'
import LoadingSpinner from 'components/LoadingSpinner'
import { useQueryGames } from 'graphql/queries/games'
import { ParsedUrlQueryInput } from 'node:querystring'
import Base from 'templates/Base'
import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter'

import * as s from './styles'
import Empty from 'components/Empty'

export type GamesTemplateProps = {
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { push, query } = useRouter()

  const { data, loading, fetchMore } = useQueryGames({
    variables: {
      limit: 15,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/games',
      query: items
    })
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
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
          items={filterItems}
          onFilter={handleFilter}
        />
        {loading ? (
          <s.LoadingSpinnerWrapper>
            <LoadingSpinner />
          </s.LoadingSpinnerWrapper>
        ) : (
          <section>
            {data?.games.length ? (
              <>
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
              </>
            ) : (
              <Empty
                title=":("
                description="We didn't find any games with this filter"
                hasLink
              />
            )}
          </section>
        )}
      </s.Main>
    </Base>
  )
}
export default GamesTemplate
