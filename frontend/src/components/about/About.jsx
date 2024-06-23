import React from 'react';
import Header from '../header/Header';
import Footer from '../footer/Footer';
import './about.css'; // Import the CSS for styling

const About = () => {
  return (
    <div>
      <Header />
      <main className="mainContent aboutUs">
        <section>
          <div className="aboutUsContent">
            <div className="aboutUsText">
              <h2>About Us</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor. Cras elementum ultrices diam. Maecenas ligula massa, varius a, semper congue, euismod non, mi.
              </p>
              <p>
                Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.
              </p>
            </div>
            <div className="aboutUsImage">
              <img src='https://images.news18.com/ibnlive/uploads/2022/06/chandigarh-univ-165581419816x9.jpg' alt="Company Image"/>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default About;
