import { ReactElement, ReactNode } from 'react';
import { Provider } from 'react-redux';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import Layout from 'src/components/Layout/Layout';
import { persistedStore, store } from 'src/store';
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
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistedStore}>
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
      </PersistGate>
    </Provider>
  );
}
