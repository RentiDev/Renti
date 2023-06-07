import React, {useState} from 'react';
import Link from "next/link";

const Header = () => {
    return (
        <header className="fixed top-0 left-0 right-0 z-50">
        <div className="container flex items-center justify-between px-10 py-10 mx-auto">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="text-black text-4xl font-lufgaBold">
              Renti
            </Link>
          </div>
            <div className="flex items-center bg-[hsl(246,246%,246%)] rounded-full px-12 py-5 justify-center">
                {/* // Navigation Links  */}
                <div className="flex space-x-13 md:space-x-16">
                <Link href="/index" className="hover:text-blue-500 text-black font-lufga">
                    Tenant
                </Link>
                <Link href="/" className="hover:text-blue-500 text-black font-lufga">
                    Landlord
                </Link>
                <Link href="/" className="hover:text-blue-500 text-black font-lufga">
                    Listings
                </Link>
                <Link href="/about" className="hover:text-blue-500 text-black font-lufga">
                    About
                </Link>
                <Link href="/" className="hover:text-blue-500 text-black font-lufga">
                    Contact
                </Link>
                {/* // Add more links as needed  */}
                </div>
                {/* // Sign up button  */}
            </div> 
            <div className="daisyui flex items-center">
                <Link href="/" className="text-black font-lufgaMedium flex items-center">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#000000"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2"
                    >
                    <path d="M5.52 19c.64-2.2 1.84-3 3.22-3h6.52c1.38 0 2.58.8 3.22 3" />
                    <circle cx="12" cy="10" r="3" />
                    <circle cx="12" cy="12" r="10" />
                    </svg>
                    <span>Log In <br></br>Sign Up</span>
                </Link>
            </div>
        </div>
      </header>
    );
};

export default Header;