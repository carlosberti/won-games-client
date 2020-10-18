import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithTheme } from 'utils/tests/helpers'

import CheckBox from '.'

describe('<CheckBox />', () => {
  it('should render with label', () => {
    renderWithTheme(<CheckBox label="checkbox label" labelFor="check" />)

    expect(screen.getByRole('checkbox')).toBeInTheDocument()
    expect(screen.getByLabelText(/checkbox label/i)).toBeInTheDocument()
    expect(screen.getByText(/checkbox label/i)).toHaveAttribute('for', 'check')
  })

  it('should not render label if not passed', () => {
    renderWithTheme(<CheckBox />)

    expect(screen.queryByLabelText('Checkbox')).not.toBeInTheDocument()
  })

  it('should with black label', () => {
    renderWithTheme(
      <CheckBox label="checkbox label" labelFor="check" labelColor="black" />
    )

    expect(screen.getByText(/checkbox label/i)).toHaveStyle({
      color: '#030517'
    })
  })

  it('should dispatch onCheck when status change', async () => {
    const onCheck = jest.fn()

    renderWithTheme(
      <CheckBox onCheck={onCheck} label="checkbox label" labelFor="check" />
    )

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(true)
  })

  it('should dispatch onCheck when status change', async () => {
    const onCheck = jest.fn()

    renderWithTheme(
      <CheckBox
        onCheck={onCheck}
        label="checkbox label"
        labelFor="check"
        isChecked
      />
    )

    expect(onCheck).not.toHaveBeenCalled()

    userEvent.click(screen.getByRole('checkbox'))
    await waitFor(() => {
      expect(onCheck).toHaveBeenCalledTimes(1)
    })
    expect(onCheck).toHaveBeenCalledWith(false)
  })

  it('should be accessible with tab', () => {
    renderWithTheme(<CheckBox label="Checkbox" labelFor="Checkbox" />)

    expect(document.body).toHaveFocus()

    userEvent.tab()
    expect(screen.getByLabelText(/checkbox/i)).toHaveFocus()
  })
})
