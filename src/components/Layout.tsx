import { useState } from 'react';
import { CloseIcon, MenuIcon } from '../assets/icons';
import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout({ children }: { children: JSX.Element }) {
  const [show, setShow] = useState(false);
  return (
    <>
      <Header />
      <button
        className="md:hidden absolute z-10"
        onClick={() => setShow((prevVal) => !prevVal)}
      >
        {show ? <CloseIcon /> : <MenuIcon />}
      </button>
      <div className="md:flex min-h-screen">
        <div
          className={`
          bg-primaryRed p-2 mt-16 w-64 
          absolute inset-y-0 left-0 ${!show && 'transform -translate-x-full'} 
          md:fixed md:translate-x-0 transition duration-200 ease-in-out`}
        >
          <Sidebar />
        </div>
        <main className="bg-secondaryRed flex-1 md:ml-64">{children}</main>
      </div>
      <Footer />
    </>
  );
}
