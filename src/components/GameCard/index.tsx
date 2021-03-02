import {
  AddShoppingCart,
  Favorite,
  FavoriteBorder
} from '@styled-icons/material-outlined'
import Link from 'next/link'
import Button from 'components/Button'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import * as s from './styles'
import formatPrice from 'utils/format-price'

export type GameCardProps = {
  slug: string
  title: string
  developer: string
  img: string
  price: number
  promotionalPrice?: number
  favorite?: boolean
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
  onFav?: () => void
}

const GameCard = ({
  slug,
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
    <Link href={`game/${slug}`} passHref>
      <s.ImageBox>
        <img src={img} alt={title} />
      </s.ImageBox>
    </Link>
    <s.Content>
      <Link href={`game/${slug}`} passHref>
        <s.Info>
          <s.Title>{title}</s.Title>
          <s.Developer>{developer}</s.Developer>
        </s.Info>
      </Link>
      <s.FavButton role="button" onClick={onFav}>
        {favorite ? (
          <Favorite aria-label="Remove from wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to wishlist" />
        )}
      </s.FavButton>
      <s.BuyBox>
        {!!promotionalPrice && (
          <s.Price isPromotional>{formatPrice(price)}</s.Price>
        )}
        <s.Price>{formatPrice(promotionalPrice || price)}</s.Price>
        <Button icon={<AddShoppingCart />} size="small" />
      </s.BuyBox>
    </s.Content>
  </s.Wrapper>
)
export default GameCard
