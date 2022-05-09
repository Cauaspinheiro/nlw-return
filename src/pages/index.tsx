import type { GetStaticProps, NextPage } from 'next'
import { useTranslations } from 'next-intl'
import Head from 'next/head'
import { GithubLogo } from 'phosphor-react'
import { Widget } from '../components/Widget'
import { getLocalesMessages } from '../utils/get-locales-messages'

const Home: NextPage = () => {
  const t = useTranslations('pages.home')

  return (
    <div className="flex flex-col w-full h-screen items-center justify-center gap-12">
      <Head>
        <title>Feedget</title>
        <meta name="description" content="Feedget" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <span className="text-zinc-600 text-xl font-medium font-mono text-center">
        {t('made-by-title')}
        <a
          className="text-zinc-500 flex items-center mt-4 border border-zinc-700 rounded py-2 px-3 gap-3 text-base
          hover:border-zinc-600 transition-colors"
          href="https://github.com/cauaspinheiro"
        >
          <GithubLogo weight="fill" className="w-5 h-5" /> @Cauaspinheiro
        </a>
      </span>

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
