import React from 'react' 
import logo1 from '../src/assets/logo 1.svg';
import logo2 from '../src/assets/logo 2.svg';
import logo3 from '../src/assets/logo 3.svg';
import logo4 from '../src/assets/logo 4.svg'; 
import logo5 from '../src/assets/logo 5.svg'; 
import logo6 from '../src/assets/logo 6.svg'; 

const BrandLogos = () => (
  <section id="brands">
    <div className="container">
      <div className="logo-row">
        {[1, 2, 3, 4, 5, 6].map((num) => (
          <img 
            key={`brand-logo-${num}`} 
            src={`/api/placeholder/100/50`} 
            alt={`Logo ${num}`} 
            className="brand-logo" 
          />
        ))}
      </div>
    </div>
  </section>
);

export default BrandLogos;
