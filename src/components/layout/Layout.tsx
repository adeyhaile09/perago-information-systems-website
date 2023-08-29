import React, { ReactNode } from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import Head from 'next/head';
import Script from 'next/script';
import WebHeader from '../header/WebHeader';
import MobileHeader from '../header/MobileHeader';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      {/* <MobileHeader /> */}
      {/* <WebHeader /> */}
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
