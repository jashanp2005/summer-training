import React from 'react';
import Header from '../header/Header';
import SearchForm from '../searchForm/SearchForm';
import Footer from '../footer/Footer';
import './home.css';

const Home = () => {
  return (
    <div>
      <Header />
      <main className="mainContent">
        <SearchForm />
        <section className="featuredDestinations">
          <h2>Featured Destinations</h2>
          <div className="destinationsGrid">
            <div className="destinationCard">
              <img src="https://mytriphack.com/wp-content/uploads/2016/03/Open_Hand_monument_Chandigarh.jpg" alt="Destination 1" />
              <h3>Chandigarh</h3>
            </div>
            <div className="destinationCard">
              <img src="https://www.goophe.com/wp-content/uploads/2018/05/b531f78c5de4f8959f65d6dee9c6a476.jpg" alt="Destination 2" />
              <h3>Delhi</h3>
            </div>
            <div className="destinationCard">
              <img src="https://c.ndtvimg.com/2024-01/62ksduvc_ram-temple_625x300_20_January_24.jpeg?im=FaceCrop?im=FaceCrop,algorithm=dnn,width=1200,height=738" alt="Destination 3" />
              <h3>Ayodhya</h3>
            </div>
            <div className="destinationCard">
              <img src="https://assets.cntraveller.in/photos/60c07fa11393a40ce8d810b0/master/pass/D8R9MT.jpg" alt="Destination 4" />
              <h3>Amritsar</h3>
            </div>
          </div>
        </section>
        <section className="userReviews">
          <h2>User Reviews</h2>
          <div className="reviewsGrid">
            <div className="reviewCard">
              <p>"Amazing experience! Highly recommend this service."</p>
              <h4>- Chris Gayle</h4>
            </div>
            <div className="reviewCard">
              <p>"A seamless booking process and great customer service."</p>
              <h4>- Ab de villiers</h4>
            </div>
            <div className="reviewCard">
              <p>"Affordable prices and excellent travel options."</p>
              <h4>- Virat Kohli</h4>
            </div>
          </div>
        </section>
        <section className="aboutUs">
          <h2>About Us</h2>
          <p>
            At our travel agency, we believe in making travel accessible and enjoyable for everyone. With years of experience in the industry, we offer the best deals on flights, hotels, and car rentals. Our dedicated team works around the clock to ensure your travel experience is smooth and memorable.
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Home;

