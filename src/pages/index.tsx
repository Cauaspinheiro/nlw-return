import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { Widget } from '../components/Widget'
import { getLocalesMessages } from '../utils/get-locales-messages'

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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  const messages = await getLocalesMessages(locale)

  return {
    props: {
      messages,
    },
  }
}

export default Home
