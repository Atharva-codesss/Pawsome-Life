import React from 'react';

const pets = {
  Dogs: [
    { name: 'Sheru', image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { name: 'Alex', image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { name: 'Motii', image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { name: 'Rocky', image: 'https://images.unsplash.com/photo-1529429617124-95b109e86bb8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  ],
  Cats: [
    { name: 'Bella', image: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { name: 'Oggy', image: 'https://images.unsplash.com/photo-1573865526739-10659fec78a5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { name: 'Tom', image: 'https://images.unsplash.com/photo-1492370284958-c20b15c692d2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { name: 'Cherry', image: 'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  ],
  Birds: [
    { name: 'Sweetie', image: 'https://images.unsplash.com/photo-1452570053594-1b985d6ea890?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { name: 'Tweety', image: 'https://images.unsplash.com/photo-1522926193341-e9ffd686c60f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { name: 'Rio', image: 'https://images.unsplash.com/photo-1555169062-013468b47731?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { name: 'Flocky', image: 'https://images.unsplash.com/photo-1444464666168-49d633b86797?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
  ],
  Hamsters: [
    { name: 'Gabru', image: 'https://images.unsplash.com/photo-1425082661705-1834bfd09dca?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { name: 'Peanut', image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80' },
    { name: 'Whiskers', image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80' },
    { name: 'Fluffu', image: 'https://images.unsplash.com/photo-1548767797-d8c844163c4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80' },
  ],
};

interface AdoptionSectionProps {
  category: 'Dogs' | 'Cats' | 'Birds' | 'Hamsters'; // categories
}

const AdoptionSection: React.FC<AdoptionSectionProps> = ({ category }) => {
  const selectedPets = pets[category] || []; // Safely access the pets array

  return (
    <div className="py-12 md:py-16 bg-[#b6f1c4]">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-[#0d4024] md:mb-10">Adopt {category}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 md:gap-8">
          {selectedPets.map((pet, index) => (
            <div key={index} className="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-[#0d4024] transition-shadow">
              <div className="w-52 h-40 bg-cover bg-center rounded-2xl" style={{ backgroundImage: `url(${pet.image})` }}></div>
              <div className="">
                  <p className="font-extrabold">{pet.name}</p>
                  <p className="">Adopt these lovely {category.toLowerCase()}.</p>
              </div>
              <button className="bg-[#1a5736] font-extrabold p-2 px-6 rounded-xl hover:bg-sky-500 transition-colors">See more</button>
            </div>
          ))}

          {/* Custom "View more pets" card */}
          <div className="w-60 h-80 bg-neutral-800 rounded-3xl text-neutral-300 p-4 flex flex-col items-start justify-center gap-3 hover:bg-gray-900 hover:shadow-2xl hover:shadow-[#0d4024] transition-shadow">
            <div className="w-52 h-40 bg-sky-300 rounded-2xl flex items-center justify-center">
              <p className="text-center font-extrabold text-xl text-neutral-800">More pets near you</p>
            </div>
            <div className="">
                <p className="font-extrabold">View more Pets near you</p>
            </div>
            <button className="bg-[#1a5736] font-extrabold p-2 px-6 rounded-xl hover:bg-[#0d4024] transition-colors">Explore More</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdoptionSection;
