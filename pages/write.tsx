import { ReactElement, ReactNode } from 'react';
import { Layout } from '@components/index';

const Write = () => {
  return <>Write</>;
};

Write.getLayout = function getLayout(page: ReactElement): ReactNode {
  return <Layout>{page}</Layout>;
};
export default Write;
