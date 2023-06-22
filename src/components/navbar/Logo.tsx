'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Logo = () => {
    const router = useRouter();

    return (
        <div className="block cursor-pointer text-4xl font-lufgaBold text-black">
            <Link href="/">
            {/* <Image
                // alt="Logo"
                // className="hidden md:block cursor-pointer"
                // height="100"
                // width="100"
                // src="/images/Logo.svg"
            /> */}
            Renti
            </Link>
        </div>
    );
};

export default Logo;