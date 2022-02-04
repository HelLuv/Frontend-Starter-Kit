import { Html, Head, Main, NextScript } from 'next/document'

const Document=()=> {
  return (
    <Html lang={'en'}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Frontend Starter Kit" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&family=Nunito:wght@300;400;500;600;700&display=swap" rel="stylesheet"/>
      </Head>
      <body>
      <Main />
      <NextScript />
      </body>
    </Html>
  )
}

export default Document;

