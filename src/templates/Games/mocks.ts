import { QUERY_GAMES } from 'graphql/queries/games'

export const gamesQueryMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15 }
  },
  result: {
    data: {
      games: [
        {
          name: 'Sample Game',
          slug: 'sample-game',
          cover: {
            url: 'sample-game.jpg'
          },
          developers: [{ name: 'sample developer' }],
          price: 518.39,
          __typename: 'Game'
        }
      ]
    }
  }
}

export const gamesFetchMoreMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, start: 1 }
  },
  result: {
    data: {
      games: [
        {
          name: 'Fetch More Game',
          slug: 'fetch-more-game',
          cover: {
            url: 'fetch-more-game.jpg'
          },
          developers: [{ name: 'fetch more developer' }],
          price: 518.39,
          __typename: 'Game'
        }
      ]
    }
  }
}
