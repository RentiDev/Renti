import React, {useState} from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
        <div className="container flex items-center justify-between px-6 py-10 mx-auto">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="text-black text-4xl font-lufgaBold">
              Renti
            </Link>
          </div>
            <div className="flex items-center bg-[hsl(246,246%,246%)] rounded-full px-12 py-5">
                {/* // Navigation Links  */}
                <div className="flex space-x-13 md:space-x-16">
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
                    Contact
                </Link>
                {/* // Add more links as needed  */}
                </div>
                {/* // Sign up button  */}
            </div> 
            <Link href="/" className="text-black font-lufgaMedium">
                Sign Up
            </Link>
        </div>
      </header>
    );
};

export default Header;