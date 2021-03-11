import Layout from '../components/layout'

/* _app (NEXT_JS)
This file it's used from Nextjs before call any page,
so we put here the <Layout /> component. */

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
