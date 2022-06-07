import React, { ReactElement } from "react";
import Header from "@components/Header/Header";
import Main from "@components/Main/Main";
import Toolbar from "@components/Toolbar/Toolbar";

export const Layout = ({ children }: any): ReactElement => {

  

  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Toolbar />
    </>
  );
};
