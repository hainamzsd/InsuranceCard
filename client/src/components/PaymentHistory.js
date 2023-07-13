import React, { useState, useEffect } from 'react'
import '../css/central.css';
import '../lib/animate/animate.min.css';
import '../lib/owlcarousel/assets/owl.carousel.min.css';
import '../lib/lightbox/css/lightbox.min.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const PaymentHistory = (props) => {

  const [contract, setContract] = useState(null);
  const [payments, setPayments] = useState(null);
  
  useEffect(() => {
    fetch(`https://localhost:7184/api/Contract/GetByAccount/${sessionStorage.getItem("accountId")}`)
      .then(response => response.json())
      .then(data => {
        // Check if the response is successful
        if (data) {
          setContract(data);
          console.log(data);
        } else {
          // Handle error cases
          console.error('Failed to fetch userinfo');
        }
      })
      .catch(error => {
        console.error('Error occurred while fetching userinfo:', error);
      });
  }, [payments]);
  if(contract !==null){
      fetch(`https://localhost:7184/api/Payment/GetPaymentListByAccountId/${sessionStorage.getItem("accountId")}`)
        .then(response => response.json())
        .then(data => {
          // Check if the response is successful
          if (data) {
            setPayments(data);
          } else {
            // Handle error cases
            console.error('Failed to fetch userinfo');
          }
        })
        .catch(error => {
          console.error('Error occurred while fetching userinfo:', error);
        });
  
  }


  const pay = (paymentId) => {
    console.log(paymentId);
    fetch(`https://localhost:7184/api/Payment/UpdatePayment/${paymentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        // Optional: Include any other fields you want to update
        amount: 100,
      })
    })
      .then(response => {
        if (!response.ok) {
          toast.error("Error updating payment");
          throw new Error('Error updating payment');
        }
        else{
        toast.success("Payment updated successfully")

        }
        return response.json();
      })
      .catch(error => {
        console.error(error);
        // Handle error logic here
      });
  }
 
  function formatDate(paymentDate) {
    const formattedDate = new Date(paymentDate).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    return formattedDate;
  }

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  return (
    <div className=''>
    <ToastContainer></ToastContainer>
      <div className="list-group ">
        {payments?.map((item, index) => (
          <a
            key={index}
            href="#"
            className={`list-group-item list-group-item-action flex-column align-items-start ${activeItem === index ? 'active' : ''
              }`}
            onClick={() => handleItemClick(index)}
          >
            <div className="d-flex w-100 justify-content-between">
              <h5 className={`mb-1 ${activeItem === index ? 'text-light' : ''}`}>
                Payment Date: {formatDate(item?.paymentDate)}
              </h5>
              <h5 className={` ${activeItem === index ? 'text-light' : 'text-success'}`}>{item?.amount} $</h5>
             
              
            </div>
            {item?.amount !== 0 ?  
             <p className="mb-1">{item?.paymentMethod}</p>
            :
            <button className="btn btn-primary" onClick={() => pay(item.paymentId)}>Pay Now</button>
            }
          </a>
        ))}
      </div>
    </div>
  )
}

export default PaymentHistory