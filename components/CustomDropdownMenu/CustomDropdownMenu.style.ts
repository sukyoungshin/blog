import { SCREEN } from '@styles/screen';
import styled from 'styled-components';

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
    background-color: ${(props) => props.theme.colors.WHITE_000};
    font-size: ${(props) => props.theme.fontSize.PARAGRAPH3};
  }

  span {
    height: 32px;
    font-size: ${(props) => props.theme.fontSize.HEADING};
    background-color: ${(props) => props.theme.colors.WHITE_000};
  }

  @media all and (max-width: ${SCREEN.MOBILE_L}px) {
    .initial-select {
      font-size: ${(props) => props.theme.fontSize.PARAGRAPH4};
    }
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
    background-color: rgba(1, 1, 1, 0.1);
  }
`;
