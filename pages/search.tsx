import { ReactElement, ReactNode } from 'react';
import { Layout } from '@components/index';

const Search = () => {
  return <>Search</>;
};

Search.getLayout = function getLayout(page: ReactElement): ReactNode {
  return <Layout>{page}</Layout>;
};
export default Search;
