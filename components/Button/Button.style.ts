import styled from "styled-components";

export const ButtonWithText = styled.button<{
  large?: boolean;
  active?: boolean;
}>`
  border-radius: 4px;
  font-size: ${(props) => props.theme.fontSize.PARAGRAPH2};

  // size
  width: ${(props) => props.large? '342px' : '88px'};
  height: ${(props) => props.large? '48px' : '32px'};

  // active & inactive
  color: ${(props) => props.active? props.theme.colors.WHITE_200 : props.theme.colors.NAVY};
  background-color: ${(props) => props.active? props.theme.colors.NAVY : props.theme.colors.WHITE_200};
`;

export const ButtonWithSVGIcon = styled.button<{
  size?: number;
  active?: boolean;
}>`
  border-radius: 4px;
  color: ${(props) => props.theme.colors.NAVY};
  font-size: ${(props) => props.theme.fontSize.PARAGRAPH2};
  background-color: transparent;

  // size
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;

  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-gap: 8px;
  gap: 8px;

  svg {
    color: ${(props) => props.theme.colors.NAVY};
  }
`;

export const ButtonWithTextAndSVGIcon = styled.button<{
  small?: boolean;
}>`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-gap: 8px;
  gap: 8px;
  
  // size
  width: ${(props) => props.small? 55 : 88}px;
  height: 32px;

  font-size: ${(props) => props.theme.fontSize.PARAGRAPH2};
  border-radius: 4px;
  background-color: rgba(255,255,255,0.1); // FIXME
`;