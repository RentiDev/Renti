import React from 'react';
import Image from 'next/image';

interface PropertyPictureProps {
  src: string;
  alt: string;
}

const PropertyPicture: React.FC<PropertyPictureProps> = ({ src, alt }) => {
  return (
    <div className="flex border-4 border-white rounded-2xl overflow-auto object-contain shadow-lg">
      <figure>
        {/* <Image src={src} alt={alt} width={500} height={1000} /> */}
        <img src={src} alt={alt} />
      </figure>
    </div>
  );
};

export default PropertyPicture;