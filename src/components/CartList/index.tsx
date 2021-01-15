import GameItem, { GameItemProps } from 'components/GameItem'
import * as s from './styles'

export type CartListProps = {
  items: GameItemProps[]
  total: string
}

const CartList = ({ items, total }: CartListProps) => (
  <s.Wrapper>
    {items.map((item) => (
      <GameItem key={item.title} {...item} />
    ))}

    <s.Footer>
      Total: <s.Total>{total}</s.Total>
    </s.Footer>
  </s.Wrapper>
)
export default CartList
