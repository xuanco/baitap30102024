import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import Footer from './components/Footer';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/login', {
        username,
        password,
      });
      alert('Đăng nhập thành công!');
      console.log(response.data); // Xử lý dữ liệu sau khi đăng nhập thành công
    } catch (error) {
      alert('Đăng nhập thất bại! Vui lòng kiểm tra lại thông tin.');
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <Header />
      <form onSubmit={handleLogin} className="login-form">
        <input
          type="text"
          placeholder="Email hoặc số điện thoại"
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
        <button type="submit">Đăng nhập</button>
      </form>
      <button onClick={() => window.location.href = '/register'}>Tạo tài khoản mới</button>
      <Footer />
    </div>
  );
}

export default Login;
