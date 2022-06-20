import { ReactElement } from 'react'
import { StyledNormalIcon } from './Icon.style'

interface Props {
  children: ReactElement
  size: number
  active?: boolean
  borderRadius?: boolean
}

const Icon = ({ children, ...props }: Props) => {
  return (
    <StyledNormalIcon
      size={props.size}
      active={props.active}
      borderRadius={props.borderRadius}
    >
      {children}
    </StyledNormalIcon>
  )
}

export default Icon
