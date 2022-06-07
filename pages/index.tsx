import { ReactElement, ReactNode } from 'react'
import { Layout } from '@components/Layout/Layout'
import Button from '@components/Button/Button'

const Home = () => {
  return (
    <>
      index 
    </>
  )
} 
Home.getLayout = function getLayout(page: ReactElement): ReactNode {
  return (
    <Layout>
      {page}
    </Layout>
  );
}

export default Home;