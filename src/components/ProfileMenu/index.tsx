import {
  AccountCircle,
  CreditCard,
  ExitToApp,
  FormatListBulleted
} from '@styled-icons/material-outlined'
import { signOut } from 'next-auth/client'
import Link from 'next/link'
import * as s from './styles'

export type ProfileMenuProps = {
  activeLink?: '/profile/me' | '/profile/cards' | '/profile/orders' | string
}

const ProfileMenu = ({ activeLink }: ProfileMenuProps) => (
  <s.Nav>
    <Link href="/profile/me" passHref>
      <s.Link isActive={activeLink === '/profile/me'} title="My profile">
        <AccountCircle size={24} />
        <span>My profile</span>
      </s.Link>
    </Link>

    <Link href="/profile/cards" passHref>
      <s.Link isActive={activeLink === '/profile/cards'} title="My cards">
        <CreditCard size={24} />
        <span>My cards</span>
      </s.Link>
    </Link>

    <Link href="/profile/orders" passHref>
      <s.Link isActive={activeLink === '/profile/orders'} title="My orders">
        <FormatListBulleted size={24} />
        <span>My orders</span>
      </s.Link>
    </Link>

    <s.Link role="button" onClick={() => signOut()}>
      <ExitToApp size={24} />
      <span>Sign out</span>
    </s.Link>
  </s.Nav>
)
export default ProfileMenu
