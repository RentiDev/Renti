import { useState } from 'react'
import TabButton from './TabButton'

interface NavBarProps {
    onTabChange: (tab: string) => void;
    activeTab: string;
}

const SelectUserNavBar = ({ onTabChange, activeTab }: NavBarProps) => {

    return (
        <div className="mt-10 flex items-center gap-3 bg-white rounded-full px-5 shadow-xl py-5">
                <TabButton
                    text="For Tenants"
                    handleClick={() => onTabChange("tenant")}
                    isActive={activeTab === "tenant"}
                />
                <div className="border-r-2 border-gray-400 h-7 mx-3"></div>
                <TabButton
                    text="For Landlords"
                    handleClick={() => onTabChange("landlord")}
                    isActive={activeTab === "landlord"}
                />
        </div>
    )
}


export default SelectUserNavBar