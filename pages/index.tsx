import { ReactElement, ReactNode } from 'react'
import Layout from '@components/Layout/Layout'

const Home = () => {
  return (
    <>
      index 
    </>
  )
} 
Home.getLayout = function getLayout(page: ReactElement): ReactNode {
  return (
    <Layout default>
      {page}
    </Layout>
  );
}

export default Home;