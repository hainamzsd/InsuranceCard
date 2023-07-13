import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Nav } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
function ContractPage() {

  const [contracts, setContracts] = useState([]);

  useEffect(() => {
    const fetchContracts = async () => {
      try {
        const response = await fetch('https://localhost:7184/api/Contract');
        const data = await response.json();
        setContracts(data);
      } catch (error) {
        console.error('Error fetching contracts:', error);
      }
    };

    fetchContracts();
  }, []);

  const handleActivateContract = async (contractId) => {
    try {
      const response = await fetch(`https://localhost:7184/api/Contract/ActivateContract/${contractId}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        toast.success("Contract activated successfully")
      } else {
        toast.error("Failed to activate contract")
      }
    } catch (error) {
      toast.error("Failed to activate contract")
    }
  };


  return (
    <>
    <Navbar></Navbar>
    
    <Container  className='mt-5'>
      <ToastContainer></ToastContainer>
    <h1 className='mt-5'>Contract List</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Contract ID</th>
          <th>Contract Number</th>
          <th>Contract active</th>
          <th>Action</th>
          {/* Add more table headers if needed */}
        </tr>
      </thead>
      <tbody>
        {contracts.map((contract) => (
          <tr key={contract.contractId}>
            <td>{contract.contractId}</td>
            <td>{contract.contractNumber}</td>
            <td className={`${contract.active ? "text-success" : "text-danger"}`}>{contract.active ? "True" : "False"}</td>
            {!contract.active &&
              <td>
                <Button onClick={() => handleActivateContract(contract.contractId)}>Active</Button>
              </td>
            }
            
            {/* Render other contract data as needed */}
          </tr>
        ))}
      </tbody>
    </Table>
  </Container>
  </>
  );
}

export default ContractPage;
