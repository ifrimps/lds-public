import React from 'react';

interface CardProps {
  imageSrc: string;
  title: string;
  description: string;
  maxWidthClass?: string;
}

const Card: React.FC<CardProps> = ({
  imageSrc,
  title,
  description,
  maxWidthClass = 'max-w-150',
}) => {
  return (
    <div
      className={`flex border rounded-lg overflow-hidden shadow-lg ${maxWidthClass}`}
    >
      <img src={imageSrc} alt={title} className="h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-bold">{title}</h2>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export { Card };
