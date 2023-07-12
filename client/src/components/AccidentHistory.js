import React, {useState, useEffect} from 'react';
import '../css/central.css';
import '../lib/animate/animate.min.css';
import '../lib/owlcarousel/assets/owl.carousel.min.css';
import '../lib/lightbox/css/lightbox.min.css';
const AccidentHistory = () => {
  const [contract, setContract] = useState(null);
  const [accident, setAccident] = useState(null);
  
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

  if(contract !==null){
fetch(`https://localhost:7184/api/Accident/GetAccidentListByAccountId/${sessionStorage.getItem("accountId")}`)
        .then(response => response.json())
        .then(data => {
          // Check if the response is successful
          if (data) {
            setAccident(data);
          } else {
            // Handle error cases
            console.error('Failed to fetch userinfo');
          }
        })
        .catch(error => {
          console.error('Error occurred while fetching userinfo:', error);
        });
  
  }



  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };


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
    <div className="list-group">
      {accident?.map((item, index) => (
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
              Accident Date: {formatDate(item.accidentDate)}
            </h5>
            <small>{item.location}</small>
          </div>
          <p className="mb-1 mt-3">{item.description}</p>
        </a>
      ))}
    </div>
  </div>)
}

export default AccidentHistory