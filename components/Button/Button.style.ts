import styled, { css } from "styled-components";

export const StyledButton = styled.button<{
  large?: boolean;
  active?: boolean;
}>`
  // default (small-sized button)
  border: none;
  border-radius: 4px;  
  width: 88px;
  height: 32px;

  // large-sized button
  ${(props) => props.large && css`
    width: 342px;
    height: 48px;
  `}

  // button action status
  color: ${props => props.active? props.theme.colors.NAVY : props.theme.colors.WHITE_200};
  background-color: ${props => props.active? props.theme.colors.WHITE_200 : props.theme.colors.NAVY};
`;
