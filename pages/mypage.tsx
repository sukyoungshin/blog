import { ReactElement, ReactNode } from 'react';
import { Layout } from '@components/index';

const MyPage = () => {
  return <>My page</>;
};

MyPage.getLayout = function getLayout(page: ReactElement): ReactNode {
  return <Layout>{page}</Layout>;
};
export default MyPage;
