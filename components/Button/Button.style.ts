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

  // inactive
  color: ${(props) => props.theme.colors.NAVY};
  background-color: ${(props) => props.theme.colors.WHITE_200};

  // active
  ${(props) => props.active && css`
    color: ${props.theme.colors.WHITE_200};
    background-color: ${props.theme.colors.NAVY};  
  `}
`;
