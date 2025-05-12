import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Hospitallist = () => {
  const [symptom, setSymptom] = useState('');
  const [hospital, setHospital] = useState(null);
  const navigate = useNavigate();

  const symptomMap = {
    headache: {
      name: 'Neurology Department - City Hospital',
      location: 'MG Road, Bengaluru',
    },
    chestPain: {
      name: 'Cardiology Unit - Jayadev Hospital',
      location: 'Bannerghatta Road, Bengaluru',
    },
    fracture: {
      name: 'Orthopedics - Bone & Joint Clinic',
      location: 'Indiranagar, Bengaluru',
    },
    skinRash: {
      name: 'Dermatology - SkinCare Hospital',
      location: 'Koramangala, Bengaluru',
    },
    cough: {
      name: 'General Medicine - HealthFirst Hospital',
      location: 'Whitefield, Bengaluru',
    },
    pregnancy: {
      name: "Maternity Ward - Women's Health Hospital",
      location: 'Jayanagar, Bengaluru',
    },
    depression: {
      name: 'Psychiatry - Mind Wellness Center',
      location: 'HSR Layout, Bengaluru',
    },
    eyePain: {
      name: 'Ophthalmology - Vision Hospital',
      location: 'Malleshwaram, Bengaluru',
    },
    kidneyPain: {
      name: 'Nephrology - RenalCare Hospital',
      location: 'Yeshwanthpur, Bengaluru',
    },
  };

  const checkHospital = () => {
    setHospital(
      symptomMap[symptom] || {
        name: 'General Medicine - Community Health Center',
        location: 'Rajajinagar, Bengaluru',
      }
    );
  };

  const ui = {
    page: {
      minHeight: '100vh',
      background: 'linear-gradient(to right, #56ccf2, #2f80ed)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily: 'Segoe UI, sans-serif',
      padding: '100px 20px 20px',
    },
    panel: {
      backgroundColor: '#ffffff',
      padding: '40px',
      borderRadius: '16px',
      boxShadow: '0 12px 28px rgba(0, 0, 0, 0.2)',
      maxWidth: '460px',
      width: '100%',
    },
    title: {
      fontSize: '26px',
      marginBottom: '25px',
      textAlign: 'center',
      fontWeight: 'bold',
      color: '#2f80ed',
    },
    dropdown: {
      width: '100%',
      padding: '12px',
      fontSize: '16px',
      borderRadius: '8px',
      border: '1px solid #ccc',
      marginBottom: '20px',
      backgroundColor: '#f0f4ff',
      color: '#333',
    },
    button: {
      width: '100%',
      padding: '14px',
      backgroundColor: '#27ae60',
      color: '#fff',
      fontSize: '16px',
      fontWeight: 'bold',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      transition: 'background 0.3s ease',
    },
    buttonHover: {
      backgroundColor: '#219653',
    },
    output: {
      marginTop: '30px',
      backgroundColor: '#e3f9e5',
      padding: '20px',
      borderRadius: '12px',
      fontSize: '16px',
      color: '#1b5e20',
      border: '1px solid #c8e6c9',
    },
  };

  return (
    <>
      {/* UPDATED NAVBAR */}
      <div
        style={{
          width: '100%',
          backgroundColor: '#2e2e2e',
          padding: '12px 20px',
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 1000,
          boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
           
            <span
              style={{
                fontSize: '26px',
                fontWeight: 'bold',
                color: '#00cfff',
              }}
            >
             🏥 Vaidyakiya Sahayaka
            </span>
          </div>

          <div style={{ display: 'flex', gap: '12px' }}>
            {[
              { label: 'Register', path: '/register' },
              { label: 'Login', path: '/loginform' },
              { label: 'Hospitallist', path: '/hospitallist' },
            ].map((item) => (
              <button
                key={item.label}
                onClick={() => navigate(item.path)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '999px',
                  background: 'linear-gradient(to right, #00c6ff, #0072ff)',
                  border: 'none',
                  color: 'white',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div style={ui.page}>
        <div style={ui.panel}>
          <div style={ui.title}>🏥 Hospital Finder</div>
          <select
            value={symptom}
            onChange={(e) => setSymptom(e.target.value)}
            style={ui.dropdown}
          >
            <option value="">-- Select Symptom --</option>
            {Object.keys(symptomMap).map((key) => (
              <option key={key} value={key}>
                {key.replace(/([A-Z])/g, ' $1').replace(/^./, (c) => c.toUpperCase())}
              </option>
            ))}
          </select>
          <button
            style={ui.button}
            onClick={checkHospital}
            onMouseOver={(e) => (e.target.style.backgroundColor = ui.buttonHover.backgroundColor)}
            onMouseOut={(e) => (e.target.style.backgroundColor = ui.button.backgroundColor)}
          >
            🔍 Check Hospital
          </button>
          {hospital && (
            <div style={ui.output}>
              <div>
                <strong>Name:</strong> {hospital.name}
              </div>
              <div>
                <strong>Location:</strong> {hospital.location}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Hospitallist;
