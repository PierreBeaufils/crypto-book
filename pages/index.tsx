import Link from 'next/link'
import { GetStaticProps, GetStaticPaths, GetServerSideProps } from 'next'
import Layout from '../components/Layout'

const IndexPage = ({res}) => (
  <Layout title="Crypto Book">
    <h1 className="glass">Hello Next.js </h1>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    <ul>
      {res.map((item) => (
        <li key={item.id}>
          {item.name}
        </li>
      ))}
    </ul>
  </Layout>
)

export const getStaticProps: GetStaticProps = async () => {
  // Example for including static props in a Next.js function component page.
  // Don't forget to include the respective types for any props passed into
  // the component.
  const res = await fetch(`https://api.nomics.com/v1/currencies/ticker?key=${process.env.API_KEY}&interval=1d,30d&convert=EUR&per-page=100&page=1`)
    .then(res => res.json())
  
  return { props: { res } }
}

export default IndexPage