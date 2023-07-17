import React, {useState, useEffect} from 'react'
import '../css/central.css';
import '../lib/animate/animate.min.css';
import '../lib/owlcarousel/assets/owl.carousel.min.css';
import '../lib/lightbox/css/lightbox.min.css';
import { Button, Modal, Form } from 'react-bootstrap';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const CompensationHistory = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };


  
  const [contract, setContract] = useState(null);
  const [compensation, setCompensation] = useState(null);
  
  useEffect(() => {
    fetch(`https://localhost:7184/api/Contract/GetByAccount/${sessionStorage.getItem("accountId")}`)
      .then(response => response.json())
      .then(data => {
        // Check if the response is successful
        if (data) {
          setContract(data);
        } else {
          // Handle error cases
          console.error('Failed to fetch userinfo');
        }
      })
      .catch(error => {
        console.error('Error occurred while fetching userinfo:', error);
      });
  }, []);

  //compensation request
  const [showModal, setShowModal] = useState(false);
  const [compensationData, setCompensationData] = useState({
    contractId: '',
    compensationDate: '',
    amount: 0,
    description: '',
  });
  
  useEffect(() => {
    if (contract !== null) {
      setCompensationData((prevData) => ({
        ...prevData,
        contractId: contract.contractId,
      }));
    }
  }, [contract]);
  const handleClose = () => {
    setShowModal(false);
  };
  const handleInputChange = (e) => {
    let value = e.target.value;
    

    setCompensationData({
      ...compensationData,
      [e.target.name]: value,
    });
  };

  const handleSubmit = async () => {
    const currentDate = new Date();
    compensationData.compensationDate = currentDate.toISOString();
    try {
      // Make API request to create a new compensation
      const response = await fetch('https://localhost:7184/api/Compensation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(compensationData),
      });

      // Handle the response accordingly
      if (response.ok) {
        toast.success("Request success");
        handleClose();
      } else {
        toast.error("Request fail");
      }
    } catch (error) {
      toast.error(error);
    }
  };


  if(contract !==null){
fetch(`https://localhost:7184/api/Compensation/GetCompensationListByAccount/${sessionStorage.getItem("accountId")}`)
        .then(response => response.json())
        .then(data => {
          // Check if the response is successful
          if (data) {
            setCompensation(data);
          } else {
            // Handle error cases
            console.error('Failed to fetch userinfo');
          }
        })
        .catch(error => {
          console.error('Error occurred while fetching userinfo:', error);
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


  return (
    <div className=''>
      <ToastContainer></ToastContainer>
    <div className="list-group">
      {compensation?.map((item, index) => (
        <a
          key={index}
          href="#"
          className={`list-group-item list-group-item-action flex-column align-items-start ${
            activeItem === index ? 'active' : ''
          }`}
          onClick={() => handleItemClick(index)}
        >
          <div className="d-flex w-100 justify-content-between">
            <h5 className={`mb-1 ${activeItem === index ? 'text-light' : ''}`}>
              Compensation Date: {formatDate(item.compensationDate)}
            </h5>
            <h5 className={` ${activeItem === index ? 'text-light' : 'text-success'}`}>{item.amount} $</h5>
          </div>
          <p className="mb-1">{item.description}</p>
        </a>
      ))}
    </div>
    <button className="btn btn-primary my-3 mx-3" onClick={() => setShowModal(true)}>Request Compensation</button>
     <Modal show={showModal} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Request Compensation</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="compensationDate">
              <Form.Label>Compensation Date</Form.Label>
              <Form.Control
                type="date"
                name="CompensationDate"
                value={compensationData.CompensationDate}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="amount">
              <Form.Label>Amount</Form.Label>
              <Form.Control
                type="number"
                name="Amount"
                value={compensationData.Amount}
                onChange={handleInputChange}
              />
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                name="Description"
                value={compensationData.Description}
                onChange={handleInputChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleSubmit}>
            Request Compensation
          </Button>
        </Modal.Footer>
      </Modal>
  </div>
  )
}

export default CompensationHistory