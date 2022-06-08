import { ReactElement, ReactNode } from "react";
import Layout from "@components/Layout/Layout";

const Search = () => {
  return (
    <>
      Search
    </>
  );
}

Search.getLayout = function getLayout(page: ReactElement): ReactNode {
  return (
    <Layout default>
      {page}
    </Layout>
  );
}
export default Search;