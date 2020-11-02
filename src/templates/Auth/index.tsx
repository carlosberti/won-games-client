import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as s from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <s.Wrapper>
    <s.BannerBlock>
      <s.BannerContent>
        <Logo id="banner" />
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
        <Logo id="content" color="black" size="large" />
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>
        {children}
      </s.ContentWrapper>
    </s.Content>
  </s.Wrapper>
)
export default Auth
