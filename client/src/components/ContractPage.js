import React, { useState, useEffect } from 'react';

function ContractPage() {
  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    // Gọi API để lấy danh sách hợp đồng
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setContracts(data))
      .catch(error => console.log(error));
  }, []);

  return (
    <div>
      <h2>Contract Page</h2>
      <ul>
        {contracts.map((contract) => (
          <li key={contract.id}>{contract.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ContractPage;
