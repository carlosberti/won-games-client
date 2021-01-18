import Heading from 'components/Heading'
import { PaymentCard } from 'components/PaymentOptions'
import * as s from './styles'

export type CardsListProps = {
  cards?: PaymentCard[]
}

const CardsList = ({ cards }: CardsListProps) => (
  <>
    <Heading lineBottom color="black" size="small">
      My cards
    </Heading>

    {cards?.map((card) => (
      <s.Card key={card.number}>
        <img src={card.img} alt={card.flag} />
        <span>{card.number}</span>
      </s.Card>
    ))}
  </>
)
export default CardsList
