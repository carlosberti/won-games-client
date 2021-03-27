import { ShoppingCart } from '@styled-icons/material-outlined'
import { useCart } from 'hooks/use-cart'
import * as s from './styles'

const CartIcon = () => {
  const { quantity } = useCart()

  return (
    <s.Wrapper>
      {quantity > 0 && <s.Badge aria-label="Cart Items">{quantity}</s.Badge>}
      <ShoppingCart aria-label="Shopping Cart" />
    </s.Wrapper>
  )
}
export default CartIcon
