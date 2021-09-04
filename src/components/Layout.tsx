import Footer from './Footer';
import Header from './Header';
import Sidebar from './Sidebar';

export default function Layout({ children }: { children: JSX.Element }) {
  return (
    <>
      <Header />
      <div className="tw-flex tw-min-h-screen">
        <div className="tw-fixed tw-w-60">
          <Sidebar />
        </div>
        <main className="tw-bg-secondaryRed tw-ml-60">{children}</main>
      </div>
      <Footer />
    </>
  );
}
