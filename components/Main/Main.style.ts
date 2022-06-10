import styled from "styled-components";

export const StyledMain = styled.main`
  width: 100%;
  height: calc(100% - 136px);
  overflow-y: auto;

  h1 {
    height: 18px;
    font-size: ${(props) => props.theme.fontSize.HEADING};
  }
  // FIXME
  h1.title {
    margin: 56px 0 12px 0;
  }
  h1.mypage{
    margin: 24px 0 16px 0;
  }
`;