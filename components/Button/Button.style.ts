import styled, { css } from "styled-components";

export const StyledButton = styled.button<{
  large?: boolean;
  active?: boolean;
}>`
  border: none;
  border-radius: 4px;  

  // size
  width: ${(props) => props.large? '342px' : '88px'};
  height: ${(props) => props.large? '48px' : '32px'};

  // active & inactive
  color: ${(props) => props.active? props.theme.colors.WHITE_200 : props.theme.colors.NAVY};
  background-color: ${(props) => props.active? props.theme.colors.NAVY : props.theme.colors.WHITE_200};
`;
