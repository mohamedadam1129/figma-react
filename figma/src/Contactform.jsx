import React, { useState } from 'react';
import { submitContactForm } from './apiService'; 

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' }); 
  const [loading, setLoading] = useState(false); 
  const [success, setSuccess] = useState(false); 
  const [error, setError] = useState(null); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); 
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null); 
    try {
      await submitContactForm(formData); 
      setSuccess(true); 
      setFormData({ name: '', email: '', message: '' }); 
    } catch (err) {
      setError(err.message); 
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
          required
          disabled={loading} 
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
          required
          disabled={loading}
        />
      </div>
      <div>
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          id="message"
          value={formData.message}
          onChange={handleChange}
          required
          disabled={loading}
        />
      </div>
      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Send Message'}
      </button>
      {success && <p>Thank you for your message! We'll get back to you soon.</p>} {/* Success message */}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>} {/* Error message */}
    </form>
  );
};

export default ContactForm;
