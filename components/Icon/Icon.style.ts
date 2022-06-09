import styled, { css } from "styled-components";

export const StyledIcon = styled.span<{
  size?: number;
  active?: boolean;
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
  background-color: ${(props) => props.active? props.theme.colors.WHITE_300 : null};

  // size
  ${(props) => props.size && css`  
    width: ${props.size}px;
    height: ${props.size}px;
    border-radius: ${props.size / 2}px;

    svg {
      // svg size : 16x16 (minimum)
      width: ${props.size-16 > 16 ? props.size-16 : 16}px;
      height: ${props.size-16 > 16 ? props.size-16 : 16}px;
    }
  `}
`;

