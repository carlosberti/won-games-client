import { useState } from 'react'
import { Add, ShoppingCart } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import Heading from 'components/Heading'
import Radio from 'components/Radio'
import * as s from './styles'

export type PaymentOptionsProps = {
  cards?: PaymentCard[]
  handlePayment: () => void
}

export type PaymentCard = {
  number: string
  flag: string
  img: string
}

const PaymentOptions = ({ cards, handlePayment }: PaymentOptionsProps) => {
  const [checked, setChecked] = useState(false)

  return (
    <s.Wrapper>
      <s.Body>
        <Heading color="black" size="small" lineBottom>
          Payment
        </Heading>

        <s.CardsList>
          {cards?.map((card) => (
            <s.CardItem key={card.number}>
              <s.CardInfo>
                <img src={card.img} alt={card.flag} />
                {card.number}
              </s.CardInfo>
              <Radio
                name="credit-card"
                id={card.number}
                value={card.number}
                onCheck={() => setChecked(true)}
              />
            </s.CardItem>
          ))}

          <s.AddCard role="button">
            <Add size={14} /> Add a new credit card
          </s.AddCard>
        </s.CardsList>
      </s.Body>
      <s.Footer>
        <Button as="a" fullWidth minimal>
          Continue shopping
        </Button>
        <Button
          fullWidth
          icon={<ShoppingCart />}
          onClick={handlePayment}
          disabled={!checked}
        >
          Buy now
        </Button>
      </s.Footer>
    </s.Wrapper>
  )
}

export default PaymentOptions
