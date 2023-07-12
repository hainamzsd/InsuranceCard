import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { toast } from 'react-toastify';
import AccountEditPage from './AccountEditPage';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function EmployeePage() {
  const [accounts, setAccounts] = useState([]);

  useEffect(() => {
    // Gọi API để lấy danh sách tài khoản
    fetch('https://localhost:7184/api/Account')
      .then(response => response.json())
      .then(data => setAccounts(data))
      .catch(error => console.log(error));
  }, []);

  const deleteAccount = (accountId) => {
    fetch(`https://localhost:7184/api/Account/${accountId}`, {
      method: 'DELETE'
    })
      .then(response => {
        if (response.ok) {
          // Xóa tài khoản thành công, cập nhật danh sách tài khoản
          setAccounts(prevAccounts => prevAccounts.filter(account => account.accountId !== accountId));
          toast.success('Xóa tài khoản thành công');
        } else {
          // Xóa tài khoản không thành công, hiển thị thông báo lỗi
          toast.error('Xóa tài khoản không thành công');
        }
      })
      .catch(error => console.log(error));
  };




  return (
    <div className="container-xxl bg-white p-0">
      <Navbar />

      <div className="container-xxl position-relative p-0">
        <div className="container-xxl bg-primary hero-header">
          <div className="container px-lg-5">
            <div className="row g-5 align-items-end">
              <ul className="list-group">
                {accounts.map((account) => (
                  <li className="text-danger list-group-item" key={account.accountId}>
                    Username: {account.username}                    
                    <Link to="/AccountEditPage" className="btn btn-primary">Chỉnh sửa</Link>
                    <button className='btn btn-primary' onClick={() => deleteAccount(account.accountId)}>Xóa</button>               
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default EmployeePage;
