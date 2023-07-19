
import React from 'react';
import ServiceView from "./ServiceView";

const Tenant = () => {
    return (
        <div className="grid grid-cols-3 place-items-center justify-center gap-[10vw] mt-20">
            <div> 
                <ServiceView 
                    title={"One-click Applications"}
                    text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                    image={"/favicon.ico"}
                />
            </div>

            <div>
                <ServiceView 
                        title={"Roommate Matching"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                        image={"/favicon.ico"}
                />
            </div>

            <div>
                <ServiceView 
                        title={"Maintenance Requests"}
                        text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit."}
                        image={"/favicon.ico"}
                />
            </div>

        </div>
    )
}

export default Tenant;