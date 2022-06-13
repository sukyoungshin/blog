import styled from "styled-components";

export const CardWrapper = styled.article<{
  bgColor?: string;
}>`
  margin: 0 auto;
  width: 342px;
  height: 350px;

  display: inline-flex;
  flex-direction: column;
  flex-gap: 16px;
  gap: 16px;

  background-color: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.theme.colors.NAVY};
  box-shadow: 10px 10px 0px #8d8d8d;
`;

export const ProfileWrapper = styled.div`
  padding: 16px 8px 0 8px;
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  justify-content: space-between;
  
  img {
    margin-right: 24px;
    display: inline-block;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: rgba(255,255,255,0.1);// FIXME
  }
`;
  
export const Introduce = styled.div`
  width: calc(100% - 120px);

  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  
  h2 {
    font-size: ${(props) => props.theme.fontSize.PARAGRAPH1};
    font-weight: 700;
  }
  p {
    font-size: ${(props) => props.theme.fontSize.PARAGRAPH1};
  }
  p {
    font-size: ${(props) => props.theme.fontSize.PARAGRAPH2};
  }
`;

export const ContentWrapper = styled.div`
  padding: 0 16px;
  width: 100%;
  height: 206px;
  background-color: rgba(255,255,255,0.1);// FIXME
  overflow-y: auto;

  .title,
  .content {
    line-height: 150%;
  }
  .title {
    font-size: ${(props) => props.theme.fontSize.HEADING};
  }
  .content {
    font-size: ${(props) => props.theme.fontSize.PARAGRAPH2};
    a {
      margin-left: 20px;
    }
  }
`;

export const TabMenuList = styled.ul`
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TabMenu = styled.li`
  ul {
    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-gap: 8px;
    gap: 8px;
  }

`;