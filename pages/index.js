import Head from 'next/head'

import MainHeader from '../components/MainHero/MainHeader'
import MainHero from '../components/MainHero/MainHero'

export default function Home() {
  return (
    <>
      <Head>
        <title>Vanina Gonzalez - Portafolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <MainHeader/>
      <MainHero/>
    </>
  )
}
