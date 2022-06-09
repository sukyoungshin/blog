import { ReactElement, ReactNode } from "react";
import { Layout } from '@components/index'

const Write = () => {
  return (
    <>
      Search
    </>
  );
}

Write.getLayout = function getLayout(page: ReactElement): ReactNode {
  return (
    <Layout default>
      {page}
    </Layout>
  );
}
export default Write;