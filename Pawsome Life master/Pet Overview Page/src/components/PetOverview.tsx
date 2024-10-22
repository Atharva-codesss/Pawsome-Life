import React from 'react';
import { Phone, Syringe, ArrowLeft, Heart, Calendar, Info } from 'lucide-react';

interface PetOverviewProps {
  name: string;
  category: string;
  species: string;
  age: string;
  vaccinationStatus: boolean;
  contactNumber: string;
  imageUrl: string;
  description: string;
}

const PetOverview: React.FC<PetOverviewProps> = ({
  name,
  category,
  species,
  age,
  vaccinationStatus,
  contactNumber,
  imageUrl,
  description,
}) => {
  return (
    <div className="min-h-screen bg-[#b6f1c4] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <button
            onClick={() => window.history.back()}
            className="group/button relative inline-flex items-center justify-center overflow-hidden rounded-md bg-[#1a5736]/30 backdrop-blur-lg px-6 py-2 text-base font-semibold text-white transition-all duration-300 ease-in-out hover:scale-110 hover:shadow-xl hover:shadow-[#010a05]/50 border border-white/20"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            <span className="text-lg">Back to Home</span>
            <div
              className="absolute inset-0 flex h-full w-full justify-center [transform:skew(-13deg)_translateX(-100%)] group-hover/button:duration-1000 group-hover/button:[transform:skew(-13deg)_translateX(100%)]"
            >
              <div className="relative h-full w-10 bg-white/30"></div>
            </div>
          </button>
        </div>
        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden transform hover:scale-105 transition duration-300">
          <div className="md:flex">
            <div className="md:flex-shrink-0 relative">
              <img className="h-96 w-full object-cover md:w-96" src={imageUrl} alt={name} />
              <div className="absolute top-4 left-4 bg-white bg-opacity-75 rounded-full px-3 py-1 text-sm font-semibold text-indigo-600">
                {category}
              </div>
            </div>
            <div className="p-8 md:p-12">
              <h2 className="text-4xl font-extrabold text-gray-900 mb-4">{name}</h2>
              <p className="text-2xl text-indigo-600 mb-6">{species}</p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="h-6 w-6 text-gray-400 mr-3" />
                  <span className="text-gray-700 font-medium">Age:</span>
                  <span className="ml-2 text-gray-600">{age}</span>
                </div>
                <div className="flex items-center">
                  <Syringe className="h-6 w-6 text-gray-400 mr-3" />
                  <span className="text-gray-700 font-medium">Vaccination Status:</span>
                  <span className={`ml-2 ${vaccinationStatus ? 'text-green-600' : 'text-red-600'} font-semibold`}>
                    {vaccinationStatus ? 'Vaccinated' : 'Not Vaccinated'}
                  </span>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-gray-400 mr-3" />
                  <span className="text-gray-700 font-medium">Shelter Contact:</span>
                  <a href={`tel:${contactNumber}`} className="ml-2 text-blue-600 hover:text-blue-800 font-semibold">
                    {contactNumber}
                  </a>
                </div>
                <div className="flex items-start">
                  <Info className="h-6 w-6 text-gray-400 mr-3 mt-1" />
                  <div>
                    <span className="text-gray-700 font-medium">About {name}:</span>
                    <p className="mt-1 text-gray-600 leading-relaxed">{description}</p>
                  </div>
                </div>
              </div>
              <div className="mt-10">
                <button className="w-full bg-[#1a5736] text-white px-6 py-3 rounded-full font-semibold hover:bg-green-700 transition duration-300 flex items-center justify-center">
                  <Heart className="h-5 w-5 mr-2" />
                  Adopt Me
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetOverview;
