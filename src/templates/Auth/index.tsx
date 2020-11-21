import Heading from 'components/Heading'
import Logo from 'components/Logo'
import Link from 'next/link'
import * as s from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <s.Wrapper>
    <s.BannerBlock>
      <s.BannerContent>
        <Link href="/">
          <a>
            <Logo id="banner" />
          </a>
        </Link>
        <div>
          <Heading size="huge">All your favorite games in one place</Heading>
          <s.Subtitle>
            <strong>WON</strong> is the best and most complete gaming platform
          </s.Subtitle>
        </div>

        <s.Footer>Won Games 2020 © Todos os Direitos Reservados</s.Footer>
      </s.BannerContent>
    </s.BannerBlock>

    <s.Content>
      <s.ContentWrapper>
        <Link href="/">
          <a>
            <Logo id="content" color="black" size="large" />
          </a>
        </Link>
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>
        {children}
      </s.ContentWrapper>
    </s.Content>
  </s.Wrapper>
)
export default Auth
