import * as React from 'react';

import { Footer } from '../../components/Footer';

import './styles.scss';

const Layout = ({ children }: React.PropsWithChildren) => {
  return (
    <>
      <main className="main-container">{children}</main>
      <Footer />
    </>
  );
};

export { Layout };
