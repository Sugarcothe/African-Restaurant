import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Featured from '../components/Featured'
import Pizzalist from '../components/PizzaList'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Mr Jellof</title>
        <meta name="description" content="Best local pot" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured/>
      <Pizzalist/>
     
      
    </div>
  )
}
