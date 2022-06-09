import styled, { css } from "styled-components";

export const StyledButton = styled.button<{
  large?: boolean;
  active?: boolean;
  text?: boolean;
}>`
  border: none;
  border-radius: 4px;
  font-size: ${(props) => props.theme.fontSize.PARAGRAPH2};
  cursor: pointer;

  // size
  width: ${(props) => props.large? '342px' : '88px'};
  height: ${(props) => props.large? '48px' : '32px'};

  // active & inactive
  color: ${(props) => props.active? props.theme.colors.WHITE_200 : props.theme.colors.NAVY};
  background-color: ${(props) => props.active? props.theme.colors.NAVY : props.theme.colors.WHITE_200};

  // SVG와 텍스트를 포함한 버튼인 경우
  ${(props) => props.text && css`
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-gap: 8px;
    gap: 8px;

    svg {
      color: ${(props) => props.theme.colors.NAVY};
    }
  `}
`;
