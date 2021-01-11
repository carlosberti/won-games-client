import { Container } from 'components/Container'
import Menu from 'components/Menu'
import Footer from 'components/Footer'

import * as s from './styles'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => (
  <section>
    <Container>
      <Menu />
    </Container>
    {children}
    <s.SectionFooter>
      <Container>
        <Footer />
      </Container>
    </s.SectionFooter>
  </section>
)
export default Base