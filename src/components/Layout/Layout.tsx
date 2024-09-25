import React, { ReactNode } from 'react';
import Header from 'src/components/Header';
import Notifications from '../Notifications';

type LayoutProps = {
  children: ReactNode;
};

function Layout(props: LayoutProps) {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      <Notifications />
      {/* Footer */}
    </div>
  );
}

/** Exports. */
export { type LayoutProps };
export default Layout;
