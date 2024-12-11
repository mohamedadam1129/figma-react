import React from 'react';
import appscreen from '../src/assets/app screenshot.svg';
import iconeasy from '../src/assets/icon cost.svg'; 
const AppFeatures = () => {
  const features = [
    { title: 'Easy Payments', desc: 'Et mollis purus tempor congue...' },
    { title: 'Data Security', desc: 'Augue pulvinar justo, fermentum...' },
    { title: 'Cost Statistics', desc: 'Mattis ante ultricies non amet...' },
    { title: 'Support 24/7', desc: 'A elementum, imperdiet enim...' },
    { title: 'Regular Cashback', desc: 'Sit facilisis dolor arcu...' },
    { title: 'Top Standards', desc: 'Faucibus cursus maecenas...' },
  ];

  return (
    <section id="app-features" className="features">
      <div className="features-content">
        <div className="feature-image">
          <img src={appscreen} alt="App Screenshot" className="w-full rounded-lg shadow-lg" />
        </div>
        <div className="feature-text">
          <h2 className="text-3xl font-bold mb-4">App Features</h2>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit...
          </p>
          <div className="feature-grid">
            {features.map((feature, index) => (
              <div
                key={`feature-${index}`}
                className="bg-white rounded-lg shadow-md p-4 flex items-start"
              >
                <div className="feature-item">
                  <img src={iconeasy} alt={feature.title} className="w-12 h-12 rounded-full" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-1">{feature.title}</h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppFeatures;