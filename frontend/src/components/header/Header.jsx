import React from "react";
import {
  faBed,
  faCar,
  faPlane,
  faTaxi,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css"; // Ensure this import is correct

const Header = () => {
  return (
    <header className="header">
      <div className="headerContainer">
        <nav className="headerList">
          <a href="/" className="headerListItem active" aria-current="page">
            <FontAwesomeIcon icon={faBed} />
            <span>Home</span>
          </a>
          <a href="about" className="headerListItem">
            <FontAwesomeIcon icon={faPlane} />
            <span>About us</span>
          </a>
          <a href="contact" className="headerListItem">
            <FontAwesomeIcon icon={faCar} />
            <span>Contact us</span>
          </a>
          <a href="login" className="headerListItem">
            <FontAwesomeIcon icon={faBed} />
            <span>Login</span>
          </a>
          <a href="register" className="headerListItem">
            <FontAwesomeIcon icon={faTaxi} />
            <span>Register</span>
          </a>
        </nav>
        <div className="headerContent">
          <h1 className="headerTitle">
            A lifetime of discounts? It's Genius.
          </h1>
          <p className="headerDesc">
            Get rewarded for your travels – unlock instant savings of 10%. Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias eligendi quam quo, molestias praesentium placeat adipisci sequi distinctio iure laboriosam minus explicabo deserunt autem accusamus maxime aut ratione reiciendis voluptatum.
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
