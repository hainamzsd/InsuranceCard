import React, { useState, useEffect } from 'react';
import '../css/central.css';
import '../lib/animate/animate.min.css';
import '../lib/owlcarousel/assets/owl.carousel.min.css';
import '../lib/lightbox/css/lightbox.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const PersonalInfo = () => {
    const [userData, setUserData] = useState(null);


    useEffect(() => {
        fetch(`https://localhost:7184/api/Userinfo/${sessionStorage.getItem("infoId")}`)
            .then(response => response.json())
            .then(data => {
                // Check if the response is successful
                if (data) {
                    setUserData(data);
                } else {
                    // Handle error cases
                    console.error('Failed to fetch userinfo');
                }
            })
            .catch(error => {
                console.error('Error occurred while fetching userinfo:', error);
            });
    }, []);


    return (
        <div class="container-xxl bg-white p-0">
            <Navbar></Navbar>
            <div classname="container-xxl position-relative p-0">

                <div class="container-xxl py-5 bg-primary hero-header">
                    <div class="container my-5 py-5 px-lg-5">
                        <div class="row g-5 py-5">
                            <div class="col-12 text-center">
                                <h1 class="text-white animated slideInDown">Personal Info</h1>
                                <hr class="bg-white mx-auto mt-0" style={{ width: "90px" }} />
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb justify-content-center">
                                        <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                                        <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                                        <li class="breadcrumb-item text-white active" aria-current="page">Personal Info</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {userData !== null &&
                <>
                    <section>
                        <div class="container py-5">

                            <div class="row">
                                <div class="col-lg-4">
                                    <div class="card mb-4">
                                        <div class="card-body text-center">
                                            <img src="https://i.kym-cdn.com/entries/icons/original/000/029/657/pikachu.jpg" alt="avatar"
                                                class="rounded-circle img-fluid" style={{ width: "150px", height: "150px", objectFit: "cover" }} />
                                            <h5 class="my-3">{userData.fullName}</h5>
                                            <p class="text-muted mb-4">{userData.address}</p>
                                            {/* <div class="d-flex justify-content-center mb-2">
                                          <button type="button" class="btn btn-primary">Follow</button>
                                          <button type="button" class="btn btn-outline-primary ms-1">Message</button>
                                      </div> */}
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-8">
                                    <div class="card mb-4">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <p class="mb-0">Full Name</p>
                                                </div>
                                                <div class="col-sm-9">
                                                    <p class="text-muted mb-0">{userData.fullName}</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <p class="mb-0">Email</p>
                                                </div>
                                                <div class="col-sm-9">
                                                    <p class="text-muted mb-0">{userData.email}</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <p class="mb-0">Phone</p>
                                                </div>
                                                <div class="col-sm-9">
                                                    <p class="text-muted mb-0">{userData.contactNumber}</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <p class="mb-0">Citizen Identification</p>
                                                </div>
                                                <div class="col-sm-9">
                                                    <p class="text-muted mb-0">{userData.citizenIdentification}</p>
                                                </div>
                                            </div>
                                            <hr />
                                            <div class="row">
                                                <div class="col-sm-3">
                                                    <p class="mb-0">Address</p>
                                                </div>
                                                <div class="col-sm-9">
                                                    <p class="text-muted mb-0">{userData.address}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>}

            <Footer></Footer>
        </div>
    )
}

export default PersonalInfo