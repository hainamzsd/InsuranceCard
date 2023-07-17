import React, { useState, useEffect } from 'react';
import { Container, Table, Button, Nav } from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './Navbar';
const CompensationAdmin = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:7184/api/CompensationRequest');
        if (response.ok) {
          const responseData = await response.json();
          setData(responseData);
        } else {
          // Handle error cases
          console.log('Error:', response.status);
        }
      } catch (error) {
        // Handle network or fetch errors
        console.error('Error:', error);
      }
    };

    fetchData();
  }, []);

  
  const handleResolve = async (requestId) => {
    try {
      const response = await fetch(`https://localhost:7184/Resolve/${requestId}`, {
        method: 'PUT',
      });
      if (response.ok) {
        toast.success(`Request with ID ${requestId} resolved successfully.`)
      } else {
        // Handle error cases
        toast.error('Error:', response.status)
      }
    } catch (error) {
      // Handle network or fetch errors
      console.error('Error:', error);
    }
  };


  return (
    <>
    <Navbar></Navbar>
    
    <Container  className='mt-5'>
      <ToastContainer></ToastContainer>
    <h1 className='mt-5'>Request List</h1>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Request ID</th>
          <th>Contract ID</th>
          <th>Request Date</th>
          <th>Description</th>
          <th>Resolved</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => 
          (
          <tr key={item.requestId}>
            <td>{item.requestId}</td>
            <td>{item.contractId}</td>
            <td>{item.requestDate}</td>
            <td>{item.description}</td>
            <td>
            {item.resolved ? 
                <span className='text-success'>resolved</span>
              : 
                // Render the resolve button if resolved is false
                <Button variant="primary" onClick={() => handleResolve(item.requestId)}>
                  Resolve
                </Button>
              }

            </td>
          </tr>
        )
        )}
      </tbody>
    </Table>
  </Container>
  </>
  )
}

export default CompensationAdmin