import { useState } from 'react'
import { InputHTMLAttributes } from 'react'
import * as s from './styles'

export type CheckBoxProps = {
  onCheck?: (status: boolean) => void
  label?: string
  labelFor?: string
  labelColor?: 'white' | 'black'
  isChecked?: boolean
  value?: string | ReadonlyArray<string> | number
} & InputHTMLAttributes<HTMLInputElement>

const CheckBox = ({
  onCheck,
  label,
  labelFor = '',
  labelColor = 'white',
  isChecked = false,
  value,
  ...props
}: CheckBoxProps) => {
  const [checked, setChecked] = useState(isChecked)

  const onChange = () => {
    const status = !checked
    setChecked(status)

    if (onCheck) {
      onCheck(status)
    }
  }

  return (
    <s.Wrapper>
      <s.Input
        onChange={onChange}
        id={labelFor}
        type="checkbox"
        checked={checked}
        value={value}
        {...props}
      />
      {!!label && (
        <s.Label htmlFor={labelFor} labelColor={labelColor}>
          {label}
        </s.Label>
      )}
    </s.Wrapper>
  )
}
export default CheckBox
