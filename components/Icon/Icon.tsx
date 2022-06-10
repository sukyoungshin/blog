import { useRouter } from "next/router";
import { ReactElement } from "react";
import { StyledIcon, StyledNormalIcon } from "./Icon.style";

interface Props {
  children: ReactElement;
  size: number;
  route?: string;
  active?: boolean;
}

const Icon = ({children, ...props}: Props) => {  
  const router = useRouter();

  // 부모요소에서 route요소를 내려준 경우 (Toolbar)
  if (props.route) {
    return (
      <StyledIcon 
        size={props.size}
        active={props.route === router.route}
      >
        {children}
      </StyledIcon>
    )
  } else {
    // 부모요소에서 route요소를 내려주지 않은 경우
    return (
      <StyledNormalIcon 
        size={props.size}
        active={props.active}
      >
        {children}
      </StyledNormalIcon>
    )
  };

};

export default Icon;