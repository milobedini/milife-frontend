import Link from 'next/link';
import { useRouter } from 'next/router';

const headerRoutes = [
  {
    label: 'Home',
    link: '/'
  },
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
    link: '/register'
  },
  {
    label: 'Logout',
    link: '/logout'
  }
];

function Header() {
  const router = useRouter();

  if (headerRoutes.map((route) => route.link).includes(router.pathname)) {
    return (
      <header className="component:Header border-2 border-b-secondary-200 bg-background shadow-2xl shadow-secondary-100">
        <div className="container flex justify-between">
          <div className="flex gap-8">
            {headerRoutes.map((route) => (
              <Link key={route.label} href={route.link} className="text-white hover:text-primary">
                {route.label}
              </Link>
            ))}
          </div>
          <div className="flex gap-8">
            {authRoutes.map((route) => (
              <Link key={route.label} href={route.link} className="text-white hover:text-primary">
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
