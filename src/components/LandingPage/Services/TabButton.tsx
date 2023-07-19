import React from "react";
import { Button } from "@nextui-org/react";

interface TabButtonProps {
    text: string;
    handleClick: () => void;
    isActive: boolean;
}

const TabButton = ({ text, handleClick, isActive}: TabButtonProps) => {
    const buttonStyle = isActive ? "text-black" : "text-gray-400";
    return (
        <div
            onClick={handleClick}
            className={`text-lg font-lufgaMedium hover:text-blue-500 transition-all cursor-pointer px-12 ${buttonStyle}`}
        >
            {text}
        </div>
    );
}

export default TabButton;
