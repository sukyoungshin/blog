import { ReactElement, ReactNode } from "react";
import { Layout } from "@components/index";

const Bookmark = () => {
  return (
    <>
      Search
    </>
  );
}

Bookmark.getLayout = function getLayout(page: ReactElement): ReactNode {
  return (
    <Layout default>
      {page}
    </Layout>
  );
}
export default Bookmark;