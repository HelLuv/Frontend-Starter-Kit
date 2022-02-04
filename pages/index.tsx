import type {NextPage} from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import Header from "../components/Header";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Starter Kit</title>
        <meta name="description" content="Frontend Starter Kit"/>
      </Head>

      <Header/>

    </div>
  )
}

export default Home;
