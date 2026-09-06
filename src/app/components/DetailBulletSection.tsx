import React from 'react';

interface DetailBulletSectionProps {
  title: string;
  items: string[];
}

const DetailBulletSection = ({ title, items }: DetailBulletSectionProps) => {
  if (!items || items.length === 0) return null;

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-3">{title}</h3>
      <ul className="space-y-2 text-gray-700">
        {items.map((item, idx) => (
          <li key={idx} className="leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DetailBulletSection;
