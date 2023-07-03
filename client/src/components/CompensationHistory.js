import React, {useState} from 'react'
import '../css/central.css';
import '../lib/animate/animate.min.css';
import '../lib/owlcarousel/assets/owl.carousel.min.css';
import '../lib/lightbox/css/lightbox.min.css';
const CompensationHistory = () => {
  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const listItems = [
    {
      compensationDate: '1/1/2202',
      amount: '23$',
      description: 'Lorem Ipsum',
    },
  ];


  return (
    <div className=''>
    <div className="list-group">
      {listItems.map((item, index) => (
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
              Compensation Date: {item.compensationDate}
            </h5>
            <h5 className={` ${activeItem === index ? 'text-light' : 'text-success'}`}>{item.amount}</h5>
          </div>
          <p className="mb-1">{item.description}</p>
        </a>
      ))}
    </div>
    <a href="" className="btn btn-primary my-3 mx-3  ">Request Compensation</a>
  </div>
  )
}

export default CompensationHistory