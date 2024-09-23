import React, { ReactNode } from 'react';
import Header from 'src/components/Header';

type LayoutProps = {
  children: ReactNode;
};

function Layout(props: LayoutProps) {
  return (
    <div>
      <Header />
      <main>{props.children}</main>
      {/* Footer */}
    </div>
  );
}

/** Exports. */
export { type LayoutProps };
export default Layout;
