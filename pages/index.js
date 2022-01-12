import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Pizza Resturaunt in Virginia</title>
        <meta name="description" content="Best Pizza Shop in the city" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Homepage
      <Image src="/img/logo.png" alt=""/>
    </div>
  )
}