import { ReactElement } from "react";
import { StyledNormalIcon } from "./Icon.style";

interface Props {
  children: ReactElement;
  size: number;
  active?: boolean;
  noBorderRadius?: boolean;
}

const Icon = ({children, ...props}: Props) => {  
  return (
    <StyledNormalIcon 
      size={props.size}
      active={props.active}
      noBorderRadius={props.noBorderRadius}
    >
      {children}
    </StyledNormalIcon>
  )
};

export default Icon;