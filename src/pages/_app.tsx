import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import useFonts from 'src/styles/fonts/useFonts';
import { muiThemeConfig } from 'src/styles/mui';

import 'src/styles/tailwind/tailwind.scss';

export default function App({
  Component
  //  pageProps
}: AppProps) {
  const { inter, canelaTextWeb, canelaWeb } = useFonts();
  // const { store, props } = storeWrapper.useWrappedStore(pageProps);

  return (
    // <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiThemeConfig}>
        <CssBaseline />
        {/* Next/Vercel Analytics. */}
        {/* Creating variables for font families. */}
        {/* eslint-disable-next-line react/no-unknown-property */}
        <style jsx global>
          {`
            :root {
              --font-inter: ${inter.style.fontFamily};
              --font-canela: ${canelaWeb.style.fontFamily};
              --font-canela-text: ${canelaTextWeb.style.fontFamily};
            }
          `}
        </style>
        <Component />
      </ThemeProvider>
    </StyledEngineProvider>
    // </Provider>
  );
}
