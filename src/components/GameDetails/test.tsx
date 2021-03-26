import { render, screen } from 'utils/test-utils'

import GameDetails, { GameDetailsProps } from '.'

const props: GameDetailsProps = {
  developer: 'Different Tales',
  releaseDate: '2020-11-21t23:00:00',
  platforms: ['windows', 'mac', 'linux'],
  rating: 'BR0',
  genres: ['Role-playing', 'Narrative'],
  publisher: '2K'
}

describe('<GameDetails />', () => {
  it('should render the blocks', () => {
    render(<GameDetails {...props} />)

    expect(
      screen.getByRole('heading', { name: /Developer/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /release date/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /platforms/i })
    ).toBeInTheDocument()
    expect(
      screen.getByRole('heading', { name: /publisher/i })
    ).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /rating/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /genres/i })).toBeInTheDocument()
  })

  it('Should render platform icons', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByRole('img', { name: /linux/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /windows/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /mac/i })).toBeInTheDocument()
  })

  it('Should render the formated date', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByText('Nov 21, 2020')).toBeInTheDocument()
  })

  it('Should render free rating when BR0', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByText(/free/i)).toBeInTheDocument()
  })

  it('Should render 18+ rating when BR18', () => {
    render(<GameDetails {...props} rating="BR18" />)

    expect(screen.getByText(/18\+/i)).toBeInTheDocument()
  })

  it('Should render the developer', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByText(/different tales/i)).toBeInTheDocument()
  })

  it('Should render the publisher', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByText(/2K/i)).toBeInTheDocument()
  })

  it('Should render a list of genres', () => {
    render(<GameDetails {...props} />)

    expect(screen.getByText('Role-playing / Narrative')).toBeInTheDocument()
  })
})
