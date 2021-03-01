import Button from 'components/Button'
import GameItem, { GameItemProps } from 'components/GameItem'
import Link from 'next/link'
import * as s from './styles'

export type CartListProps = {
  items: GameItemProps[]
  total: string
  hasButton?: boolean
}

const CartList = ({ items, total, hasButton = false }: CartListProps) => (
  <s.Wrapper>
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
  </s.Wrapper>
)
export default CartList
