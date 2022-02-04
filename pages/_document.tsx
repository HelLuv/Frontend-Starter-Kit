import * as React from 'react';
import Document, {Html, Head, Main, NextScript, DocumentContext} from 'next/document'
import createEmotionCache from "../utils/createEmotionCache";
import createEmotionServer from "@emotion/server/create-instance";
import darkTheme from "../styles/theme/darkTheme";


export default class MyDocument extends Document {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel="icon" href="/favicon.ico"/>
          <meta name="theme-color" content={darkTheme.palette.primary.main}/>
          <meta charSet="utf-8"/>
          <meta name="description" content="Frontend Starter Kit"/>
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@300;400;600;700;800&family=Nunito:wght@300;400;500;600;700&display=swap"
            rel="stylesheet"/>
          {/*// @ts-ignore*/}
          {this.props.emotionStyleTags}
        </Head>
        <body>
        <Main/>
        <NextScript/>
        </body>
      </Html>
    )
  }

}


MyDocument.getInitialProps = async (ctx: DocumentContext) => {

  const originalRenderPage = ctx.renderPage;

  const cache = createEmotionCache();
  const {extractCriticalToChunks} = createEmotionServer(cache);

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (App) =>
        function EnhanceApp(props) {
          // @ts-ignore
          return <App emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx);
  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles?.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      dangerouslySetInnerHTML={{__html: style.css}}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  };
};
