import React, { useState, useEffect } from 'react';
import '../css/central.css';
import '../lib/animate/animate.min.css';
import '../lib/owlcarousel/assets/owl.carousel.min.css';
import '../lib/lightbox/css/lightbox.min.css';
import PersonalInfo from '../pages/PersonalInfo';
import App from '../App';
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
const Navbar = () => {



  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsTopOfPage(scrollTop === 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <nav className={`
            ${isTopOfPage ? '' : 'sticky-top'}
            navbar navbar-expand-lg navbar-light  px-4 px-lg-5 py-3 py-lg-0`}>
      <a href="" className="navbar-brand p-0">
        <h1 className="m-0">Insurance Management  </h1>
      </a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
        <span className="fa fa-bars"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <div className="navbar-nav mx-auto py-0">
          <Link to="/" className="nav-item nav-link">Home</Link>
          <Link to="/PersonalInfo" className="nav-item nav-link">Personal Info</Link>
      

          <Routes>
              <Route path="/" element={<App />} />
              <Route path="/PersonalInfo" element={<PersonalInfo />} />
          </Routes>

          <div className="nav-item dropdown">
            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
            <div className="dropdown-menu m-0">
              <a href="team.html" className="dropdown-item">Our Team</a>
              <a href="testimonial.html" className="dropdown-item">Testimonial</a>
              <a href="404.html" className="dropdown-item">404 Page</a>
            </div>
          </div>
          <a href="contact.html" className="nav-item nav-link">Contact</a>
        </div>
        <a href="" className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block">Get Started</a>
      </div>
    </nav>
  )
}

export default Navbar