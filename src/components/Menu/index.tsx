import { useState } from 'react'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import { ShoppingCart as ShoppingCartIcon } from '@styled-icons/material-outlined/ShoppingCart'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import Link from 'next/link'

import * as s from './styles'
import Logo from 'components/Logo'
import Button from 'components/Button'
import MediaMatch from 'components/MediaMatch'

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
        <Logo hideOnMobile />
      </s.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <s.MenuNav>
          <s.MenuLink href="#">Home</s.MenuLink>
          <s.MenuLink href="#">Explore</s.MenuLink>
        </s.MenuNav>
      </MediaMatch>

      <s.MenuGroup>
        <s.IconWrapper>
          <SearchIcon aria-label="Search" />
        </s.IconWrapper>
        <s.IconWrapper>
          <ShoppingCartIcon aria-label="Open Shopping Cart" />
        </s.IconWrapper>
        {!username && (
          <MediaMatch greaterThan="medium">
            <Link href="/sign-in" passHref>
              <Button as="a">Sing in</Button>
            </Link>
          </MediaMatch>
        )}
      </s.MenuGroup>

      <s.MenuFull isOpen={isOpen} aria-hidden={!isOpen}>
        <CloseIcon aria-label="Close Menu" onClick={() => setIsOpen(false)} />
        <s.MenuNav>
          <s.MenuLink href="#">Home</s.MenuLink>
          <s.MenuLink href="#">Explore</s.MenuLink>
          {!!username && (
            <>
              <s.MenuLink href="#">My account</s.MenuLink>
              <s.MenuLink href="#">Wishlist</s.MenuLink>
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
