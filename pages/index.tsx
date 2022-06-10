import { ReactElement, ReactNode } from 'react'
import { Card, Layout } from '@components/index'
import { CardWrapper } from '@styles/pages'

const Home = () => {

  return (
    <>
      <h1 className='title'>
        최신 포스팅  
      </h1>
      <CardWrapper>
        <Card />
      </CardWrapper>
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