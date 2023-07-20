
import React from 'react';
import ServiceView from "./ServiceView";

const Landlord = () => {
    return (
        <div className="flex flex-col items-start justify-center mx-auto gap-10vh w-full max-w-5xl">
            <ServiceView 
                title={"List Properties"}
                text={"This is your time to shine. Tell us about your place. Does it have an awesome view? Is it close to a farmers’ market? Don’t be shy. Set your guide price, select amenities, and write a brief description. Also, remember to add quality photos!"}
                image={"/images/services/homeowner1-1.webp"}
                imageSmall={"/images/services/homeowner1-2.webp"}
                imageSmallHeight={400}
                imageSmallWidth={200}
            />
            <ServiceView 
                title={"Collect Rent Online"}
                text={"No need to collect cash or checks each month, visit the bank, or even meet with your tenant. Skip the hassle and collect rent digitally. Our payment feature is fast, secure, and convenient — perfect for busy landlords and property managers. Don’t take our word for it, see for yourself today!"}
                image={"/images/services/collect-rent-1.webp"}
                imageSmall={"/images/services/collect-rent-2.webp"}
            />
            <ServiceView
                title={"Screen Tenants"}
                text={"Renti makes finding a perfect tenant easy. We go through all available records from both state and federal databases. You get an instant screening report along with their credit score and history, thorough background and criminal check."}
                image={"/images/services/homeowner-screening-1.webp"}
                imageSmall={"/images/services/homeowner-screening-2.webp"}
            />
            <ServiceView 
                title={"Distribute Listings"}
                text={"Create once, share everywhere. Reach millions of renters — make your listing once with us, and we'll automatically distribute it across all popular property agencies. It’s no surprise Renti landlords rent their properties 30-40% faster. Share your vacancy and get new leads within 24 hours!"}
                image={"/images/services/homeowner2-1.webp"}
            />
        </div>
    )
}

export default Landlord;