import Base from 'templates/Base'
import { Container } from 'components/Container'
import * as s from './styles'
import Heading from 'components/Heading'
import { Divider } from 'components/Divider'
import Showcase from 'components/Showcase'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import CartList, { CartListProps } from 'components/CartList'
import PaymentOptions, { PaymentOptionsProps } from 'components/PaymentOptions'

export type CartProps = {
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
  recommendedTitle: string
} & CartListProps &
  Pick<PaymentOptionsProps, 'cards'>

const Cart = ({
  recommendedGames,
  recommendedHighlight,
  recommendedTitle,
  cards
}: CartProps) => {
  const handlePayment = () => ({})

  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary">
          My cart
        </Heading>
        <s.Content>
          <CartList />

          <PaymentOptions cards={cards} handlePayment={handlePayment} />
        </s.Content>
        <Divider />
      </Container>

      <Showcase
        title={recommendedTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}
export default Cart
