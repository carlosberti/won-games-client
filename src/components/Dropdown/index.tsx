import { useState } from 'react'
import * as s from './styles'

export type DropdownProps = {
  title: React.ReactNode
  children: React.ReactNode
}

const Dropdown = ({ title, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    setIsOpen(!isOpen)
  }

  return (
    <s.Wrapper isOpen={isOpen}>
      <s.Title onClick={handleClick}>{title}</s.Title>

      <s.Content aria-hidden={!isOpen}>{children}</s.Content>
    </s.Wrapper>
  )
}
export default Dropdown
