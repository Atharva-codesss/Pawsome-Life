import React from 'react';
import { Dog, Cat, Bird, Mouse } from 'lucide-react';


const categories = [
  { name: 'Dogs', icon: Dog, imgUrl: '/src/images/dog.png' },
  { name: 'Cats', icon: Cat, imgUrl: '/src/images/cat.png' },
  { name: 'Birds', icon: Bird, imgUrl: '/src/images/pet.png' }, 
  { name: 'Hamsters', icon: Mouse, imgUrl: '/src/images/hamster.png' }
];

const Categories = () => {
  return (
    <div className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#173a13] md:mb-10" >Find Your Perfect Pet</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {categories.map((category) => (
            <div key={category.name} className="text-center">
              <div 
                className="rounded-full p-10 mb-2 md:mb-4 inline-block w-36 h-36 md:w-48 md:h-48 overflow-hidden transition-all duration-300" 
                style={{ backgroundColor: '#b6f1c4' }} 
              >
                <img 
                  src={category.imgUrl} 
                  alt={category.name} 
                  className="w-full h-full object-cover rounded-full transition-transform duration-300 hover:scale-110" 
                />
              </div>
              <h3 className="text-lg md:text-xl text-[#173a13] font-semibold">{category.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
