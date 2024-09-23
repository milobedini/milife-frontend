// eslint-disable-next-line camelcase
import { Playfair_Display, Poppins } from 'next/font/google';

/** Loading fonts from google */

const playfair = Playfair_Display({
  subsets: ['latin']
});
const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});

/** Main function. */
function useFonts() {
  return {
    playfair,
    poppins
  };
}

/** Exports. */
export default useFonts;
