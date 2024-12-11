import React from "react";
const BrandLogos = () => {
  const logoPaths = [
    './src/assets/logo 1.svg',
    './src/assets/logo 2.svg',
    './src/assets/logo 3.svg',
    './src/assets/logo 4.svg',
    './src/assets/logo 5.svg',
    './src/assets/logo 6.svg',
  ];

  return (
    <section id="brands">
      <div className="container">
        <div className="logo-row">
          {logoPaths.map((path, index) => (
            <img
              key={`brand-logo-${index}`} // Ensure a unique key for each logo
              src={path}
              alt={`Brand Logo ${index + 1}`}
              className="brand-logo"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandLogos;
