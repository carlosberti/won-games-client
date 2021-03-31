import { useState } from 'react'
import * as s from './styles'

export type DropdownProps = {
  title: React.ReactNode
  children: React.ReactNode
}

const Dropdown = ({ title, children }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClick = () => {
    const body = document.body

    if (!isOpen) {
      body.style.overflowY = 'hidden'
    } else {
      body.style.overflowY = 'inherit'
    }

    setIsOpen(!isOpen)
  }

  return (
    <s.Wrapper isOpen={isOpen}>
      <s.Title onClick={handleClick}>{title}</s.Title>

      <s.Content aria-hidden={!isOpen}>{children}</s.Content>
      <s.Overlay aria-hidden={!isOpen} onClick={handleClick} />
    </s.Wrapper>
  )
}
export default Dropdown
