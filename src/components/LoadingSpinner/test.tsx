import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import LoadingSpinner from '.'

describe('<LoadingSpinner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(<LoadingSpinner />)

    expect(container.firstChild).toHaveStyle({
      borderRadius: '50%',
      border: '0.6rem solid #030517',
      borderLeftColor: '#F231A5'
    })
  })
})
