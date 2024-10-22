import React from 'react';
import PetOverview from './components/PetOverview';

function App() {
  // This is example data. In a real application, you'd fetch this data based on the selected pet.
  const petData = {
    name: "Sheru",
    category: "Dogs",
    species: "Golden Retriever",
    age: "3 years",
    vaccinationStatus: true,
    contactNumber: "+91 9876543210",
    imageUrl: "https://images.unsplash.com/photo-1552053831-71594a27632d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
    description: "Sheru is a friendly and energetic Golden Retriever who loves to play fetch and go for long walks. He's great with children and other dogs, making him a perfect family companion. Sheru is looking for an active home where he can receive lots of love and attention."
  };

  return (
    <div className="App">
      <PetOverview {...petData} />
    </div>
  );
}

export default App;