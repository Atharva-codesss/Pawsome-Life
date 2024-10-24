import React from 'react';
import { Heart } from 'lucide-react';

interface PetCardProps {
  id: number;
  name: string;
  age: string;
  image: string;
  breed: string;
}

const PetCard: React.FC<PetCardProps> = ({ name, age, image, breed }) => {
  return (
    <div className="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 transition-all duration-300 transform hover:scale-105 hover:bg-gray-900 hover:shadow-2xl hover:shadow-[#0d4024]">
      {/* Image */}
      <div className="w-52 h-40 bg-cover bg-center rounded-2xl transition-transform duration-300 hover:scale-105" style={{ backgroundImage: `url(${image})` }}></div>
      
      {/* Pet Info */}
      <div>
        <p className="font-extrabold text-lg text-white">{name}</p>
        <p className="text-sm text-neutral-400">{breed}</p>
      </div>
      
      {/* Age Tag */}
      <span className="px-2 py-1 bg-indigo-50 text-indigo-600 text-sm rounded-full">
        {age}
      </span>
      
      {/* Action Button */}
      <button className="bg-[#1a5736] font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">
        See more
      </button>
    </div>
  );
}

export default PetCard;
