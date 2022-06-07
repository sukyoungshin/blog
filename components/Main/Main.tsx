import styled from "styled-components";

const StyledMain = styled.main`
  width: 100%;
  height: calc(100% - 136px);
`;

const Main = ({ children }: any) => {
  return(
    <StyledMain>
      {children}
    </StyledMain>
  );
};

export default Main;

