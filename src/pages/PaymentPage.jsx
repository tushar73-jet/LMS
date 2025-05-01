import React, { useState } from 'react';
import './PaymentPage.css';

const PaymentPage = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [details, setDetails] = useState({
    cardNumber: '',
    expiry: '',
    cvv: '',
    upiId: '',
  });

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('✅ Payment Successful!');
  };

  return (
    <div className="payment-wrapper">
      <div className="payment-card">
        <h2>Secure Payment</h2>
        <p className="subtitle">Choose a payment method to proceed</p>

        <form onSubmit={handleSubmit} className="payment-form">
          <label>Payment Method</label>
          <select
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
            required
          >
            <option value="">-- Select --</option>
            <option value="card">💳 Credit/Debit Card</option>
            <option value="upi">📱 UPI</option>
          </select>

          {paymentMethod === 'card' && (
            <>
              <input
                type="text"
                name="cardNumber"
                placeholder="Card Number"
                required
                value={details.cardNumber}
                onChange={handleChange}
              />
              <div className="card-row">
                <input
                  type="text"
                  name="expiry"
                  placeholder="MM/YY"
                  required
                  value={details.expiry}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="cvv"
                  placeholder="CVV"
                  required
                  value={details.cvv}
                  onChange={handleChange}
                />
              </div>
            </>
          )}

          {paymentMethod === 'upi' && (
            <input
              type="text"
              name="upiId"
              placeholder="Enter your UPI ID (e.g., name@upi)"
              required
              value={details.upiId}
              onChange={handleChange}
            />
          )}

          <button type="submit" className="pay-button">Pay ₹499</button>
        </form>
      </div>
    </div>
  );
};

export default PaymentPage;
