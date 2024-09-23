import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import CssBaseline from '@mui/material/CssBaseline';
import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import Header from 'src/components/Header/Header';
import useFonts from 'src/styles/fonts/useFonts';
import { muiThemeConfig } from 'src/styles/mui';

import 'src/styles/tailwind/tailwind.scss';

const headerRoutes = [
  {
    title: 'Home',
    href: '/'
  },
  {
    title: 'About',
    href: '/about'
  },
  {
    title: 'Contact',
    href: '/contact'
  }
];

export default function App({
  Component
  //  pageProps
}: AppProps) {
  const { inter, canelaTextWeb, canelaWeb } = useFonts();
  const router = useRouter();
  // const { store, props } = storeWrapper.useWrappedStore(pageProps);

  return (
    // <Provider store={store}>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={muiThemeConfig}>
        <CssBaseline />
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
        {headerRoutes.map((route) => {
          if (router.pathname === route.href) {
            return <Header />;
          }
          return null;
        })}
        <Component />
      </ThemeProvider>
    </StyledEngineProvider>
    // </Provider>
  );
}
