import CartIcon from 'components/CartIcon'
import CartList from 'components/CartList'
import Dropdown from 'components/Dropdown'
import * as s from './styles'

const CartDropdown = () => (
  <s.Wrapper>
    <Dropdown title={<CartIcon />}>
      <CartList hasButton />
    </Dropdown>
  </s.Wrapper>
)
export default CartDropdown
