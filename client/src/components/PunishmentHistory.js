import React, {useState, useEffect} from 'react'
import '../css/central.css';
import '../lib/animate/animate.min.css';
import '../lib/owlcarousel/assets/owl.carousel.min.css';
import '../lib/lightbox/css/lightbox.min.css';
const PunishmentHistory = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };


  const [contract, setContract] = useState(null);
  const [punishment, setPunishment] = useState(null);
  
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
fetch(`https://localhost:7184/api/Punishment/GetPunishmentListByAccount/${sessionStorage.getItem("accountId")}`)
        .then(response => response.json())
        .then(data => {
          // Check if the response is successful
          if (data) {
            setPunishment(data);
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
    <div className="list-group">
      {punishment?.map((item, index) => (
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
              Punishment Date: {formatDate(item.punishmentDate)}
            </h5>
          </div>
          <p className="mb-1">{item.description}</p>
        </a>
      ))}
    </div>
  </div>
  )
}

export default PunishmentHistory