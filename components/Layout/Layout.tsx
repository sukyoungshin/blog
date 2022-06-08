import React, { ReactElement } from "react";
import Header from "@components/Header/Header";
import Main from "@components/Main/Main";
import Toolbar from "@components/Toolbar/Toolbar";

const Layout = ({ children, ...props }: any): ReactElement => {

  // 부모 컴포넌트에서 전달된 props값이 없으면, 기본헤더를 보여준다.
  if (props.prev === '') {
    return (
      <>
      <Header default />
      <Main>{children}</Main>
      <Toolbar default />
    </>      
    );
  } else {
    // 부모 컴포넌트에서 전달된 props값이 있으면, 뒤로가기 헤더를 보여주고 푸터는 생략한다.
    return (
      <>
        <Header />
        <Main>{children}</Main>
      </>
    );
  }

};

export default Layout;