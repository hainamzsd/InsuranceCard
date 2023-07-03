import React, { useState, useEffect } from 'react';
import '../css/central.css';
import '../lib/animate/animate.min.css';
import '../lib/owlcarousel/assets/owl.carousel.min.css';
import '../lib/lightbox/css/lightbox.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';
import PaymentHistory from '../components/PaymentHistory';
import AccidentHistory from '../components/AccidentHistory';
import PunishmentHistory from '../components/PunishmentHistory';
import CompensationHistory from '../components/CompensationHistory';
import ContractInformation from '../components/ContractInformation';
import Footer from '../components/Footer';
const CustomerHistory = () => {


    const [activeTab, setActiveTab] = useState('payment');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };


    return (
        <div class="container-xxl bg-white p-0">
                <Navbar ></Navbar>

            <div classname="container-xxl position-relative p-0">

                <div class="container-xxl py-5 bg-primary hero-header">
                    <div class="container my-5 py-5 px-lg-5">
                        <div class="row g-5 py-5">
                            <div class="col-12 text-center">
                                <h1 class="text-white animated slideInDown">Customer History</h1>
                                <hr class="bg-white mx-auto mt-0" style={{ width: "90px" }} />
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb justify-content-center">
                                        <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                                        <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                                        <li class="breadcrumb-item text-white active" aria-current="page">Customer History</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div >
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'payment' ? 'active' : ''}`}
                            onClick={() => handleTabClick('payment')}
                        >
                            Payment History
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'accident' ? 'active' : ''}`}
                            onClick={() => handleTabClick('accident')}
                        >
                            Accident History
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'punishment' ? 'active' : ''}`}
                            onClick={() => handleTabClick('punishment')}
                        >
                            Punishment History
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'compensation' ? 'active' : ''}`}
                            onClick={() => handleTabClick('compensation')}
                        >
                            Compensation History
                        </button>
                    </li>
                    <li className="nav-item">
                        <button
                            className={`nav-link ${activeTab === 'contractInfo' ? 'active' : ''}`}
                            onClick={() => handleTabClick('contractInfo')}
                        >
                            Contract Information
                        </button>
                    </li>
                </ul>

                <div className="tab-content mt-3">
                    <div
                        className={`tab-pane fade ${activeTab === 'payment' ? 'show active' : ''}`}
                        id="payment"
                    >
                        <PaymentHistory />
                    </div>
                    <div
                        className={`tab-pane fade ${activeTab === 'accident' ? 'show active' : ''}`}
                        id="accident"
                    >
                        <AccidentHistory />
                    </div>
                    <div
                        className={`tab-pane fade ${activeTab === 'punishment' ? 'show active' : ''}`}
                        id="punishment"
                    >
                        <PunishmentHistory />
                    </div>
                    <div
                        className={`tab-pane fade ${activeTab === 'compensation' ? 'show active' : ''}`}
                        id="compensation"
                    >
                        <CompensationHistory />
                    </div>
                    <div
                        className={`tab-pane fade ${activeTab === 'contractInfo' ? 'show active' : ''}`}
                        id="contractInfo"
                    >
                        <ContractInformation />
                    </div>
                </div>
            </div>
            <Footer className="mt-5"></Footer>
        </div>
    )
}

export default CustomerHistory