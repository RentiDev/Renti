import Link from "next/link";
import Avatar from "../Avatar";

const UserMenu = ({ session, userName }) => {
    return (
        <div className="daisyui flex items-center hover:scale-110 transition-all cursor-pointer">
            <Link href="/login" className="text-black font-lufgaMedium flex items-center">
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
                { session ? ( 
                    <span> Welcome, {userName} </span>
                ) : (
                    <span>Log In</span>
                )}
            </Link>
        </div>
    );
};

export default UserMenu;