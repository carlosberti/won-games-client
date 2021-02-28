import { KeyboardArrowDown as ArrowDown } from '@styled-icons/material-outlined'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'
import Base from 'templates/Base'

import * as s from './styles'

export type GamesTemplateProps = {
  games?: GameCardProps[]
  filterItems: ItemProps[]
}

const GamesTemplate = ({ games = [], filterItems }: GamesTemplateProps) => {
  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    return
  }

  return (
    <Base>
      <s.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        <section>
          <Grid>
            {games.map((item) => (
              <GameCard key={item.title} {...item} />
            ))}
          </Grid>

          <s.ShowMore role="button" onClick={handleShowMore}>
            <p>Show More</p>
            <ArrowDown size={35} />
          </s.ShowMore>
        </section>
      </s.Main>
    </Base>
  )
}
export default GamesTemplate
