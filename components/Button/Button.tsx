import { StyledButton } from './Button.style';

interface Props {
  children: string;
  large?: boolean;
  active?: boolean;
}

const Button = ({ children, ...props }: Props) => {
  return (
    <StyledButton 
      large={props.large} 
      active={props.active}
    >
      {children}
    </StyledButton>
  );
};

export default Button;