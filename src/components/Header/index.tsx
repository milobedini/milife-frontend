import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Button } from '@mui/material';
import { authRoutes, mainRoutes } from 'src/data/routes';
import { baseApi } from 'src/graphql/api';
import { persistedStore } from 'src/store';
import { logout, selectCurrentUser } from 'src/store/slices/authSlice';
import { getFilteredAuthRoutes } from 'src/utils/routeUtils';

import logoImage from 'public/images/logo-basic.png';

function Header() {
  // Dependencies
  const router = useRouter();
  const dispatch = useDispatch();
  const user = useSelector(selectCurrentUser);

  const isAuthenticated = useMemo(() => !!user, [user]);

  const displayedAuthRoutes = getFilteredAuthRoutes(isAuthenticated, authRoutes);

  const handleLogout = async () => {
    dispatch(logout());
    dispatch(baseApi.util.resetApiState());
    await persistedStore.purge();
    router.push('/login');
  };

  return (
    <header className="component:Header relative top-0 z-20 h-16 bg-background shadow-main" id="back-to-top-anchor">
      <div className="container flex h-full items-center justify-between text-center">
        <div className="flex items-center gap-8">
          <Link href="/">
            <Image priority alt="logo-image" src={logoImage} placeholder="blur" height={52} />
          </Link>
          {mainRoutes.map((route) => (
            <Link key={route.label} href={route.link} className="typo-poppins-16-2 text-white hover:text-primary">
              {route.label}
            </Link>
          ))}
        </div>
        <div className="flex items-center gap-8">
          {displayedAuthRoutes.map((route) =>
            route.label === 'Logout' ? (
              <Button key={route.label} variant="contained" color="primary" onClick={handleLogout}>
                {route.label}
              </Button>
            ) : (
              <Link key={route.label} href={route.link} className="typo-poppins-16-2 text-white hover:text-primary">
                {route.label}
              </Link>
            )
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
