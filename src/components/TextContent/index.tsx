import Heading from 'components/Heading'
import * as s from './styles'

export type TextContentProps = {
  title?: string
  content: string
}

const TextContent = ({ title, content }: TextContentProps) => (
  <s.Wrapper>
    {!!title && (
      <Heading lineLeft lineColor="secondary">
        {title}
      </Heading>
    )}
    <div dangerouslySetInnerHTML={{ __html: content }} />
  </s.Wrapper>
)
export default TextContent
