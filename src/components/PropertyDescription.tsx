import React from 'react';

interface PropertyDescriptionProps {
  name: string;
  price: number;
  subheading: string;
  size: number;
  number_bedrooms: number;
  number_bathrooms: number;
  description: string;
}

const PropertyDescription: React.FC<PropertyDescriptionProps> = ({ name, price, subheading, size, number_bedrooms, number_bathrooms, description }) => {
  return (
    <div className="flex flex-col justify-left gap-4 px-24">
        <h1 className="text-5xl uppercase font-lufgaMedium tracking-tight text-gray-900 sm:text-[6rem] text-left">
          {name}
        </h1>
        <p className="mt-4 text-3xl font-lufgaBold text-gray-800">
          $ {price}
        </p>
        <p className="text-xl font-lufgaMedium text-slate-700">
          {subheading}
        </p>
        <div className="flex justify-left items-center gap-2 mt-2">
          <p className="text-xl font-lufgaMedium text-slate-900 mr-5">
            {size} sqft
          </p>
          <img src = "/images/bed.svg" style={{ width: '36px', height: '36px' }} />
          <p className="text-xl font-lufgaMedium text-slate-900 mr-5">
            {number_bedrooms} bedrooms
          </p>
          <img src = "/images/bath.svg" style={{ width: '40px', height: '40px' }} />
          <p className="text-xl font-lufgaMedium text-slate-900">
            {number_bathrooms} bathrooms
          </p>
        </div>
      <div className="flex flex-col justify-left gap-4 pr-20">
        <p className="text-2xl font-lufgaMedium text-black">
          {description}
        </p>
      </div>
    </div>
  );
};

export default PropertyDescription;