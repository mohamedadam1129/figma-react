import React from 'react';
import Navbar from './Navbar';
import HeroSection from './Herosection'; 
import BrandLogos from './Brandslogos'; 
import AppFeatures from './App-features'; 
import HowItWorks from './howitworks.jsx';
import Transfer from  './Transferfeatures.jsx';
import Testimonals from './testimonals.jsx';
import Contactform from './Contactform.jsx';
const App = () => {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <BrandLogos />
      <AppFeatures />
      <HowItWorks />
     <Transfer />
     <Testimonals />
     <Contactform />
    </div>
  );
};

export default App; 