import React from "react";
import Footer from "./Footer";
import Navbar from "./navbar/Navbar";
import { Toaster } from 'react-hot-toast';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Toaster />
        <Navbar />
        <main className="flex-grow bg-white">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
