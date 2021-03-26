import LoadingSpinner from '.'
import { render } from 'utils/test-utils'

describe('<LoadingSpinner />', () => {
  it('should render correctly', () => {
    const { container } = render(<LoadingSpinner />)

    expect(container.firstChild).toHaveStyle({
      borderRadius: '50%',
      border: '0.4rem solid #030517',
      borderLeftColor: '#F231A5'
    })
  })
})
