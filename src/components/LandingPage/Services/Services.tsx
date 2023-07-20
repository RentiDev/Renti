import { useState } from 'react';
import SelectUserNavBar from './SelectUserNavBar';
import Tenant from './TenantPopUp';
import Landlord from './LandlordPopUp';


const Services = () => {

    const [tab, setTab] = useState("tenant");

    const tenantClasses = "flex flex-col items-center w-screen px-[5vw] pb-20 bg-gradient-to-bl from-blue-100 via-blue-300 to-blue-500";
    const landlordClasses = "flex flex-col items-center w-screen px-[5vw] pb-20 bg-gradient-to-bl from-violet-100 via-violet-300 to-violet-500";
  

    return (
        <>
          <div className={tab === 'tenant' ? tenantClasses : landlordClasses}>
              <SelectUserNavBar onTabChange={setTab} activeTab={tab}/>
                {tab === "tenant" ? <Tenant /> : <Landlord />}
          </div>      
        </>

    )
}

export default Services;