import React, { ReactElement } from "react";
import Header from "@components/Header/Header";
import Main from "@components/Main/Main";
import Toolbar from "@components/Toolbar/Toolbar";

interface LayoutType {
  children: ReactElement;
  default?: boolean;
}

const Layout = ({ children, ...props }: LayoutType): ReactElement => {

  // 부모 컴포넌트에서 전달된 props값이 없으면, 뒤로가기 헤더를 보여주고 푸터는 생략한다.
  if (props.default === undefined) {
    return (
      <>
        <Header />
        <Main>{children}</Main>
      </>
    );
  } else {
    // 부모 컴포넌트에서 전달된 props값이 없으면, 기본헤더를 보여준다.
    return (
        <>
          <Header default />
          <Main>{children}</Main>
          <Toolbar />
        </>  
    );
  }

};

export default Layout;