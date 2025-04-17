import React, { useState } from 'react';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [issue, setIssue] = useState('Course Structure');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = {
      name,
      email,
      phoneNumber,
      issue,
      message,
    };
  
    try {
      // Updated API endpoint to your backend
      const response = await fetch('https://online-backend-yc9d.onrender.com/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        setResponseMessage('Thank you! Your message has been sent.');
        // Reset form fields
        setName('');
        setEmail('');
        setPhoneNumber('');
        setIssue('Course Structure');
        setMessage('');
      } else {
        setResponseMessage('There was an issue sending your message. Please try again.');
      }
    } catch (error) {
      setResponseMessage('There was an error submitting your form. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };
  

  return (
    <div className="container mt-10 mx-auto p-6 bg-white rounded-lg shadow-md max-w-2xl">
      <h2 className="text-2xl font-bold mb-4 text-center">Contact Us</h2>
      {responseMessage && <p className="text-center text-sm text-gray-600">{responseMessage}</p>}
      <form onSubmit={handleSubmit}>
        {/* Name Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="name">
            Your Name*
          </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your name"
            required
          />
        </div>

        {/* Email Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="email">
            Contact Email*
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your email address"
            required
          />
        </div>

        {/* Phone Number Field */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="phone">
            Phone Number*
          </label>
          <input
            type="text"
            id="phone"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Enter your phone number"
            required
          />
        </div>

        {/* Issue Dropdown */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="issue">
            Issue Related to*
          </label>
          <select
            id="issue"
            value={issue}
            onChange={(e) => setIssue(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="Course Structure">Course Structure</option>
            <option value="Payment Failure">Payment Failure</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Message Textarea */}
        <div className="mb-4">
          <label className="block text-gray-700 font-bold mb-2" htmlFor="message">
            Your message*
          </label>
          <textarea
            id="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            placeholder="Type your message...."
            rows="4"
            required
          />
        </div>

        {/* Terms and Conditions */}
        <p className="text-gray-600 text-sm mb-4">
          By submitting this form you agree to our terms and conditions and our Privacy Policy, which explains how we may collect, use and disclose your personal information including to third parties.
        </p>

        {/* Submit Button */}
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full"
          disabled={isSubmitting}
        >
          {isSubmitting ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
