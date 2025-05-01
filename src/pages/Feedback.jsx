import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const [formData, setFormData] = useState({
    name: '',
    rating: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    console.log('Feedback submitted:', formData);
  };

  return (
    <div className="feedback-container">
      <h2>We value your feedback</h2>
      {submitted ? (
        <p className="thank-you">Thank you for your feedback!</p>
      ) : (
        <form className="feedback-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            value={formData.name}
            onChange={handleChange}
          />

          <select
            name="rating"
            required
            value={formData.rating}
            onChange={handleChange}
          >
            <option value="">Rate your experience</option>
            <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
            <option value="4">⭐⭐⭐⭐ Good</option>
            <option value="3">⭐⭐⭐ Average</option>
            <option value="2">⭐⭐ Poor</option>
            <option value="1">⭐ Very Poor</option>
          </select>

          <textarea
            name="message"
            placeholder="Your feedback..."
            rows="5"
            required
            value={formData.message}
            onChange={handleChange}
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default Feedback;
