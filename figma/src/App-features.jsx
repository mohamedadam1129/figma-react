import React from 'react'
import screen1 from '../src/assets/screen 1.svg'; 
import screen2 from '../src/assets/screen 2.svg'; 
import screen3 from '../src/assets/screen 3.svg'; 
import appscreen from '../src/assets/app screen.svg';
import contacts from '../src/assets/contacts.svg';  

const AppFeatures = () => {
    const features = [
      { title: 'Easy Payments', desc: 'Et mollis purus tempor congue...' },
      { title: 'Data Security', desc: 'Augue pulvinar justo, fermentum...' },
      { title: 'Cost Statistics', desc: 'Mattis ante ultricies non amet...' },
      { title: 'Support 24/7', desc: 'A elementum, imperdiet enim...' },
      { title: 'Regular Cashback', desc: 'Sit facilisis dolor arcu...' },
      { title: 'Top Standards', desc: 'Faucibus cursus maecenas...' }
    ];
  
    return (
      <section id="app-features">
        <div className="container">
          <div className="features-content">
            <div className="feature-image">
              <img src="/api/placeholder/400/300" alt="App Screenshot" />
            </div>
            <div className="feature-text">
              <h2>App Features</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
              <div className="feature-grid">
                {features.map((feature, index) => (
                  <div key={`feature-${index}`} className="feature-item">
                    <img src={`/api/placeholder/50/50`} alt={feature.title} />
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  export default AppFeatures;