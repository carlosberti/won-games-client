import { MockedProvider } from '@apollo/client/testing'
import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'
import gamesMock from 'components/GameCardSlider/mock'
import filterItemsMock from 'components/ExploreSidebar/mock'

import Games from '.'
import { gamesFetchMoreMock, gamesQueryMock } from './mocks'
import userEvent from '@testing-library/user-event'
import apolloCache from 'utils/apolloCache'

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/ExploreSidebar', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock ExploreSidebar">{children}</div>
  }
}))

jest.mock('components/LoadingSpinner', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock LoadingSpinner" />
  }
}))

describe('<Games />', () => {
  it('should render loading when starting the template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={filterItemsMock} games={[gamesMock[0]]} />
      </MockedProvider>
    )

    expect(screen.getByTestId('Mock LoadingSpinner')).toBeInTheDocument()
  })

  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesQueryMock]} addTypename={false}>
        <Games filterItems={filterItemsMock} games={[gamesMock[0]]} />
      </MockedProvider>
    )

    //it starts without data
    expect(screen.getByTestId('Mock LoadingSpinner')).toBeInTheDocument()

    //we wait until we have data to get elements
    expect(await screen.findByTestId('Mock ExploreSidebar')).toBeInTheDocument()
    expect(screen.getByTestId('Mock Base')).toBeInTheDocument()
    expect(await screen.findByText('Sample Game')).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })

  it('should render more games when show more is clicked', async () => {
    renderWithTheme(
      <MockedProvider
        cache={apolloCache}
        mocks={[gamesQueryMock, gamesFetchMoreMock]}
      >
        <Games filterItems={filterItemsMock} games={[gamesMock[0]]} />
      </MockedProvider>
    )

    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()

    userEvent.click(await screen.findByRole('button', { name: /show more/i }))

    expect(await screen.findByText(/Fetch More Game/i)).toBeInTheDocument()
  })
})
