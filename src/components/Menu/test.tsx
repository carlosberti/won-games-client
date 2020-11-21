import { fireEvent, screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import Menu from '.'

describe('<Menu />', () => {
  it('should render the menu', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByLabelText(/open menu/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/search/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Open Shopping Cart/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /won games/i })).toBeInTheDocument()
  })

  it('should render the open/close mobile menu', () => {
    renderWithTheme(<Menu />)

    // selecionar menu
    const fullMenuElement = screen.getByRole('navigation', { hidden: true })

    // verificar se ele tá escondido
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })

    // clicar no botao de abrir e verificar se abriu
    fireEvent.click(screen.getByLabelText(/open menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('false')
    expect(fullMenuElement).toHaveStyle({ opacity: 1 })

    // clicar no botao de fechar e verificar se fechou
    fireEvent.click(screen.getByLabelText(/close menu/i))
    expect(fullMenuElement.getAttribute('aria-hidden')).toBe('true')
    expect(fullMenuElement).toHaveStyle({ opacity: 0 })
  })

  it('should show register box when logged out', () => {
    renderWithTheme(<Menu />)

    expect(screen.getByText(/Sign in/i)).toBeInTheDocument()
    expect(screen.getByText(/sign up/i)).toBeInTheDocument()
    expect(screen.queryByText(/my account/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/wishlist/i)).not.toBeInTheDocument()
  })

  it('should show wishlist and account when logged in', () => {
    renderWithTheme(<Menu username="Carlos" />)

    expect(screen.getByText(/my account/i)).toBeInTheDocument()
    expect(screen.getByText(/wishlist/i)).toBeInTheDocument()
    expect(screen.queryByText(/Sign in/i)).not.toBeInTheDocument()
    expect(screen.queryByText(/sign up/i)).not.toBeInTheDocument()
  })
})
