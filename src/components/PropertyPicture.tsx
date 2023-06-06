import React from 'react';

interface PropertyPictureProps {
  src: string;
  alt: string;
}

const PropertyPicture: React.FC<PropertyPictureProps> = ({ src, alt }) => {
  return (
    <div className="relative flex flex-col border-4 border-white rounded-2xl overflow-auto object-contain shadow-lg">
      <figure>
        <img src={src} alt={alt} />
      </figure>
    </div>
  );
};

export default PropertyPicture;