import React from 'react'

const ContractInformation = () => {

  const listItems = [
    {
      contractNumber: '412',
      startDate: '2/2/2002',
      endDate: '3/3/2023',
      active: "True"
    },{
      contractNumber: '412',
      startDate: '2/2/2002',
      endDate: '3/3/2023',
      active: "True"
    },
  ];

  return (
    <>
      {listItems?.map((item, index) => (
        <div className="card my-3" >
          <h5 className="card-header">Contract Number: {item.contractNumber}</h5>
          <div className="card-body">
            <h5 className="card-title">Active: <span className='text-success'>{item.active}</span></h5>
            <div className="card-text">Start Date: {item.startDate}</div>
            <div className="card-text">Start Date: {item.endDate}</div>
            <a href="#" className="btn btn-primary mt-2">Renew Contract</a>
            <a href="#" className="btn btn-primary mx-3 mt-2">Cancel Contract</a>
          </div>
        </div >
      ))}
    </>
  )
}

export default ContractInformation