import 'match-media-mock'
import { render, fireEvent, screen } from 'utils/test-utils'

import Gallery from '.'

import mockItems from './mock'

describe('<Gallery />', () => {
  it('should render thumbnails as buttons', () => {
    render(<Gallery items={mockItems.slice(0, 2)} />)

    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    ).toHaveAttribute('src', mockItems[0].src)
    expect(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    ).toHaveAttribute('src', mockItems[1].src)
  })

  it('should handle open modal', () => {
    render(<Gallery items={mockItems.slice(0, 2)} />)

    // selecionar modal
    const modal = screen.getByLabelText('modal')

    // verificar se ele tá escondido
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0, pointerEvents: 'none' })

    // clicar no botao de abrir e verificar se abriu
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )
    expect(modal.getAttribute('aria-hidden')).toBe('false')
    expect(modal).toHaveStyle({ opacity: 1 })
  })

  it('should handle open modal with selected image', async () => {
    render(<Gallery items={mockItems.slice(0, 2)} />)

    // clicar na thumbnail
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 2/i })
    )

    const img = await screen.findByRole('img', { name: /Gallery Image 2/i })

    expect(img.parentElement?.parentElement).toHaveClass('slick-active')
  })

  it('should handle close modal when overlay or button is clicked', () => {
    render(<Gallery items={mockItems.slice(0, 2)} />)

    // selecionar modal
    const modal = screen.getByLabelText('modal')

    // clicar no botao de abrir
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    // clicar no botao de fechar
    fireEvent.click(screen.getByRole('button', { name: /close modal/i }))
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })

  it('should handle close modal when esc is pressed', () => {
    const { container } = render(<Gallery items={mockItems.slice(0, 2)} />)

    // selecionar modal
    const modal = screen.getByLabelText('modal')

    // clicar na thumbnail
    fireEvent.click(
      screen.getByRole('button', { name: /Thumb - Gallery Image 1/i })
    )

    // pressionar tecla esc para fechar modal
    fireEvent.keyUp(container, { key: 'Escape' })
    expect(modal.getAttribute('aria-hidden')).toBe('true')
    expect(modal).toHaveStyle({ opacity: 0 })
  })
})
