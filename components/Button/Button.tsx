import { ReactElement } from 'react';
import { ButtonWithSVGIcon, ButtonWithText, ButtonWithTextAndSVGIcon } from './Button.style';

interface Props {
  children: string | ReactElement;
  large?: boolean;
  active?: boolean;
  svgAndText?: boolean;
  onClick?: any;
  size?: number;
  small?: boolean;
  handleMode?: Function;
}

const Button = ({ children, ...props }: Props) => {
  // Text Only
  if (typeof children === 'string') {
    return (
      <ButtonWithText large={props.large} active={props.active} onClick={props.onClick}>
        {children}
      </ButtonWithText>
    );
  }

  // SVG And Text
  if (typeof children !== 'string' && props.svgAndText) {
    return (
      <ButtonWithTextAndSVGIcon small={props.small} onClick={props.onClick}>
        {children}
      </ButtonWithTextAndSVGIcon>
    );
  }

  // SVG Only
  if (typeof children !== 'string') {
    return (
      <ButtonWithSVGIcon size={props.size} active={props.active} onClick={props.onClick}>
        {children}
      </ButtonWithSVGIcon>
    );
  }
};

export default Button;
