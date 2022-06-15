import styled, { css } from "styled-components";

export const HeaderWrapper = styled.header`
  padding: 12px 24px;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoHeader = styled.nav<{
  icon?: boolean;
}>`
  // size
  width: 100%;
  max-width: 1024px;
  height: 64px;
  min-height: 64px;
  max-height: 64px;

  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .logo {
    width: 80px;
    height: 32px;
    color: ${(props) => props.theme.colors.BLACK};
    font-size: ${(props) => props.theme.fontSize.HEADING};
    font-weight: 700; // FIXME

    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
  }
`;

export const ButtonWrapper = styled.ul`
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-gap: 8px;
  gap: 8px;

  li {
    border-radius: 50%;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }
`;

export const TabMenu = styled.div`
  margin-top: 24px;
  width: 100%;
  max-width: 1024px;
  height: 48px;
  min-height: 48px;
  max-height: 48px;
  
  > ul {
    width: 100%;
    
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    flex-gap: 16px;
    gap: 16px;

    position: relative;

    li:last-child {
      margin-left: auto;
    }
  }
`;
  
export const MenuItem = styled.li<{
  active?: boolean;
}>`
  padding: 16px;
  height: 40px;
  
  display: inline-flex;
  flex-direction: row;
  align-items: center;

  position: relative

  border-bottom: 2px solid transparent;
  ${(props) => props.active && css`
    border-bottom: 2px solid ${(props) => props.theme.colors.NAVY};
  `}
`;

export const CustomSelectMenuWrapper = styled.div`
  width: 96px;
  height: 40px;
  line-height: 40px;
`;

export const SelectMenuWrapper = styled.div`
  width: 96px;
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px;

  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  .initial-select {
    width: 64px;
    height: 32px;
    background-color: ${(props)=> props.theme.colors.WHITE_000};
  }

  span {
    height: 32px;
    font-size: ${(props) => props.theme.fontSize.HEADING};
    background-color: ${(props) => props.theme.colors.WHITE_000};  
  }
`;

export const SelectMenu = styled.ul`
  width: 96px;

  display: inline-flex;
  flex-direction: column;
  position: relative;
  z-index: 10;

  border: none;
  background-color: ${(props) => props.theme.colors.WHITE_000};  
`;

export const SelectMenuItem = styled.li<{
  active?: boolean; 
}>`
  padding-left: 16px;
  width: 100%; // 96px;
  height: 32px;
  line-height: 32px;
  font-size: ${(props) => props.theme.fontSize.PARAGRAPH3};
  color: ${(props) => props.active && props.theme.colors.ACTIVE};

  &:hover {
    background-color: rgba(1,1,1,0.1);
  }
`;