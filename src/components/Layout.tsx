import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Navbar from "./navbar/Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({children}: LayoutProps) => {
  return (
    <div>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow bg-white">{children}</main>
      </div>
    </div>
  );
};

export default Layout;
