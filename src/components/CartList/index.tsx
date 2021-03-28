import Button from 'components/Button'
import Empty from 'components/Empty'
import GameItem from 'components/GameItem'
import { useCart } from 'hooks/use-cart'
import Link from 'next/link'
import * as s from './styles'

export type CartListProps = {
  hasButton?: boolean
}

const CartList = ({ hasButton = false }: CartListProps) => {
  const { items, total } = useCart()

  return (
    <s.Wrapper isEmpty={!items.length}>
      {items.length ? (
        <>
          {items.map((item) => (
            <GameItem key={item.title} {...item} />
          ))}

          <s.Footer>
            {!hasButton && <span>Total:</span>}
            <s.Total>{total}</s.Total>
            {hasButton && (
              <Link href="/cart">
                <Button as="a">Buy it now</Button>
              </Link>
            )}
          </s.Footer>
        </>
      ) : (
        <Empty
          title="Your cart is empty"
          description="Go back to the store and explore great games and offers"
          hasLink
        />
      )}
    </s.Wrapper>
  )
}
export default CartList
