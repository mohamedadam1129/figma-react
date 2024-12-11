import React, { useState, useEffect } from 'react';
import { getTestimonials } from './apiService'; 

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]); 
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchTestimonials = async () => {
      try {
        const data = await getTestimonials(); 
        setTestimonials(data);
        setLoading(false); 
      } catch (err) {
        setError(err.message); 
        setLoading(false); 
      }
    };

    fetchTestimonials();
  }, []); 

  if (loading) {
    return <p>Loading testimonials...</p>; 
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>; 
  }

  return (
    <section id="testimonials">
      <h2>What Our Customers Say</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="testimonial">
            <p className="testimonial-message">"{testimonial.message}"</p>
            <p className="testimonial-author">- {testimonial.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
