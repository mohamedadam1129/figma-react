import React, { useState, useEffect } from 'react';
import { getFAQ } from './apiService'; 

const FAQ = () => {
  const [faqs, setFaqs] = useState([]); 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    const fetchFAQ = async () => {
      try {
        const data = await getFAQ(); 
        setFaqs(data);
        setLoading(false); 
      } catch (err) {
        setError(err.message); 
        setLoading(false); 
      }
    };

    fetchFAQ();
  }, []); 

  if (loading) {
    return <p>Loading FAQs...</p>; 
  }

  if (error) {
    return <p style={{ color: 'red' }}>Error: {error}</p>; 
  }

  return (
    <section id="faq">
      <h2>Frequently Asked Questions</h2>
      <ul>
        {faqs.map((faq, index) => (
          <li key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FAQ;
