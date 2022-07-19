import { useState } from 'react';
import { CloseIcon, MenuIcon } from '../assets/icons';
import Footer from './Footer';
import Header from './Header';

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Header />
      <div className="md:flex min-h-screen">
        <main className="bg-secondaryRed flex-1">{children}</main>
      </div>
      <Footer />
    </>
  );
}
