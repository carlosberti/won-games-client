import { Container } from 'components/Container'
import Menu from 'components/Menu'
import Footer from 'components/Footer'

import * as s from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <s.Wrapper>
    <Container>
      <Menu username="Carlos" />
    </Container>
    <s.Content>{children}</s.Content>
    <s.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </s.SectionFooter>
  </s.Wrapper>
)
export default Base
