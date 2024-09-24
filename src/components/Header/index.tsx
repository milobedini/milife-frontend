import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

import logoImage from 'public/images/logo-basic.png';

const headerRoutes = [
  {
    label: 'About',
    link: '/about'
  },
  {
    label: 'Contact',
    link: '/contact'
  }
];
const authRoutes = [
  {
    label: 'Login',
    link: '/login'
  },
  {
    label: 'Register',
    link: '/signup'
  },
  {
    label: 'Logout',
    link: '/logout'
  }
];

function Header() {
  const router = useRouter();

  if (headerRoutes.map((route) => route.link).includes(router.pathname) || router.pathname === '/') {
    return (
      <header className="component:Header relative top-0 z-20 h-16 bg-background shadow-main" id="back-to-top-anchor">
        <div className="container flex h-full items-center justify-between text-center">
          <div className="flex items-center gap-8">
            <Link href="/">
              <Image priority alt="logo-image" src={logoImage} placeholder="blur" height={52} />
            </Link>
            {headerRoutes.map((route) => (
              <Link key={route.label} href={route.link} className="typo-poppins-16-2 text-white hover:text-primary">
                {route.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-8">
            {authRoutes.map((route) => (
              <Link key={route.label} href={route.link} className="typo-poppins-16-2 text-white hover:text-primary">
                {route.label}
              </Link>
            ))}
          </div>
        </div>
      </header>
    );
  }

  return null;
}

export default Header;
