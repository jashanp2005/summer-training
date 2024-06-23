import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './payNow.css';

const PayNow = () => {
  const [name, setName] = useState("");
  const [cardNum, setNumber] = useState("");
  const [cvv, setCcv] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment is Done");
  }

  return (
    <div className="paynowContainer">
      <div className="paynowHeader">
        <h1 className="heading">Fill Payment Details</h1>
        <Link to="/"><button className="homeButton">Home</button></Link>
      </div>
      <form onSubmit={handleSubmit} className='authForm'>
        <label>
          Number on Card:
          <input type="password" value={cardNum} placeholder='Enter Card Number' onChange={(e) => { setNumber(e.target.value) }} />
        </label>
        <label>
          Name of Card Holder:
          <input type="text" value={name} placeholder='Enter Card Holder Name' onChange={(e) => { setName(e.target.value) }} />
        </label>
        <label>
          CVV:
          <input type="password" value={cvv} placeholder='CVV' onChange={(e) => { setCcv(e.target.value) }} />
        </label>
        <button type="submit" className="submitButton">Pay</button>
      </form>
    </div>
  );
}

export default PayNow;
