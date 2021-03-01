import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import Link from 'next/link'

import * as s from './styles'
import Logo from 'components/Logo'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'
import CartDropdown from 'components/CartDropdown'
import CartIcon from 'components/CartIcon'
import UserDropdown from 'components/UserDropdown'

export type MenuProps = {
  username?: string
}

const Menu = ({ username }: MenuProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <s.Wrapper>
      <MediaMatch lessThan="medium">
        <s.IconWrapper onClick={() => setIsOpen(true)}>
          <MenuIcon aria-label="Open Menu" />
        </s.IconWrapper>
      </MediaMatch>

      <s.LogoWrapper>
        <Link href="/" passHref>
          <a>
            <Logo hideOnMobile />
          </a>
        </Link>
      </s.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <s.MenuNav>
          <Link href="/" passHref>
            <s.MenuLink>Home</s.MenuLink>
          </Link>
          <Link href="/games" passHref>
            <s.MenuLink>Explore</s.MenuLink>
          </Link>
        </s.MenuNav>
      </MediaMatch>

      <s.MenuGroup>
        <s.IconWrapper>
          <SearchIcon aria-label="Search" />
        </s.IconWrapper>
        <s.IconWrapper>
          <MediaMatch greaterThan="medium">
            <CartDropdown />
          </MediaMatch>
          <MediaMatch lessThan="medium">
            <Link href="/cart" passHref>
              <a>
                <CartIcon />
              </a>
            </Link>
          </MediaMatch>
        </s.IconWrapper>
        <MediaMatch greaterThan="medium">
          {!username ? (
            <Link href="/sign-in" passHref>
              <Button as="a">Sing in</Button>
            </Link>
          ) : (
            <UserDropdown username={username} />
          )}
        </MediaMatch>
      </s.MenuGroup>

      <s.MenuFull isOpen={isOpen} aria-hidden={!isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <s.MenuNav>
          <Link href="/" passHref>
            <s.MenuLink href="#">Home</s.MenuLink>
          </Link>
          <Link href="/games" passHref>
            <s.MenuLink>Explore</s.MenuLink>
          </Link>
          {!!username && (
            <>
              <Link href="/profile/me" passHref>
                <s.MenuLink>My profile</s.MenuLink>
              </Link>
              <Link href="/wishlist" passHref>
                <s.MenuLink>Wishlist</s.MenuLink>
              </Link>
            </>
          )}
        </s.MenuNav>
        {!username && (
          <s.RegisterBox>
            <Link href="/sign-in" passHref>
              <Button fullWidth size="large" as="a">
                Sign in
              </Button>
            </Link>
            <span>or</span>
            <Link href="/sign-up" passHref>
              <s.CreateAccount title="Sign Up">Sign Up</s.CreateAccount>
            </Link>
          </s.RegisterBox>
        )}
      </s.MenuFull>
    </s.Wrapper>
  )
}
export default Menu
