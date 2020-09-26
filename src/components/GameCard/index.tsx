import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder
} from '@styled-icons/material-outlined'
import Button from 'components/Button'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import * as s from './styles'

export type GameCardProps = {
  title: string
  developer: string
  img: string
  price: string
  promotionalPrice?: string
  favorite?: boolean
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
  onFav?: () => void
}

const GameCard = ({
  title,
  developer,
  img,
  price,
  promotionalPrice,
  favorite = false,
  ribbon,
  ribbonColor = 'primary',
  ribbonSize = 'small',
  onFav
}: GameCardProps) => (
  <s.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}
    <s.ImageBox>
      <img src={img} alt={title} />
    </s.ImageBox>
    <s.Content>
      <s.Info>
        <s.Title>{title}</s.Title>
        <s.Developer>{developer}</s.Developer>
      </s.Info>
      <s.FavButton role="button" onClick={onFav}>
        {favorite ? (
          <Favorite aria-label="Remove from wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to wishlist" />
        )}
      </s.FavButton>
      <s.BuyBox>
        {!!promotionalPrice && <s.Price isPromotional>{price}</s.Price>}
        <s.Price>{promotionalPrice || price}</s.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </s.BuyBox>
    </s.Content>
  </s.Wrapper>
)
export default GameCard
