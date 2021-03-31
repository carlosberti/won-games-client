import { FavoriteBorder } from '@styled-icons/material-outlined'
import Button from 'components/Button'
import CartButton from 'components/CartButton'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import formatPrice from 'utils/format-price'
import * as s from './styles'

export type GameInfoProps = {
  id: string
  title: string
  description: string
  price: number
}

const GameInfo = ({ id, title, description, price }: GameInfoProps) => (
  <s.Wrapper>
    <Heading color="black" lineBottom>
      {title}
    </Heading>
    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>
    <s.Description>{description}</s.Description>
    <s.ButtonWrapper>
      <CartButton id={id} size="large" hasText />
      <Button icon={<FavoriteBorder />} size="large" minimal>
        Wishlist
      </Button>
    </s.ButtonWrapper>
  </s.Wrapper>
)
export default GameInfo
