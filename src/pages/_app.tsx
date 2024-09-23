import { ReactElement, ReactNode } from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { Layout } from 'src/components/Layout';
import useFonts from 'src/styles/fonts/useFonts';
import { muiThemeConfig } from 'src/styles/mui';

import 'src/styles/tailwind/tailwind.scss';

/** Type defs. */
type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};
type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({
  Component
  //  pageProps
}: AppPropsWithLayout) {
  const { poppins, playfair } = useFonts();
  // const { store, props } = storeWrapper.useWrappedStore(pageProps);

  const getLayout = Component.getLayout ?? ((page) => page);
  const layoutWithComponent = getLayout(<Component />);

  return (
    // <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiThemeConfig}>
        <CssBaseline />
        {/* eslint-disable-next-line react/no-unknown-property */}
        <style jsx global>
          {`
            :root {
              --font-poppins: ${poppins.style.fontFamily};
              --font-playfair: ${playfair.style.fontFamily};
            }
          `}
        </style>
        <Layout>{layoutWithComponent}</Layout>
      </ThemeProvider>
    </StyledEngineProvider>
    // </Provider>
  );
}
