import { GetServerSideProps } from 'next'
import Layout from '../../components/Layout'
import CurrencyItem from '../../components/CurrencyItem'

const Currency = ({currency}: any) => (
  <Layout title={`Crypto Book - ${currency.name}`}>
    <h1>Crypto Book</h1>
    <CurrencyItem item={currency} />
  </Layout>
)

export default Currency

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const parameter: string = query.id.toUpperCase()
  console.log(parameter)
  const res = await fetch(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.API_KEY}&ids=${parameter}&interval=1d,30d&convert=EUR&per-page=100&page=1`)
  const result = await res.json()

  return {
    props: {currency: result[0]},
  }
}