import React from "react";
'use client';

interface DescriptionProps {
    heading: React.ReactNode;
    body: React.ReactNode;
}

function Description({ heading, body }: DescriptionProps) {
    return (
        <div>
            <h1 className="text-5xl font-lufgaExtraBold tracking-tight text-black sm:text-[6rem] text-left">
                {heading}
            </h1>
            <p className="text-xl font-lufgaMedium text-black">
                Renti streamlines the rental process, connecting landlords and tenants <br></br>
                for a seamless and secure renting experience
            </p>
        </div>
    );
}

export default Description;