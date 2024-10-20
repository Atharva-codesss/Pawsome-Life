import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import AdoptionSection from './components/AdoptionSection';
import Banner from './components/Banner';
import AboutTeam from './components/AboutTeam';
import Footer from './components/Footer';


function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Hero />
      <Categories />
      <AdoptionSection category="Dogs" />
      <AdoptionSection category="Cats" />
      <AdoptionSection category="Birds" />
      <AdoptionSection category="Hamsters" />
      <Banner />
      <AboutTeam />
      <Footer />
    </div>
  );
}

export default App;