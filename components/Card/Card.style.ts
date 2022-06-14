import styled from "styled-components";

export const CardWrapper = styled.article<{
}>`
  margin: 16px;
  width: 320px;
  min-width: 320px;
  height: 370px;
  border-radius: 4px;
  background-color: ${(props) => props.theme.colors.WHITE_000};

  display: inline-flex;
  flex-direction: column;

  transition: transform 0.3s;
  box-shadow: rgb(0 0 0 / 4%) 0px 4px 16px 0px;
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  }

  position: relative;
`;

export const ImageWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
    height: 167px;
    background-color: rgba(255,255,255,0.2);// 이미지가 로딩되지 않았을때를 대비(Defense Code)
    border-radius: 4px 4px 0 0;
  }
`;
  
export const ContentWrapper = styled.div`
  padding: 16px;
  width: 100%;
  height: calc(100% - 40px);
  overflow-y: auto;
  background-color: rgba(255,255,255,0.4);// 이미지가 로딩되지 않았을때를 대비(Defense Code)

  h2 {
    font-size: ${(props) => props.theme.fontSize.HEADING};
  }
  p {
    line-break: anywhere;
    font-size: ${(props) => props.theme.fontSize.PARAGRAPH2};
  }
  p:not(:last-child) {
    height: 90px;
  }
  p:last-child {
    color: ${(props) => props.theme.colors.GREY};
    font-size: ${(props) => props.theme.fontSize.PARAGRAPH3};
  }
`;

export const TabMenuList = styled.ul`
  width: 100%;
  height: 40px;
  background-color: ${(props) => props.theme.colors.WHITE_000};

  display: inline-flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  position: absolute;
  left: 0;
  bottom: 0;
`;

export const TabMenu = styled.li`
  font-size: ${(props) => props.theme.fontSize.PARAGRAPH3};    

  ul {
    margin: 16px;

    display: inline-flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex-gap: 8px;
    gap: 8px;
  }
`;