import { Download } from '@styled-icons/boxicons-solid/Download'
import { useCart } from 'hooks/use-cart'

import * as s from './styles'

export type PaymentInfoProps = {
  number: string
  flag: string
  img: string
  purchaseDate: string
}

export type GameItemProps = {
  id: string
  img: string
  title: string
  price: string
  downloadLink?: string
  paymentInfo?: PaymentInfoProps
}

const GameItem = ({
  id,
  img,
  title,
  price,
  downloadLink,
  paymentInfo
}: GameItemProps) => {
  const { isInCart, removeFromCart } = useCart()

  return (
    <s.Wrapper>
      <s.GameContent>
        <s.ImageBox>
          <img src={img} alt={title} />
        </s.ImageBox>

        <s.Content>
          <s.Title>
            {title}
            {!!downloadLink && (
              <s.DownloadLink
                href={downloadLink}
                target="_blank"
                aria-label={`Get ${title} here`}
              >
                <Download size={22} />
              </s.DownloadLink>
            )}
          </s.Title>
          <s.Group>
            <s.Price>{price}</s.Price>
            {isInCart(id) && (
              <s.Remove onClick={() => removeFromCart(id)}>Remove</s.Remove>
            )}
          </s.Group>
        </s.Content>
      </s.GameContent>
      {!!paymentInfo && (
        <s.PaymentContent>
          <p>{paymentInfo.purchaseDate}</p>
          <s.CardInfo>
            <span>{paymentInfo.number}</span>
            <img src={paymentInfo.img} alt={paymentInfo.flag} />
          </s.CardInfo>
        </s.PaymentContent>
      )}
    </s.Wrapper>
  )
}
export default GameItem
