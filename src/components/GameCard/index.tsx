import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import Link from 'next/link'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import * as s from './styles'
import formatPrice from 'utils/format-price'
import CartButton from 'components/CartButton'

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
  id: string
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
  onFav,
  id
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
        <CartButton id={id} />
      </s.BuyBox>
    </s.Content>
  </s.Wrapper>
)
export default GameCard
