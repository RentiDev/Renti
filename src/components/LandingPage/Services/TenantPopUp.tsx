
import React from 'react';
import ServiceView from "./ServiceView";

const Tenant = () => {
    return (
        <div className="flex flex-col items-start justify-center mx-auto gap-10vh w-full max-w-5xl">
            <ServiceView 
                title={"One-click Applications"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                image={"/favicon.ico"}
            />
            <ServiceView 
                title={"Roommate Matching"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                image={"/favicon.ico"}
            />
            <ServiceView 
                title={"Maintenance Requests"}
                text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                image={"/images/services/tenant3-1.webp"}
                imageSmall={"/images/services/tenant3-2.webp"}
            />
        </div>
    )
}

export default Tenant;