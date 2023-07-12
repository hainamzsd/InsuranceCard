import React, { useState, useEffect } from 'react';

function CustomerPage() {
  const [customers, setCustomers] = useState([]);

  useEffect(() => {
    // Gọi API để lấy danh sách khách hàng
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setCustomers(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Customer Page</h2>
      <ul>
        {customers.map((customer) => (
          <li key={customer.id}>{customer.name}<br />{customer.email}<br /> {customer.address.city}</li>

        ))}
      </ul>
    </div>
  );
}

export default CustomerPage;
