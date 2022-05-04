import type { NextPage } from 'next'
import Head from 'next/head'
import { Widget } from '../components/Widget'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Feedget</title>
        <meta name="description" content="Feedget" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Widget />
    </div>
  )
}

export default Home
