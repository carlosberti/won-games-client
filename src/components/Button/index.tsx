import * as s from './styles'

export type ButtonProps = {
  children?: React.ReactNode
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
}

const Button = ({
  children,
  size = 'medium',
  fullWidth = false
}: ButtonProps) => (
  <s.Wrapper size={size} fullWidth={fullWidth}>
    {!!children && <span>{children}</span>}
  </s.Wrapper>
)
export default Button
