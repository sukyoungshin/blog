import styled from "styled-components";

export const StyledHeader = styled.header`
  padding: 12px 24px;
  width: 100%;
  height: 56px;
  min-height: 56px;
  max-height: 56px;
  background-color: ${props => props.theme.colors.WHITE_100};
`;

export const StyledNav = styled.nav`
  width: 100%;
  height: 100%;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  // FIXME: 차후 로고 수정
  span {
    width: 80px;
    height: 32px;
    background-color: ${props => props.theme.colors.WHITE_200};
  }
`;
