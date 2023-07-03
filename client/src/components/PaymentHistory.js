import React, {useState} from 'react'
import '../css/central.css';
import '../lib/animate/animate.min.css';
import '../lib/owlcarousel/assets/owl.carousel.min.css';
import '../lib/lightbox/css/lightbox.min.css';
const PaymentHistory = (props) => {

  const [activeItem, setActiveItem] = useState(null);

  const handleItemClick = (index) => {
    setActiveItem(index);
  };

  const listItems = [
    {
      paymentDate: '1/1/2202',
      amount: '23$',
      description: 'Pay successful',
    },
    {
      paymentDate: '2/1/2202',
      amount: '35$',
      description: 'Pay successful',
    },
    {
      paymentDate: '3/1/2202',
      amount: '42$',
      description: 'Pay successful',
    },
  ];


  return (
    <div className=''>
    <div className="list-group ">
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
              Payment Date: {item.paymentDate}
            </h5>
            <h5 className={` ${activeItem === index ? 'text-light' : 'text-success'}`}>{item.amount}</h5>
          </div>
          <p className="mb-1">{item.description}</p>
        </a>
      ))}
    </div>
  </div>
  )
}

export default PaymentHistory