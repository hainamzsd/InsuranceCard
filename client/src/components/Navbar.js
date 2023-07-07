import React, { useState, useEffect } from 'react';
import '../css/central.css';
import '../lib/animate/animate.min.css';
import '../lib/owlcarousel/assets/owl.carousel.min.css';
import '../lib/lightbox/css/lightbox.min.css';
import PersonalInfo from '../pages/PersonalInfo';
import ReactDOM from "react-dom/client";
import { Button, Modal, Form,Nav, Tab } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
const Navbar = () => {
  //login
  const getUser = async () => {
    try {
      const response = await fetch('https://localhost:7184/api/Account/1');
      if (!response.ok) {
        throw new Error('API request failed');
      }
      const data = await response.json();
      // Process the received data here
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  getUser();


  const getHeaderText = () => {
    return activeTab === 'login' ? 'Login' : 'Register';
  };
  const [showModal, setShowModal] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [activeTab, setActiveTab] = useState('login');
  const handleTabChange = (tab) => setActiveTab(tab);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  
  const handleLogin = (e) => {
    e.preventDefault();
    // Perform login logic here
    console.log('Login clicked');
  };

  //register
  const [usernameRegister, setUsernameRegister] = useState('');
  const [emailRegister, setEmailRegister] = useState('');
  const [passwordRegister, setPasswordRegister] = useState('');
  const [fullName, setFullName] = useState('');
  const [contactNumber, setContactNumber] = useState('');
  const [address, setAddress] = useState('');
  const [citizenIdentification, setCitizenIdentification] = useState('');
  const [rePasswordRegister, setRePasswordRegister] = useState('');

  const handleEmailRegisterChange = (e) => setEmail(e.target.value);
  const handlePasswordRegisterChange = (e) => setPassword(e.target.value);
  const handleFullNameChange = (e) => setFullName(e.target.value);
  const handleContactNumberChange = (e) => setContactNumber(e.target.value);
  const handleAddressChange = (e) => setAddress(e.target.value);
  const handleCitizenIdentificationChange = (e) => setCitizenIdentification(e.target.value);
  const handleRePasswordRegisterChange = (e) => setRePasswordRegister(e.target.value);
  const handleRegister = (e) => {
    e.preventDefault();
    // Perform register logic here
    console.log('Register clicked');
  };


  const [isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      setIsTopOfPage(scrollTop === 0 );
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
          <div className="nav-item dropdown">
            <Link to="/CustomerHistory" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Customer History</Link>
            <div className="dropdown-menu m-0">
              <Link href="team.html" className="dropdown-item">Payment History</Link>
              <Link href="testimonial.html" className="dropdown-item">Accident History</Link>
              <Link href="404.html" className="dropdown-item">Punishment History</Link>
              <Link href="404.html" className="dropdown-item">Compensation History</Link>
              <Link href="404.html" className="dropdown-item">Contract Information</Link>
            </div>
          </div>
          <Link to="/RequestContract" className="nav-item nav-link">Request Contract</Link>
        </div>
        <Button className="btn rounded-pill py-2 px-4 ms-3 d-none d-lg-block" variant="primary" onClick={handleShowModal}>
        Login
      </Button>
      </div>
      
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>{getHeaderText()}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Tab.Container activeKey={activeTab} onSelect={handleTabChange}>
            <Nav variant="tabs" className="mb-3">
              <Nav.Item>
                <Nav.Link eventKey="login">Login</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="register">Register</Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey="login">
                <Form onSubmit={handleLogin}>
                  <Form.Group controlId="formEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={handlePasswordChange}
                    />
                  </Form.Group>
                  <Button className='mt-3' variant="primary" type="submit">
                    Login
                  </Button>
                </Form>
              </Tab.Pane>
              <Tab.Pane eventKey="register">
                <Form onSubmit={handleRegister}>
                <Form.Group controlId="formRegisterEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={email}
                      onChange={handleEmailChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formRegisterEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Enter email"
                      value={emailRegister}
                      onChange={handleEmailRegisterChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formRegisterPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Password"
                      value={passwordRegister}
                      onChange={handlePasswordRegisterChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formRegisterRePassword">
                    <Form.Label>Re-enter Password</Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Re-enter Password"
                      value={rePasswordRegister}
                      onChange={handleRePasswordRegisterChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formRegisterFullName">
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter full name"
                      value={fullName}
                      onChange={handleFullNameChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formRegisterContactNumber">
                    <Form.Label>Contact Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter contact number"
                      value={contactNumber}
                      onChange={handleContactNumberChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formRegisterAddress">
                    <Form.Label>Address</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter address"
                      value={address}
                      onChange={handleAddressChange}
                    />
                  </Form.Group>
                  <Form.Group controlId="formRegisterCitizenIdentification">
                    <Form.Label>Citizen Identification</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter citizen identification"
                      value={citizenIdentification}
                      onChange={handleCitizenIdentificationChange}
                    />
                  </Form.Group>
                  <Button className='mt-3' variant="primary" type="submit">
                    Register
                  </Button>
                </Form>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </Modal.Body>
      </Modal>
    </nav>
  )
}

export default Navbar