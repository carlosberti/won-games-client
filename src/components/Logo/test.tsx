import { screen } from '@testing-library/react'

import Logo from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Logo />', () => {
  it('should render a white label by default', () => {
    // renderizar o componente 'render'
    // selecionar o elemento a ser testadp 'screen' (queries) - getByLabel ...
    // expect - assertion - asserção - comparação - análise (espero que renderize a logo branca)

    renderWithTheme(<Logo />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#FAFAFA'
    })
  })

  it('should render a black label when color is passed', () => {
    renderWithTheme(<Logo color="black" />)
    expect(screen.getByLabelText(/Won Games/i).parentElement).toHaveStyle({
      color: '#030517'
    })
  })
})
