import styled from 'styled-components';
import { SCREEN } from '@styles/screen';

export const CardWrapper = styled.section`
  margin: 0 auto;
  margin: -16px;
  max-width: 1056px;
  overflow-y: auto;

  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-content: flex-start;

  @media all and (max-width: ${SCREEN.MOBILE_L}px) {
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-content: center;
  }
`;
