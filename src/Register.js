import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [dob, setDob] = useState('');

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/register', {
        username,
        password,
        dob,
      });
      alert('Đăng ký thành công!');
      console.log(response.data);
    } catch (error) {
      alert('Đăng ký thất bại! Vui lòng kiểm tra lại thông tin.');
      console.error(error);
    }
  };

  return (
    <div className="register-container">
      <Header />
      <h1>Tạo tài khoản mới</h1>
      <form onSubmit={handleRegister} className="register-form">
        <input
          type="text"
          placeholder="Tên người dùng"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Mật khẩu"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <input
          type="date"
          placeholder="Ngày sinh"
          value={dob}
          onChange={(e) => setDob(e.target.value)}
          required
        />
        <button type="submit">Đăng ký</button>
      </form>
      <Footer />
    </div>
  );
}

export default Register;
