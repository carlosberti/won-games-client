import { ShoppingCart } from '@styled-icons/material-outlined'
import * as s from './styles'

export type CartIconProps = {
  quantity?: number
}

const CartIcon = ({ quantity = 0 }: CartIconProps) => (
  <s.Wrapper>
    {quantity > 0 && <s.Badge aria-label="Cart Items">{quantity}</s.Badge>}
    <ShoppingCart aria-label="Shopping Cart" />
  </s.Wrapper>
)
export default CartIcon
