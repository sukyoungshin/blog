import { ReactElement, ReactNode } from "react";
import Layout from "@components/Layout/Layout";

const MyPage = () => {
  return (
    <>
      Search
    </>
  );
}

MyPage.getLayout = function getLayout(page: ReactElement): ReactNode {
  return (
    <Layout default>
      {page}
    </Layout>
  );
}
export default MyPage;