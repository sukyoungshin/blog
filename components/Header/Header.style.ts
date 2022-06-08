import styled, { css } from "styled-components";

export const StyledHeader = styled.header`
  padding: 12px 24px;
  width: 100%;
  height: 56px;
  min-height: 56px;
  max-height: 56px;
  background-color: ${props => props.theme.colors.WHITE_100};
`;

export const StyledNav = styled.nav<{
  icon?: boolean;
}>`
  width: 100%;
  height: 100%;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  // FIXME: 차후 수정
  span {
    width: 80px;
    height: 32px;

    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
  // 뒤로가기 아이콘 사용 시, 적용될 스타일
  ${(props) => props.icon && css`
    span {
      width: 32px;
      height: 32px;
    }
    svg {
      width: 24px;
      height: 24px;
      color: ${props => props.theme.colors.NAVY};
    }
  `}
`;
