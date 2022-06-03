import { StyledButton } from './Button.style';

interface Props {
  children: string;
  cta?: boolean;
  active?: boolean;
}

const Button = ({ children, ...props }: Props) => {
  return (
    <StyledButton 
      cta={props.cta} 
      active={props.active}
    >
      {children}
    </StyledButton>
  );
};

export default Button;