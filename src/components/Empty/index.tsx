import Button from 'components/Button'
import Link from 'next/link'
import * as s from './styles'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

const Empty = ({ title, description, hasLink }: EmptyProps) => (
  <s.Wrapper>
    <s.Image
      src="/img/empty.svg"
      alt="A gamer in a couch playing videogame"
      role="image"
    />

    <s.Title>{title}</s.Title>
    <s.description>{description}</s.description>

    {hasLink && (
      <Link href="/" passHref>
        <Button as="a">Go back to store</Button>
      </Link>
    )}
  </s.Wrapper>
)
export default Empty
