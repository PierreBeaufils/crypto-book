import Link from 'next/link'
import { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import List from '../components/List'

const IndexPage = ({data}: any) => (
  <Layout title="Crypto Book">
    <h1>Crypto Book</h1>
    <List data={data} />
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {

  const data = await fetch(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.API_KEY}&interval=1d,30d&convert=EUR&per-page=100&page=1`)
    .then(res => res.json())
  
  return { props: { data } }
}

export default IndexPage