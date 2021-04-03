import { Container } from 'components/Container'
import Menu from 'components/Menu'
import Footer from 'components/Footer'

import * as s from './styles'
import { useSession } from 'next-auth/client'

export type BaseTemplateProps = {
  children: React.ReactNode
}

const Base = ({ children }: BaseTemplateProps) => {
  const [session] = useSession()

  return (
    <s.Wrapper>
      <Container>
        <Menu username={session?.user?.name} />
      </Container>
      <s.Content>{children}</s.Content>
      <s.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </s.SectionFooter>
    </s.Wrapper>
  )
}

export default Base
