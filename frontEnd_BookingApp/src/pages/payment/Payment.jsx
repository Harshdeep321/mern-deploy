import React, { useState } from "react";
import "./paymentPage.css"; // Import the CSS file
import Navbar from "../../components/navbar/Navbar";

function PaymentPage() {
  const [paymentInfo, setPaymentInfo] = useState({
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    name: "",
  });
  const [paymentError, setPaymentError] = useState(null);
  const loading = false; // Define the loading state based on your data loading logic

  const handlePayment = () => {
    // In a real application, you would integrate with a payment gateway here.
    // For this example, we'll just check if the card number is valid.
    if (/^\d{16}$/.test(paymentInfo.cardNumber)) {
      // Payment is successful. You can proceed with booking.
      alert("Payment successful! Proceeding with the booking.");
    } else {
      setPaymentError("Invalid card number. Please check and try again.");
    }
  };

  return (
    <div>
      <Navbar /> {/* Include your Navbar component */}
      {loading ? (
        "Loading"
      ) : (
        <div className="payment-container">
          <h1>Payment Page</h1>
          <div>
            <label htmlFor="cardNumber">Card Number:</label>
            <input
              type="text"
              id="cardNumber"
              className="payment-input"
              value={paymentInfo.cardNumber}
              onChange={(e) => setPaymentInfo({ ...paymentInfo, cardNumber: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="expirationDate">Expiration Date:</label>
            <input
              type="text"
              id="expirationDate"
              className="payment-input"
              value={paymentInfo.expirationDate}
              onChange={(e) => setPaymentInfo({ ...paymentInfo, expirationDate: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="cvv">CVV:</label>
            <input
              type="text"
              id="cvv"
              className="payment-input"
              value={paymentInfo.cvv}
              onChange={(e) => setPaymentInfo({ ...paymentInfo, cvv: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="name">Name on Card:</label>
            <input
              type="text"
              id="name"
              className="payment-input"
              value={paymentInfo.name}
              onChange={(e) => setPaymentInfo({ ...paymentInfo, name: e.target.value })}
            />
          </div>
          {paymentError && <div className="payment-error">{paymentError}</div>}
          <button className="payment-button" onClick={handlePayment}>
            Pay Now
          </button>
        </div>
      )}
    </div>
  );
}

export default PaymentPage;
