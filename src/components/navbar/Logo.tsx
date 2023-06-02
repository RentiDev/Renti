'use client'

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();

    return (
        <div className="hidden md:block cursor-pointer text-3xl font-lufgaBold text-black">
            {/* <Image
                alt="Logo"
                className="hidden md:block cursor-pointer"
                height="100"
                width="100"
                src="/images/Logo.svg"
            /> */}
            Renti
        </div>
    );
};

export default Logo;