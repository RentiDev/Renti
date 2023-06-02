import Link from "next/link";

const Navlinks = () => {
    return (
        <div className="flex items-center bg-white rounded-full px-12 py-5 justify-center">
                {/* // Navigation Links  */}
                <div className="flex space-x-13 md:space-x-16">
                <Link href="/" className="hover:text-blue-500 text-black font-lufga">
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
    );
};

export default Navlinks