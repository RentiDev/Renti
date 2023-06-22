import Link from "next/link";
import React, { useState } from "react";
import Avatar from "../Avatar";
import { signOut } from "next-auth/react";

const UserMenu = ({ session, userName }) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div className="daisyui flex items-center justify-center hover:scale-110 transition-all cursor-pointer">
            <Link href="/login" 
                className="text-black font-lufgaMedium text-xl flex items-center"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}>
                { session ? ( 
                    <>
                        <div className="flex items-center align-middle">
                            <div className="p-2">
                                <span className="flex items-center gap-3"> Welcome, {userName} <Avatar/> </span>
                            </div>
                            <div className="relative inline-block mt-6">
                                <div className="relative">
                                    <span
                                        className="text-gray-700 cursor-pointer"
                                        onMouseEnter={() => { setIsHovering(true) }}
                                        onMouseLeave={() => { setIsHovering(false) }}
                                    >
                                    </span>
                                    { isHovering && (
                                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl">
                                            <button
                                                className="block rounded-lg w-full h-full px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                                                onClick={() => { console.log("logout"); signOut()}}
                                            >
                                                Log Out
                                            </button>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                ) : (
                    <span className="flex gap-3 items-center justify-center px-3">Log In <Avatar/> </span>
                )}

            </Link>
        </div>
    );
};

export default UserMenu;