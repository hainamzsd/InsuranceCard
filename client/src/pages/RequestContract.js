import React, { useState, useEffect } from 'react';
import '../css/central.css';
import '../lib/animate/animate.min.css';
import '../lib/owlcarousel/assets/owl.carousel.min.css';
import '../lib/lightbox/css/lightbox.min.css';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Button, Toast } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const RequestContract = () => {

    const handleRequestContract = async () => {
        try {
            const currentDate = new Date();
            const endDate = new Date(currentDate.getFullYear() + 2, currentDate.getMonth(), currentDate.getDate());
            const id = sessionStorage.getItem("accountId");
            const contractNumber = Math.floor(Math.random() * 9000000000) + 1000000000;

            const contractData = {
                accountId: `${id}`,
                contractNumber: contractNumber.toString(),
                startDate: currentDate.toISOString(),
                endDate: endDate.toISOString(),
                active: false,
                accidents: [],
                compensationRequests: [],
                compensations: [],
                payments: [
                    {
                        "amount": 0,
                        "paymentMethod": "string"
                      }
                ],
                punishments: []
            };

            const response = await fetch('https://localhost:7184/api/Contract', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(contractData)
            });

            if (response.ok) {
                const data = await response.json();
                toast.success("Created Contract");
            } else {
                toast.error("Created Fail");
            }
        } catch (error) {
            toast.error("Created Fail");
        }
    };

    return (
        <div class="container-xxl bg-white p-0">
            <ToastContainer></ToastContainer>
            <Navbar></Navbar>
            <div classname="container-xxl position-relative p-0">

                <div class="container-xxl py-5 bg-primary hero-header">
                    <div class="container my-5 py-5 px-lg-5">
                        <div class="row g-5 py-5">
                            <div class="col-12 text-center">
                                <h1 class="text-white animated slideInDown">Request Contract</h1>
                                <hr class="bg-white mx-auto mt-0" style={{ width: "90px" }} />
                                <nav aria-label="breadcrumb">
                                    <ol class="breadcrumb justify-content-center">
                                        <li class="breadcrumb-item"><a class="text-white" href="#">Home</a></li>
                                        <li class="breadcrumb-item"><a class="text-white" href="#">Pages</a></li>
                                        <li class="breadcrumb-item text-white active" aria-current="page">Request Contract</li>
                                    </ol>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section>

                <div class="container py-5 px-5">
                    <h2 className='mb-4'>Motorbike Insurance Company Contract</h2>

                    <div className="post">
                        <p>
                            This project introduces a comprehensive solution for motorbike insurance companies, addressing common issues
                            found in current insurance systems. The existing systems often suffer from delays in contract renewals for
                            customers and inconvenience in the validation process of insurance cards. This new system aims to overcome
                            these challenges and provide enhanced services to both the insurance company and its customers.
                        </p>
                        <p>
                            By adopting this motorbike insurance company contract, users will benefit from a range of improved services.
                            Firstly, the contract ensures a streamlined and efficient contract renewal process, reducing delays and ensuring
                            that customers' insurance coverage remains up to date. Additionally, it simplifies the validation process of
                            insurance cards, making it more convenient and accessible for both customers and insurance company personnel.
                        </p>
                        <p>
                            Users of this system will have access to a user-friendly interface that allows for easy management of insurance
                            policies. They can quickly check the status of their contracts, review policy details, and conveniently renew
                            their motorbike insurance policies online. The system also provides automated notifications for upcoming
                            renewals, ensuring that customers never miss an important deadline.
                        </p>
                        <p>
                            As for the financial aspect, users will be required to pay the applicable premium for their motorbike insurance
                            coverage. The specific premium amount will depend on factors such as the motorbike's value, the coverage level
                            selected, and the user's risk profile. The system offers flexible payment options, allowing users to choose
                            monthly, quarterly, or annual payment plans according to their preference and financial capabilities.
                        </p>
                        <p>
                            By requesting this motorbike insurance company contract, users can take advantage of the improved services,
                            streamlined processes, and convenient management features it offers. Click the button below to initiate the
                            contract request process and start enjoying the benefits of this advanced motorbike insurance solution.
                        </p>
                        <p>
                            In this contract, users will have the following benefits:
                            <ul>
                                <li>Access to premium features and services</li>
                                <li>24/7 customer support</li>
                                <li>Discounts on selected products</li>
                            </ul>
                        </p>
                        <p>
                            The monthly subscription fee for this contract is $19.99. Users will be billed automatically each month.
                            Additional terms and conditions apply.
                        </p>
                        <Button variant="primary" onClick={handleRequestContract}>
                            Request Contract
                        </Button>
                    </div>
                </div>
            </section>
            <Footer></Footer>
        </div>
    )
}

export default RequestContract