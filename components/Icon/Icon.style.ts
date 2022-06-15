import styled, { css } from "styled-components";

export const StyledNormalIcon = styled.span<{
  size?: number;
  active?: boolean;
  noBorderRadius?: boolean;
}>`
  // default
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.4s; // FIXME

  // active & inactive
  color: ${(props) => props.active? props.theme.colors.NAVY : props.theme.colors.WHITE_300};
  background-color: none;


  // size
  ${(props) => props.size && css`  
    width: ${props.size}px;
    height: ${props.size}px;
    border-radius: ${props.noBorderRadius ? null : (props.size / 2)};

    svg {
      // svg size : 16x16 (minimum)
      width: ${props.size-16 > 16 ? props.size-16 : 16}px;
      height: ${props.size-16 > 16 ? props.size-16 : 16}px;
    }
  `}
`;