import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'

export default function Home() {
  return (
    <div className={styles.container}>
     
      <Head>
        <title>Native Pot</title>
        <meta name="description" content="Best local pot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      Content
     
      
    </div>
  )
}
