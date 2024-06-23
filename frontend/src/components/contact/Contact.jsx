import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './contact.css'; // Import the CSS for styling

const Contact = () => {
  return (
    <div>
      <Header />
      <main className="mainContent contactUs">
        <section>
          <h2>Contact Us</h2>
          <p>
            Have questions or feedback? Reach out to our team through the channels below:
          </p>
          <div className="contactDetails">
            <p>Email: info@example.com</p>
            <p>Phone: +1234567890</p>
            <p>Address: 123 Street, City, Country</p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
