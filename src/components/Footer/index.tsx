import Link from 'next/link'

import Heading from 'components/Heading'
import Logo from 'components/Logo'
import * as s from './styles'

const Footer = () => (
  <s.Wrapper>
    <Logo color="black" />
    <s.Content>
      <s.Column>
        <Heading color="black" size="small" lineBottom lineColor="secondary">
          Contact us
        </Heading>

        <a href="mail:tosac@wongames.com">sac@wongames.com</a>
      </s.Column>
      <s.Column>
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Follow us
        </Heading>

        <nav aria-labelledby="social media">
          <a
            href="https://www.instagram.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </s.Column>

      <s.Column aria-labelledby="footer resources">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Links
        </Heading>
        <Link href="#">
          <a>Home</a>
        </Link>
        <Link href="#">
          <a>Store</a>
        </Link>
        <Link href="#">
          <a>Buscar</a>
        </Link>
      </s.Column>

      <s.Column aria-labelledby="footer contact">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Location
        </Heading>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem ipsum</span>
        <span>Lorem, ipsum dolor</span>
      </s.Column>
    </s.Content>
    <s.Copyright>Won Games 2020 © All rights reserved.</s.Copyright>
  </s.Wrapper>
)
export default Footer
