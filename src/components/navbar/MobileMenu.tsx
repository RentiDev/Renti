import Link from "next/link";
import React, { useEffect, useState } from "react";
import { IoClose } from "react-icons/io5";

type MobileMenuProps = {
  close: () => void;
};

export default function MobileMenu({ close }: MobileMenuProps) {
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    setAnimation(true);

    const handleResize = () => {
      if (window.innerWidth >= 1366) {
        close();
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClose = () => {
    setAnimation(false);
    setTimeout(() => {
      close();
    }, 100); 
  };

  return (
    <div>
      <div className="fixed inset-0 top-0 l-0 h-full w-full backdrop-blur-sm bg-slate-500 bg-opacity-30">
        <div className="fixed inset-0 top-0 l-0 p-5">
          <div
            className={`w-full bg-white rounded-xl p-5 transition-all ${
              animation ? "scale-100" : "scale-95"
            }`}
          >
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-3xl text-black font-lufgaBold">Navigation</h1>
              <IoClose
                style={{ color: "black", strokeWidth: "2" }}
                className="w-10 h-10 hover:scale-125"
                onClick={handleClose}
              />
            </div>
            <div className="divide-y mt-4">
              <div className="block py-2">
                <Link href="/" className="text-xl hover:text-blue-500 text-black font-lufgaMedium">
                  Tenants
                </Link>
              </div>
              <div className="block py-2">
                <Link href="/" className="text-xl hover:text-blue-500 text-black font-lufgaMedium">
                  Landlords
                </Link>
              </div>
              <div className="block py-2">
                <Link href="/" className="text-xl hover:text-blue-500 text-black font-lufgaMedium">
                  Listings
                </Link>
              </div>
              <div className="block py-2">
                <Link href="/about" className="text-xl hover:text-blue-500 text-black font-lufgaMedium">
                  About
                </Link>
              </div>
              <div className="block py-2">
                <Link href="/" className="text-xl hover:text-blue-500 text-black font-lufgaMedium">
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
