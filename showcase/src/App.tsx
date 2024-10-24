import React, { useState } from 'react';
import { Heart, ArrowLeft } from 'lucide-react';
import PetCard from './components/PetCard';
import { pets } from './data/pets';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All Pets');
  const categories = ['All Pets', 'Dogs', 'Cats', 'Birds', 'Hamsters'];

  return (
    <div className="min-h-screen bg-[#b6f1c4]">
      {/* Header */}
      <header className="bg-[#1a5736] shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                <ArrowLeft className="w-6 h-6 text-gray-600" />
              </button>
              <h1 className="text-2xl font-bold text-white">Pets for Adoption</h1>
            </div>
          </div>
        </div>
      </header>

      {/* Category Pills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex space-x-4 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`font-bold py-3 px-6 rounded-full transition-all duration-500 ease-in-out transform ${
                selectedCategory === category
                  ? 'bg-[#1a5736] text-white scale-110'
                  : 'bg-[#b6f1c4] text-black hover:bg-[#1a5736] hover:text-white hover:scale-110'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Pet Grid */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pets.map((pet) => (
            <PetCard key={pet.id} {...pet} />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
