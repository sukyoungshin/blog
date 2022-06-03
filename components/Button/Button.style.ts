import styled, { css } from "styled-components";

export const StyledButton = styled.button<{
  cta?: boolean;
  active?: boolean;
}>`
  // common properties
  border: none;
  border-radius: 4px;  
    
  // inactive
  width: 88px;
  height: 32px;
  color: ${props => props.theme.colors.WHITE_200};
  background-color: ${props => props.theme.colors.NAVY};
  
  // active
  ${props => props.active && css`
    color: ${props => props.theme.colors.NAVY};
    background-color: ${props => props.theme.colors.WHITE_200};
  `}

  // CTA 버튼
  ${(props) => props.cta && css`
    width: 342px;
    height: 48px;
  `}
`;
