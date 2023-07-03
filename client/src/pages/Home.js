import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
const Home = () => {
  return (
    <div className="container-xxl bg-white p-0">
    {/* loading */}
    {/* <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-grow text-primary" style="width: 3rem; height: 3rem;" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
     */}
        <Navbar></Navbar>

    <div className="container-xxl position-relative p-0">

        <div className="container-xxl bg-primary hero-header">
            <div className="container px-lg-5">
                <div className="row g-5 align-items-end">
                    <div className="col-lg-6 text-center text-lg-start">
                        <h1 className="text-white mb-4 animated slideInDown">Effortless Insurance Card Management Made Easy</h1>
                        <p className="text-white pb-3 animated slideInDown">Streamline, Validate, and Verify Insurance Cards with Confidence"</p>
                        <a href="" className="btn btn-secondary py-sm-3 px-sm-5 rounded-pill me-3 animated slideInLeft">Read More</a>
                        <a href="" className="btn btn-light py-sm-3 px-sm-5 rounded-pill animated slideInRight">Contact Us</a>
                    </div>
                    <div className="col-lg-6 text-center text-lg-start">
                        <img className="img-fluid animated zoomIn" src={require('../img/hero.png')} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    


    
    <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
            <div className="row g-4">
                <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="feature-item bg-light rounded text-center p-4">
                        <i className="fa fa-3x fa-mail-bulk text-primary mb-4"></i>
                        <h5 className="mb-3">Ensuring Trust and Authenticity</h5>
                        <p className="m-0">Streamlined Verification Process for Insurance Cards.</p>
                    </div>
                </div>
                <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="feature-item bg-light rounded text-center p-4">
                        <i className="fa fa-3x fa-search text-primary mb-4"></i>
                        <h5 className="mb-3">Simplify Your Card Management</h5>
                        <p className="m-0">Centralize, Organize, and Access Insurance Card Information Effortlessly</p>
                    </div>
                </div>
                <div className="col-lg-4 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="feature-item bg-light rounded text-center p-4">
                        <i className="fa fa-3x fa-laptop-code text-primary mb-4"></i>
                        <h5 className="mb-3">Never Miss a Renewal Date</h5>
                        <p className="m-0">Timely Reminders and Hassle-Free Renewal Process for Insurance Cards</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    


    
    <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
            <div className="row g-5 align-items-center">
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.1s">
                    <p className="section-title text-secondary">About Us<span></span></p>
                    <h1 className="mb-5">Insurance Card Solutions</h1>
                    <p className="mb-4">With over a decade of experience, we are the go-to experts in insurance card solutions. Our team is dedicated to delivering digital solutions that simplify insurance card management. From seamless validation to hassle-free verification, we optimize processes for efficiency and convenience. Trust our expertise to streamline your insurance card experience.</p>
                    <a href="" className="btn btn-primary py-sm-3 px-sm-5 rounded-pill mt-3">Read More</a>
                </div>
                <div className="col-lg-6">
                    <img className="img-fluid wow zoomIn" data-wow-delay="0.5s" src={require('../img/about.png')} />
                </div>
            </div>
        </div>
    </div>
    


    
    <div className="container-xxl bg-primary fact py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5 px-lg-5">
            <div className="row g-4">
                <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s">
                    <i className="fa fa-certificate fa-3x text-secondary mb-3"></i>
                    <h1 className="text-white mb-2" data-toggle="counter-up">1234</h1>
                    <p className="text-white mb-0">Years Experience</p>
                </div>
                <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s">
                    <i className="fa fa-users-cog fa-3x text-secondary mb-3"></i>
                    <h1 className="text-white mb-2" data-toggle="counter-up">1234</h1>
                    <p className="text-white mb-0">Team Members</p>
                </div>
                <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s">
                    <i className="fa fa-users fa-3x text-secondary mb-3"></i>
                    <h1 className="text-white mb-2" data-toggle="counter-up">1234</h1>
                    <p className="text-white mb-0">Satisfied Clients</p>
                </div>
                <div className="col-md-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s">
                    <i className="fa fa-check fa-3x text-secondary mb-3"></i>
                    <h1 className="text-white mb-2" data-toggle="counter-up">1234</h1>
                    <p className="text-white mb-0">Compleate Projects</p>
                </div>
            </div>
        </div>
    </div>
    


    
    <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
            <div className="wow fadeInUp" data-wow-delay="0.1s">
                <p className="section-title text-secondary justify-content-center"><span></span>Our Services<span></span></p>
                <h1 className="text-center mb-5">What Solutions We Provide</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item d-flex flex-column text-center rounded">
                        <div className="service-icon flex-shrink-0">
                            <i className="fa fa-search fa-2x"></i>
                        </div>
                        <h5 className="mb-3">Seamless Validation Process</h5>
                        <p className="m-0">Our advanced system verifies insurance cards swiftly and accurately, ensuring compliance with industry standards. Streamline your validation process with ease.</p>
                        <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item d-flex flex-column text-center rounded">
                        <div className="service-icon flex-shrink-0">
                            <i className="fa fa-laptop-code fa-2x"></i>
                        </div>
                        <h5 className="mb-3">Real-Time Verification Services</h5>
                        <p className="m-0"> With our cutting-edge technology, instantly verify insurance cards for authenticity and validity. Trust our reliable verification services for secure transactions.</p>
                        <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item d-flex flex-column text-center rounded">
                        <div className="service-icon flex-shrink-0">
                            <i className="fab fa-facebook-f fa-2x"></i>
                        </div>
                        <h5 className="mb-3">Effortless Card Organization</h5>
                        <p className="m-0"> Manage and organize insurance cards effortlessly with our user-friendly platform. Centralize all your card-related information for easy access and enhanced efficiency.</p>
                        <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="service-item d-flex flex-column text-center rounded">
                        <div className="service-icon flex-shrink-0">
                            <i className="fa fa-mail-bulk fa-2x"></i>
                        </div>
                        <h5 className="mb-3">Automated Renewal Reminders</h5>
                        <p className="m-0">Never miss a renewal deadline again. Our automated reminders ensure timely renewals of insurance cards, eliminating the hassle of manual tracking.</p>
                        <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="service-item d-flex flex-column text-center rounded">
                        <div className="service-icon flex-shrink-0">
                            <i className="fa fa-thumbs-up fa-2x"></i>
                        </div>
                        <h5 className="mb-3">Real-Time Card Monitoring</h5>
                        <p className="m-0">Track the status and history of insurance cards in real-time. Stay informed about policy changes, expirations, and updates, all at your fingertips.</p>
                        <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="service-item d-flex flex-column text-center rounded">
                        <div className="service-icon flex-shrink-0">
                            <i className="fab fa-android fa-2x"></i>
                        </div>
                        <h5 className="mb-3">Regulatory Compliance Made Simple</h5>
                        <p className="m-0">Ensure compliance with industry regulations effortlessly. Our comprehensive solutions help you navigate complex compliance requirements for insurance cards.</p>
                        <a className="btn btn-square" href=""><i className="fa fa-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    


    
    <div className="container-xxl bg-primary newsletter py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5 px-lg-5">
            <div className="row justify-content-center">
                <div className="col-lg-7 text-center">
                    <p className="section-title text-white justify-content-center"><span></span>Newsletter<span></span></p>
                    <h1 className="text-center text-white mb-4">Stay Always In Touch</h1>
                    <p className="text-white mb-4">Diam dolor diam ipsum et tempor sit. Aliqu diam amet diam et eos labore. Clita erat ipsum et lorem et sit sed stet lorem sit clita duo justo</p>
                    <div className="position-relative w-100 mt-3">
                        <input className="form-control border-0 rounded-pill w-100 ps-4 pe-5" type="text" placeholder="Enter Your Email" style={{height: "48px"}} />
                        <button type="button" className="btn shadow-none position-absolute top-0 end-0 mt-1 me-2"><i className="fa fa-paper-plane text-primary fs-4"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    

    


    
    <div className="container-xxl py-5">
        <div className="container py-5 px-lg-5">
            <div className="wow fadeInUp" data-wow-delay="0.1s">
                <p className="section-title text-secondary justify-content-center"><span></span>Our Team<span></span></p>
                <h1 className="text-center mb-5">Our Team Members</h1>
            </div>
            <div className="row g-4">
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="team-item bg-light rounded">
                        <div className="text-center border-bottom p-4">
                            <h5>Mai Van A</h5>
                            <span>CEO & Founder</span>
                        </div>
                        <div className="d-flex justify-content-center p-4">
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
                    <div className="team-item bg-light rounded">
                        <div className="text-center border-bottom p-4">
                            <h5>Hoang Van B</h5>
                            <span>Web Designer</span>
                        </div>
                        <div className="d-flex justify-content-center p-4">
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="team-item bg-light rounded">
                        <div className="text-center border-bottom p-4">
                            <h5>Le Van C</h5>
                            <span>SEO Expert</span>
                        </div>
                        <div className="d-flex justify-content-center p-4">
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-facebook-f"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-twitter"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-instagram"></i></a>
                            <a className="btn btn-square mx-1" href=""><i className="fab fa-linkedin-in"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    

    
   <Footer></Footer>


    
    <a href="#" className="btn btn-lg btn-secondary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></a>
</div>
  )
}

export default Home