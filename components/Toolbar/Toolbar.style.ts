import styled from "styled-components";

export const StyledToolbar = styled.footer`
  padding: 8px 24px 0 24px;
  width: 100%;
  height: 80px;
  min-height: 80px;
  max-height: 80px;
  
  background-color: ${props => props.theme.colors.NAVY};
`;

export const StyledMain = styled.nav`
  width: 342px;
  height: 48px;
`;

export const StyledUl = styled.ul`
  width: 100%;
  height: 100%;

  display: inline-flex;
  flex-directrion: row;
  flex-gap: 25px;
  gap: 25px;
`;

export const StyledLi = styled.li`
  width: 48px;
  height: 48px;

  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

`;