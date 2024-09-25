import { AuthRoute } from 'src/data/routes';

export const getFilteredAuthRoutes = (isAuthenticated: boolean, routes: AuthRoute[]): AuthRoute[] =>
  routes.filter((route) => route.protected === isAuthenticated);
