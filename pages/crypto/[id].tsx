import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Layout from '../../components/Layout'

const Currency = () => (
  <Layout title="Crypto Book">
    <h1 className="glass">Détail de la crypto </h1>
    <p>
      Hello currency
    </p>
  </Layout>
)

export default Currency