import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import '../css/style.css';

function AccountEditPage({ accountId }) {
  const [account, setAccount] = useState({});
  const [editedAccount, setEditedAccount] = useState({});

  useEffect(() => {
    // Gọi API để lấy thông tin tài khoản
    fetch(`https://localhost:7184/Account/${accountId}`)
      .then(response => response.json())
      .then(data => {
        setAccount(data);
        setEditedAccount(data);
      })
      .catch(error => console.log(error));
  }, [accountId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedAccount(prevState => ({
      ...prevState,
      [name]: value,
      user: {
        ...prevState.user,
        [name]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Gọi API để chỉnh sửa tài khoản
    fetch(`https://localhost:7184/api/Account/${accountId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editedAccount),
    })
      .then(response => {
        if (response.ok) {
          // Cập nhật thông tin tài khoản thành công
          setAccount(editedAccount);
          toast.success('Chỉnh sửa tài khoản thành công');
        } else {
          // Chỉnh sửa tài khoản không thành công, hiển thị thông báo lỗi
          toast.error('Chỉnh sửa tài khoản không thành công');
        }
      })
      .catch(error => console.log(error));
  };

  return (
    <div className="container-xxl bg-white p-0">
      <Navbar />
      <div className="container-xxl position-relative p-0">
        <div className="container-xxl hero-header">
          <div className="container px-lg-5">
            <div className="row g-5 align-items-end">
              <h2 className="text-center">Chỉnh sửa tài khoản</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="username">Tên người dùng:</label>
                  <input
                    type="text"
                    id="username"
                    name="username"
                    value={editedAccount.username || ''}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="password">Mật khẩu:</label>
                  <input
                    type="password"
                    id="password"
                    name="password"
                    value={editedAccount.password || ''}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={editedAccount.user?.email || ''}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="contactNumber">Số điện thoại:</label>
                  <input
                    type="text"
                    id="contactNumber"
                    name="contactNumber"
                    value={editedAccount.user?.contactNumber || ''}
                    onChange={handleChange}
                  />
                </div>
                <div>
                  <label htmlFor="address">Địa chỉ:</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={editedAccount.user?.address || ''}
                    onChange={handleChange}
                  />
                </div>
                <button type="submit">Lưu</button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default AccountEditPage;
