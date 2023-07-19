import { useState } from 'react';
import SelectUserNavBar from './SelectUserNavBar';
import Tenant from './TenantPopUp';
import Landlord from './LandlordPopUp';


const Services = () => {

    const [tab, setTab] = useState("tenant");

    const tenantClasses = "flex flex-col items-center h-[200vh] w-screen px-[5vw] bg-[#83ABE1]";
    const landlordClasses = "flex flex-col items-center h-[200vh] w-screen px-[5vw] bg-[#ADD8E6]";
  

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