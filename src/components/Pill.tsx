import React from 'react';
import PropertyCard from './PropertyCard';

interface PillProps {
    items: React.ReactNode;
}

const Pill: React.FC<PillProps> = ({ items }) => {
    return (
        <div className="flex w-[80vw] items-center gap-12 bg-black rounded-full justify-center">
            {items}
        </div>
    );
};

export default Pill;
