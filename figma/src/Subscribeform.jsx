import React, { useState } from 'react';
import { submitSubscribeForm } from './apiService'; 

const SubscribeForm = () => {
  const [formData, setFormData] = useState({ email: '' }); 
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
      await submitSubscribeForm(formData);
      setSuccess(true); 
      setFormData({ email: '' }); 
    } catch (err) {
      setError(err.message); 
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit}>
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
      <button type="submit" disabled={loading}>
        {loading ? 'Submitting...' : 'Subscribe'}
      </button>
      {success && <p>Thank you for subscribing!</p>} {/* Success message */}
      {error && <p style={{ color: 'red' }}>Error: {error}</p>} {/* Error message */}
    </form>
  );
};

export default SubscribeForm;
