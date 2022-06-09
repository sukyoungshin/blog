import { ReactElement } from 'react';
import { StyledButton } from './Button.style';

interface Props {
  children: string | ReactElement;
  large?: boolean;
  active?: boolean;
  text?: boolean;
  onClick?: any;
}

const Button = ({ children, ...props }: Props) => {

  return (
    <StyledButton 
      large={props.large} 
      active={props.active}
      text={typeof children !== 'string'}
      onClick={props.onClick}
    >
      {children}
    </StyledButton>
  );
};

export default Button;