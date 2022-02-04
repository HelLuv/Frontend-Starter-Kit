import type {NextPage} from 'next';
import styles from '../styles/Home.module.scss';
import Header from "../components/Header";
import Hero from "../components/Hero";
import Head from "next/head";
import * as React from "react";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Frontend Starter Kit</title>
        <meta name="description" content="Frontend Starter Kit"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover"/>
      </Head>

      <Header/>
      <Hero/>
    </div>
  )
}

export default Home;
