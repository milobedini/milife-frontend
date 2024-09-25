export type Route = {
  label: string;
  link: string;
};

export type AuthRoute = Route & {
  protected: boolean;
};

export const mainRoutes: Route[] = [
  { label: 'About', link: '/about' },
  { label: 'Contact', link: '/contact' },
  { label: 'Dashboard', link: '/dashboard' }
];

export const authRoutes: AuthRoute[] = [
  { label: 'Login', link: '/login', protected: false },
  { label: 'Register', link: '/signup', protected: false },
  { label: 'Logout', link: '/logout', protected: true }
];

export const headerRoutes = [...mainRoutes, ...authRoutes];
