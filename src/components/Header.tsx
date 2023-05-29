import React, {useState} from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
        <div className="container flex items-center justify-between px-6 py-8 mx-auto">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="text-black text-3xl font-lufgaExtraBold">
              Renti
            </Link>
          </div>
            <nav className="flex items-center bg-[hsl(246,246%,246%)] rounded-full p-6">
                {/* // Navigation Links  */}
                <nav className="flex space-x-16">
                <Link href="/" className="text-black font-lufga">
                    Tenant
                </Link>
                <Link href="/" className="text-black font-lufga">
                    Landlord
                </Link>
                <Link href="/" className="text-black font-lufga">
                    Listings
                </Link>
                <Link href="/about" className="text-black font-lufga">
                    About
                </Link>
                <Link href="/" className="text-black font-lufga">
                    Contact Us
                </Link>
                {/* // Add more links as needed  */}
                </nav>
                {/* // Sign up button  */}
            </nav> 
            <Link href="/" className="text-black font-lufga">
                Sign Up
            </Link>
        </div>
      </header>
    );
};

export default Header;