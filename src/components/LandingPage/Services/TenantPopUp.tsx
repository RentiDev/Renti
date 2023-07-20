
import React from 'react';
import ServiceView from "./ServiceView";

const Tenant = () => {
    return (
        <div className="flex flex-col items-start justify-center mx-auto gap-10vh w-full max-w-5xl">
            <ServiceView 
                title={"One-click Applications"}
                text={"Found that perfect rental you've  been searching for? Create a single comprehensive applicant profile and apply instantly to multiple properties with just a single click."}
                image={"/images/services/tenant1-1.webp"}
                imageSmall={"/images/services/tenant1-2.webp"}
            />
            <ServiceView 
                title={"Roommate Matching"}
                text={"Looking for a roommate that fits your lifestyle and preferences? Renti takes the guesswork out of the process with our advanced roommate matching feature. Our algorithm sifts through a pool of potential candidates, comparing factors like lifestyle, habits, interests, and budget to find your ideal match."}
                image={"/images/services/homeowner6-2.webp"}
            />
            <ServiceView
                title={"E-Sign Rental Agreements"}
                text={"Safe, secure, and seamless. Sign legally binding documents online to finalize your rental agreement. Renti uses SSL encryption technology, securely storing your contracts."}
                image={"/images/services/e-sign-contract.webp"}
            />
            <ServiceView 
                title={"Maintenance Requests"}
                text={"Say goodbye to the hassle of maintenance requests. Tired of endless phone conversations and emails over a broken sink? With our service, should any problem arise during your extended lease period, all you need to do is provide a short description and set the priority of your maintenance request."}
                image={"/images/services/tenant3-1.webp"}
                imageSmall={"/images/services/tenant3-2.webp"}
            />
        </div>
    )
}

export default Tenant;