import { ChevronDown } from '@styled-icons/boxicons-regular'
import {
  AccountCircle,
  FavoriteBorder,
  ExitToApp
} from '@styled-icons/material-outlined'
import Dropdown from 'components/Dropdown'
import { signOut } from 'next-auth/client'
import Link from 'next/link'

import * as s from './styles'

export type UserDropdownProps = {
  username: string
}

const UserDropdown = ({ username }: UserDropdownProps) => (
  <Dropdown
    title={
      <>
        <AccountCircle size={24} />
        <s.Username>{username}</s.Username>
        <ChevronDown size={24} />
      </>
    }
  >
    <s.Nav>
      <Link href="/profile/me" passHref>
        <s.Link>
          <AccountCircle />
          <span>My profile</span>
        </s.Link>
      </Link>
      <Link href="/wishlist" passHref>
        <s.Link>
          <FavoriteBorder />
          <span>Wishlist</span>
        </s.Link>
      </Link>
      <s.Link role="button" onClick={() => signOut()}>
        <ExitToApp />
        <span>Sign out</span>
      </s.Link>
    </s.Nav>
  </Dropdown>
)

export default UserDropdown
