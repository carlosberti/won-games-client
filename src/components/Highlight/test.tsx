import { render, screen } from 'utils/test-utils'

import Highlight from '.'
import * as s from './styles'

const props = {
  title: 'Heading 1',
  subtitle: 'Heading 2',
  buttonLabel: 'Buy now',
  buttonLink: '/rdr2',
  backgroundImage: '/img/red-dead-img.jpg'
}

describe('<Highlight />', () => {
  it('should render headings and button', () => {
    render(<Highlight {...props} />)

    expect(
      screen.getByRole('heading', { name: /heading 1/i })
    ).toBeInTheDocument()

    expect(
      screen.getByRole('heading', { name: /heading 2/i })
    ).toBeInTheDocument()

    expect(screen.getByRole('link', { name: /buy now/i })).toBeInTheDocument()
  })

  it('should render background image', () => {
    const { container } = render(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyle({
      backgroundImage: `url(${props.backgroundImage})`
    })
  })

  it('should rende float image', () => {
    render(<Highlight {...props} floatImage="/float-image.png" />)

    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      '/float-image.png'
    )
  })

  it('should render align right by default', () => {
    const { container } = render(<Highlight {...props} />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'floatImage content'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'right', {
      modifier: `${s.Content}`
    })
  })

  it('should render align left', () => {
    const { container } = render(<Highlight {...props} alignment="left" />)

    expect(container.firstChild).toHaveStyleRule(
      'grid-template-areas',
      "'content floatImage'"
    )

    expect(container.firstChild).toHaveStyleRule('text-align', 'left', {
      modifier: `${s.Content}`
    })
  })
})
