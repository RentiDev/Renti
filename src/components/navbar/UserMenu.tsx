import Link from "next/link";
import React, { useState } from "react";
import Avatar from "../Avatar";
import { signOut } from "next-auth/react";

import { type Session } from "next-auth";

interface UserMenuProps {
    session: Session | null;
    userName: string;
}

const UserMenu = ({ session, userName }: UserMenuProps) => {
    const [isHovering, setIsHovering] = useState(false);

    return (
        <div className="daisyui flex items-center transition-all cursor-pointer relative">
            <Link href="/login" 
                className="text-black font-lufgaMedium text-xl flex items-center"
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}>
                { session ? ( 
                    <>
                        <div className="relative">
                            <div className="p-2">
                                <span className="flex items-center gap-3"> Welcome, {userName} <Avatar/> </span>
                            </div>
                            <div>
                                <span
                                    className="text-gray-700 cursor-pointer"
                                    onMouseEnter={() => { setIsHovering(true) }}
                                    onMouseLeave={() => { setIsHovering(false) }}
                                >
                                </span>
                                { isHovering && (
                                    <div className="absolute right-0 w-full bg-white rounded-lg shadow-xl">
                                        <button
                                            className="block rounded-lg w-full h-full px-4 py-2 text-gray-800 hover:bg-indigo-500 hover:text-white"
                                            onClick={() => {
                                                console.log("logout");
                                                signOut().then(() => console.log("Signed out successfully")).catch((error) => console.error(error));
                                              }} >
                                            Log Out
                                        </button>
                                    </div>
                                )}
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