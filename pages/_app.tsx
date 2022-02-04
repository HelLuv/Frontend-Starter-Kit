import '../styles/globals.scss'
import type {AppProps} from 'next/app'
import {CacheProvider, EmotionCache, ThemeProvider} from "@emotion/react";
import darkTheme from "../styles/theme/darkTheme";
import createEmotionCache from "../utils/createEmotionCache";
import CssBaseline from "@mui/material/CssBaseline";

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {

  const {Component, emotionCache = clientSideEmotionCache, pageProps} = props;

  return (<>
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline/>
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  </>)
}

export default MyApp;
