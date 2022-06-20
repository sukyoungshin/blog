import React, { ReactElement } from 'react';
import { Container, Header, Main } from '@components/index';

interface LayoutType {
  children: ReactElement;
}

const Layout = ({ children }: LayoutType): ReactElement => {
  return (
    <Container>
      <Header />
      <Main>{children}</Main>
    </Container>
  );
};

export default Layout;
