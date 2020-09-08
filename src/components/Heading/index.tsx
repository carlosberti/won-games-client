import * as s from './styles'

export type HeadingProps = {
  children: React.ReactNode
  color?: 'white' | 'black'
  lineLeft?: boolean
  lineBottom?: boolean
}

const Heading = ({
  children,
  color = 'white',
  lineLeft = false,
  lineBottom = false
}: HeadingProps) => (
  <s.Wrapper color={color} lineLeft={lineLeft} lineBottom={lineBottom}>
    {children}
  </s.Wrapper>
)
export default Heading
