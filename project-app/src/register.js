import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function RegistrationForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '', age: '', gender: '', aadhaar: '', bplNumber: '', income: '', bloodType: '',
    illness: '', duration: '', diagnosisTest: '', diagnosisScan: '', diagnosisReport: '',
    doctorName: '', prescription: '', bp: false, sugar: false, kidney: false, thyroid: false, allergies: false,
    tel: '', altTel: '', email: '', address1: '', address2: '', address3: '',
    assistantName: '', assistantRelation: '', assistantTel: '', assistantAddress1: '', assistantAddress2: '', assistantAddress3: '', password: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const requiredFields = [
      'name', 'age', 'gender', 'aadhaar', 'bplNumber', 'income', 'bloodType',
      'illness', 'duration', 'tel', 'address1',
      'assistantName', 'assistantRelation', 'assistantTel', 'assistantAddress1', 'password'
    ];
    const missingFields = requiredFields.filter(field => !formData[field]?.toString().trim());
    if (missingFields.length > 0) {
      alert('Please fill in all required fields marked with *');
      return;
    }

    try {
      const response = await fetch('http://localhost:9090/registerMsqldb', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();
      if (data.success) {
        alert('Form submitted successfully!');
        window.location.href = '/loginform';
      } else {
        alert('Submission failed: ' + data.message);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('An error occurred while submitting the form.');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '8px',
    border: '1px solid #ccc',
    fontSize: '15px',
    backgroundColor: '#f9f9ff'
  };

  const labelStyle = {
    marginBottom: '6px',
    display: 'block',
    fontWeight: 'bold',
    color: '#343a40'
  };

  const sectionTitle = (title) => (
    <h3 style={{
      background: 'linear-gradient(to right,rgb(199, 254, 79),rgb(92, 216, 107))',
      color: 'white',
      padding: '12px',
      borderRadius: '8px',
      marginTop: '40px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
    }}>{title}</h3>
  );

  const sectionBox = {
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: '25px',
    borderRadius: '12px',
    marginTop: '20px',
    boxShadow: '0 0 15px rgba(0,0,0,0.08)'
  };

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

  return (
    <div style={{
      background: 'linear-gradient(to right,rgb(214, 106, 197),rgb(118, 202, 241))',
      minHeight: '100vh',
      paddingBottom: '50px'
    }}>

      {/* Small NavBar */}
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

      {/* Registration Form */}
      <form onSubmit={handleSubmit} style={{
        maxWidth: '900px',
        margin: '40px auto',
        padding: '40px',
        fontFamily: 'Segoe UI',
        backgroundColor: '#ffffffcc',
        borderRadius: '18px',
        boxShadow: '0 20px 40px rgba(0,0,0,0.2)'
      }}>
        <h2 style={{ textAlign: 'center', color: '#007bff', marginBottom: '40px', fontSize: '28px' }}>📝 Patient Registration Form</h2>

        {/* Form Sections */}
        {sectionTitle('1. Basic Details')}
        <div style={sectionBox}>
          {['name', 'age', 'aadhaar', 'bplNumber', 'income', 'bloodType'].map(field => (
            <div key={field}>
              <label style={labelStyle}>{field} *</label>
              <input name={field} required style={inputStyle} onChange={handleChange} />
            </div>
          ))}
          <label style={labelStyle}>Gender *</label>
          <select name="gender" required style={inputStyle} onChange={handleChange}>
            <option value="">Select Gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        </div>

        {sectionTitle('2. Illness & Diagnosis')}
        <div style={sectionBox}>
          {['illness', 'duration', 'diagnosisTest', 'diagnosisScan', 'diagnosisReport', 'doctorName', 'prescription'].map(field => (
            <div key={field}>
              <label style={labelStyle}>{field} {['illness', 'duration'].includes(field) ? '*' : ''}</label>
              <input name={field} required={['illness', 'duration'].includes(field)} style={inputStyle} onChange={handleChange} />
            </div>
          ))}
        </div>

        {sectionTitle('3. Other Health Complaints')}
        <div style={{ ...sectionBox, display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {['bp', 'sugar', 'kidney', 'thyroid', 'allergies'].map(field => (
            <label key={field} style={{ fontWeight: '500', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <input type="checkbox" name={field} onChange={handleChange} /> {field.toUpperCase()}
            </label>
          ))}
        </div>

        {sectionTitle('4. Contact Details')}
        <div style={sectionBox}>
          {['tel', 'altTel', 'email', 'address1', 'address2', 'address3'].map(field => (
            <div key={field}>
              <label style={labelStyle}>{field} {['tel', 'address1'].includes(field) ? '*' : ''}</label>
              <input name={field} required={['tel', 'address1'].includes(field)} style={inputStyle} onChange={handleChange} />
            </div>
          ))}
        </div>

        {sectionTitle('5. Patient Assistance')}
        <div style={sectionBox}>
          {['assistantName', 'assistantRelation', 'assistantTel', 'assistantAddress1', 'assistantAddress2', 'assistantAddress3'].map(field => (
            <div key={field}>
              <label style={labelStyle}>{field} {['assistantName', 'assistantRelation', 'assistantTel', 'assistantAddress1'].includes(field) ? '*' : ''}</label>
              <input name={field} required={['assistantName', 'assistantRelation', 'assistantTel', 'assistantAddress1'].includes(field)} style={inputStyle} onChange={handleChange} />
            </div>
          ))}
        </div>

        {sectionTitle('6. Set Password')}
        <div style={sectionBox}>
          <label style={labelStyle}>Password *</label>
          <input type="password" name="password" required style={inputStyle} onChange={handleChange} />
        </div>

        <button type="submit" style={{
          padding: '14px 36px',
          marginTop: '30px',
          background: 'linear-gradient(to right,rgb(203, 79, 129),rgb(135, 183, 174))',
          color: '#fff',
          border: 'none',
          borderRadius: '10px',
          fontSize: '17px',
          cursor: 'pointer',
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          boxShadow: '0 4px 10px rgba(0,0,0,0.1)',
          transition: 'transform 0.2s ease'
        }}
          onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
          onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
        >
          ✅ Submit Form
        </button>
      </form>
    </div>
  );
}

export default RegistrationForm;
