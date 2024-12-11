import axios from 'axios';


const baseURL = import.meta.env.VITE_API_BASE_URL;

const apiClient = axios.create({
  baseURL, 
});

// API Calls

// Fetch FAQ
export const getFAQ = async () => {
  const faqURL = 'https://win24-assignment.azurewebsites.net/api/faq'; // Define the specific endpoint URL
  try {
    const response = await apiClient.get(faqURL);
    return response.data;
  } catch (error) {
    console.error('Error fetching FAQ:', error);
    throw error;
  }
};

// Fetch Testimonials
export const getTestimonials = async () => {
  const testimonialsURL = `https://win24-assignment.azurewebsites.net/api/testimonials`; // Define the specific endpoint URL
  try {
    const response = await apiClient.get(testimonialsURL);
    return response.data;
  } catch (error) {
    console.error('Error fetching testimonials:', error);
    throw error;
  }
};

// Submit Contact Form
export const submitContactForm = async (formData) => {
  const contactFormURL = `https://win24-assignment.azurewebsites.net/api/forms/contact`; // Define the specific endpoint URL
  try {
    const response = await apiClient.post(contactFormURL, formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};

// Submit Subscribe Form
export const submitSubscribeForm = async (formData) => {
  const subscribeFormURL = `https://win24-assignment.azurewebsites.net/api/forms/subscribe`; // Define the specific endpoint URL
  try {
    const response = await apiClient.post(subscribeFormURL, formData);
    return response.data;
  } catch (error) {
    console.error('Error submitting subscribe form:', error);
    throw error;
  }
};
