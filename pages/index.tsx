import { ReactElement, ReactNode } from 'react'
import { Card, Layout } from '@components/index'
import { CardWrapper } from '@styles/pages'

const Home = () => {

  return (
    <CardWrapper>
      <Card />
    </CardWrapper>
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