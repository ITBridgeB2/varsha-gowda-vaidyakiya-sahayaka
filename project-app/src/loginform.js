import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import userdetailsservice from './loginservice';

export default function LoginPage() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    mobileNumber: '',
    password: 'root',
    role: 'user',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      formData.role === 'admin' &&
      formData.mobileNumber === '9999999999' &&
      formData.password === 'admin123'
    ) {
      alert("Welcome Admin");
      navigate("/admin");
      return;
    }

    userdetailsservice.validateUser(formData.mobileNumber, formData.password)
      .then((response) => {
        if (response.status === 200) {
          alert("Welcome " + JSON.stringify(response.data));
          navigate("/hospitallist");
        } else {
          alert("Try again");
        }
      })
      .catch((error) => {
        alert("Login failed: " + error.message);
      });
  };

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(to right, #89f7fe, #66a6ff)' }}>
      {/* Navbar */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '10px 40px',
        backgroundColor: '#2c2c2c',
        color: '#00d9ff'
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <span role="img" aria-label="hospital" style={{ fontSize: '24px', marginRight: '10px' }}>🏥</span>
          <h1 style={{ fontSize: '24px', margin: 0 }}>Vaidyakiya Sahayaka</h1>
        </div>
        <div>
          <button onClick={() => navigate('/register')} style={navButtonStyle}>Register</button>
          <button onClick={() => navigate('/loginform')} style={navButtonStyle}>Login</button>
          <button onClick={() => navigate('/hospitallist')} style={navButtonStyle}>Hospitallist</button>
        </div>
      </div>

      {/* Login Form */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '40px 20px'
      }}>
        <form onSubmit={handleSubmit} style={{
          width: '100%',
          maxWidth: '400px',
          padding: '40px',
          background: '#ffffffdd',
          borderRadius: '16px',
          boxShadow: '0 8px 20px rgba(0,0,0,0.15)',
        }}>
          <h2 style={{ textAlign: 'center', marginBottom: '30px', color: '#007bff', fontSize: '26px' }}>
            🔐 Login
          </h2>

          <div style={{ marginBottom: '20px' }}>
            <label style={labelStyle}>📱 Mobile Number:</label>
            <input
              type="tel"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={labelStyle}>🔑 Password:</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              style={inputStyle}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={labelStyle}>🧑‍💼 Login as:</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              style={inputStyle}
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button type="submit" style={loginButtonStyle}
            onMouseOver={(e) => e.target.style.backgroundColor = '#0056b3'}
            onMouseOut={(e) => e.target.style.backgroundColor = '#007bff'}>
            🚀 Login
          </button>

          <div style={{ textAlign: 'center', marginTop: '18px' }}>
            <p style={{ fontSize: '14px', color: '#555' }}>
              New User? <a href="/signup" style={{ color: '#007bff', textDecoration: 'none', fontWeight: 'bold' }}>Sign Up</a>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
}

// Styles
const navButtonStyle = {
  marginLeft: '12px',
  padding: '8px 18px',
  borderRadius: '20px',
  border: 'none',
  background: 'linear-gradient(to right, #00c6ff, #0072ff)',
  color: 'white',
  fontWeight: 'bold',
  cursor: 'pointer',
  fontSize: '14px',
};

const labelStyle = {
  display: 'block',
  marginBottom: '6px',
  fontWeight: 'bold',
  fontSize: '14px',
  color: '#333'
};

const inputStyle = {
  width: '100%',
  padding: '12px',
  borderRadius: '8px',
  border: '1px solid #ccc',
  fontSize: '15px',
  outline: 'none',
  backgroundColor: '#f9f9f9'
};

const loginButtonStyle = {
  width: '100%',
  padding: '14px',
  backgroundColor: '#007bff',
  color: '#fff',
  border: 'none',
  borderRadius: '8px',
  fontSize: '16px',
  fontWeight: 'bold',
  cursor: 'pointer',
  transition: 'background-color 0.3s ease, transform 0.2s ease',
};
