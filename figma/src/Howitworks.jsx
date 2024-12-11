import React from 'react'
import budget from './assets/Iphone my budget desktop.svg';
import transactions from '../src/assets/iphoneyourcards.svg';
import transferscreen from '../src/assets/screen 2.svg'; 
const HowItWorks = () => (
    <section id="how-it-works">
      <div className="container">
        <h2>How Does It Work?</h2>
        <div className="app-showcase">
          <div className="phone-screen">
            <img src={budget} alt="Budget screen" />
          </div>
          <div className="phone-screen main-screen">
            <img src={transactions} alt="Transactions screen" />
            <div className="screen-description">
              <h2>Latest transaction history</h2>
              <p>Enim, et amet praesent pharetra...</p>
            </div>
          </div>
          <div className="phone-screen">
            <img src={transferscreen} alt="Transfer screen" />
          </div>
        </div>
      </div>
    </section>
  );

  export default HowItWorks;


