import { useRouter } from "next/router";
import { ReactElement } from "react";
import { StyledIcon } from "./Icon.style";

interface Props {
  children: ReactElement;
  size: number;
  route?: string;
}

const Icon = ({children, ...props}: Props) => {  
  const router = useRouter();

  return (
    <StyledIcon 
      size={props.size}
      active={props.route === router.route}
    >
      {children}
    </StyledIcon>
  )
};

export default Icon;