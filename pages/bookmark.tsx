import { ReactElement, ReactNode } from "react";
import { Layout } from "@components/index";

const Bookmark = () => {
  return (
    <>
      Bookmark
    </>
  );
}

Bookmark.getLayout = function getLayout(page: ReactElement): ReactNode {
  return (
    <Layout>
      {page}
    </Layout>
  );
}
export default Bookmark;