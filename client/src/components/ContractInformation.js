import React, {useState, useEffect} from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const ContractInformation = () => {

  const [contract, setContract] = useState(null);
  
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


  function formatDate(paymentDate) {
    const formattedDate = new Date(paymentDate).toLocaleDateString('en-GB', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    });
    return formattedDate;
  }

  const handleRenew = () => {

  }

  const handleCancel = async (contractId) => {
    try {
      const response = await fetch(`https://localhost:7184/api/Contract/${contractId}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (response.ok) {
        toast.success('Contract canceled successfully');
        window.location.reload();
      } else {
        toast.error('Failed to cancel contract');
      }
    } catch (error) {
      toast.error('Error canceling contract:', error);
    }
  };
  
 

  return (
    <>
    <ToastContainer></ToastContainer>
      {contract?.map((item, index) => (
        <div className="card my-3" >
          <h5 className="card-header">Contract Number: {item.contractNumber}</h5>
          <div className="card-body">
            <h5 className="card-title">Active: <span className={`${item.active ? "text-success" : "text-danger" } `}> {item.active ? "True" : "False"}</span></h5>
            <div className="card-text">Start Date: {formatDate(item.startDate)}</div>
            <div className="card-text">Start Date: {formatDate(item.endDate)}</div>
            <button onClick={() => handleRenew()}  className="btn btn-primary mt-2">Renew Contract</button>
            <button onClick={() => handleCancel(item.contractId)} className="btn btn-primary mx-3 mt-2">Cancel Contract</button>
          </div>
        </div >
      ))}
    </>
  )
}

export default ContractInformation