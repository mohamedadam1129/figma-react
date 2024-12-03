
import React from 'react';
import Navbar from './Navbar';
import HeroSection from './Herosection'; 
import BrandLogos from './Brandslogos'; 
import AppFeatures from './App-features'; 
import HowItWorks from './howitworks.jsx';
import TransferFeatures from './transferfeatures.jsx'; 

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <BrandLogos />
      <AppFeatures />
      <HowItWorks />
      <TransferFeatures />
    </div>
  );
};

export default App; 