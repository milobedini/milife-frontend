import { Inter } from 'next/font/google';
import localFont from 'next/font/local';

/** Loading fonts from google */
const inter = Inter({
  subsets: ['latin']
});

/** Loading local fonts */
const canelaWeb = localFont({
  src: [
    {
      path: '../../../public/fonts/canela/medium/Canela-Medium-Web.woff2',
      weight: '500',
      style: 'normal'
    }
  ]
});

const canelaTextWeb = localFont({
  src: [
    {
      path: '../../../public/fonts/canela/textMedium/CanelaText-Medium-Web.woff2',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../../../public/fonts/canela/textRegular/CanelaText-Regular-Web.woff2',
      weight: '400',
      style: 'normal'
    }
  ]
});

/** Main function. */
function useFonts() {
  return {
    inter,
    canelaWeb,
    canelaTextWeb
  };
}

/** Exports. */
export default useFonts;
