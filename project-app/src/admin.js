import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function AdminDashboard() {
  const navigate = useNavigate();
  const [patients, setPatients] = useState([]);
  const [editingPatient, setEditingPatient] = useState(null);
  const [newFeedback, setNewFeedback] = useState(''); // New state for feedback input

  useEffect(() => {
    const samplePatients = [
      {
        id: 101,
        name: 'varshagowda',
        phone: '9823045678',
        email: 'varsha.gowda@example.com',
        condition: 'COVID-19',
        age: 32,
        daysAdmitted: 10,
        status: 'Recovered',
        feedback: 'I feel much better now, I’m able to breathe more easily. Looking forward to going back to work.',
      },
      {
        id: 102,
        name: 'shreyas gowda',
        phone: '9900234567',
        email: 'shreyas.gowda@example.com',
        condition: 'Appendicitis',
        age: 26,
        daysAdmitted: 4,
        status: 'Under Observation',
        feedback: 'The pain has decreased, but I am still a bit uncomfortable. I hope to recover soon.',
      },
      {
        id: 103,
        name: 'nishka shredar',
        phone: '9811223344',
        email: 'nishka.shredar@example.com',
        condition: 'Asthma',
        age: 40,
        daysAdmitted: 2,
        status: 'Discharged',
        feedback: 'I feel much better and can breathe easily now. I’ll keep monitoring and follow the doctor’s advice.',
      },
    ];
    setPatients(samplePatients);
  }, []);

  const handleEditPatient = (id) => {
    const patientToEdit = patients.find((patient) => patient.id === id);
    setEditingPatient(patientToEdit);
  };

  const handleSavePatient = () => {
    setPatients((prev) =>
      prev.map((patient) =>
        patient.id === editingPatient.id ? editingPatient : patient
      )
    );
    setEditingPatient(null);
  };

  const handleApprovePatient = (id) => {
    alert('Approved');
    setPatients((prev) =>
      prev.map((patient) =>
        patient.id === id ? { ...patient, status: 'Approved' } : patient
      )
    );
  };

  // Handle feedback change
  const handleFeedbackChange = (e) => {
    setNewFeedback(e.target.value);
  };

  // Handle feedback submit
  const handleSubmitFeedback = (patientId) => {
    setPatients((prev) =>
      prev.map((patient) =>
        patient.id === patientId ? { ...patient, feedback: newFeedback } : patient
      )
    );
    setNewFeedback(''); // Clear the feedback field after submission
  };

  // Button Styles
  const buttonStyle = {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '10px',
    width: '100%',
  };

  const approveButtonStyle = {
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    borderRadius: '5px',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    marginTop: '10px',
    width: '100%',
  };

  const buttonHoverStyle = {
    backgroundColor: '#0056b3',
  };

  const approveButtonHoverStyle = {
    backgroundColor: '#218838',
  };

  const handleMouseEnter = (e, style) => {
    e.target.style.backgroundColor = style.backgroundColor;
  };

  const handleMouseLeave = (e, originalColor) => {
    e.target.style.backgroundColor = originalColor.backgroundColor;
  };

  return (
    <div style={{ padding: '30px', fontFamily: 'Segoe UI', backgroundColor: 'skyblue' }}>
      <header style={{ display: 'flex', alignItems: 'center', marginBottom: '30px' }}>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKf0lcEKwUX16ZIw9TRScG2LQ40AwSDzWOxw&s"
          alt="Logo"
          style={{ width: '50px', marginRight: '15px' }}
        />
        <h1 style={{ margin: 0, color: '#004aad' }}>Admin Dashboard</h1>
      </header>

      <section>
        <h2 style={{ color: '#333' }}>Patients Overview</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '10px' }}>
          {patients.map((patient) => (
            <div
              key={patient.id}
              style={{
                backgroundColor: '#fff',
                borderRadius: '10px',
                boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
                padding: '15px',
                width: '300px',
              }}
            >
              {editingPatient?.id === patient.id ? (
                <>
                  <input
                    type="text"
                    value={editingPatient.name}
                    onChange={(e) =>
                      setEditingPatient({ ...editingPatient, name: e.target.value })
                    }
                    placeholder="Name"
                    style={inputStyle}
                  />
                  <input
                    type="text"
                    value={editingPatient.phone}
                    onChange={(e) =>
                      setEditingPatient({ ...editingPatient, phone: e.target.value })
                    }
                    placeholder="Phone"
                    style={inputStyle}
                  />
                  <input
                    type="email"
                    value={editingPatient.email}
                    onChange={(e) =>
                      setEditingPatient({ ...editingPatient, email: e.target.value })
                    }
                    placeholder="Email"
                    style={inputStyle}
                  />
                  <button
                    onClick={handleSavePatient}
                    style={buttonStyle}
                    onMouseEnter={(e) => handleMouseEnter(e, buttonHoverStyle)}
                    onMouseLeave={(e) => handleMouseLeave(e, buttonStyle)}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <h3 style={{ marginBottom: '5px' }}>{patient.name}</h3>
                  <p style={{ margin: '4px 0' }}><strong>Phone:</strong> {patient.phone}</p>
                  <p style={{ margin: '4px 0' }}><strong>Email:</strong> {patient.email}</p>
                  <p style={{ margin: '4px 0' }}><strong>Condition:</strong> {patient.condition}</p>
                  <p style={{ margin: '4px 0' }}><strong>Age:</strong> {patient.age}</p>
                  <p style={{ margin: '4px 0' }}><strong>Days Admitted:</strong> {patient.daysAdmitted}</p>
                  <p
                    style={{
                      margin: '4px 0',
                      color: patient.status === 'Discharged' ? 'green' : '#ff9900',
                    }}
                  >
                    <strong>Status:</strong> {patient.status}
                  </p>
                  <button
                    onClick={() => handleEditPatient(patient.id)}
                    style={buttonStyle}
                    onMouseEnter={(e) => handleMouseEnter(e, buttonHoverStyle)}
                    onMouseLeave={(e) => handleMouseLeave(e, buttonStyle)}
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleApprovePatient(patient.id)}
                    style={approveButtonStyle}
                    onMouseEnter={(e) => handleMouseEnter(e, approveButtonHoverStyle)}
                    onMouseLeave={(e) => handleMouseLeave(e, approveButtonStyle)}
                  >
                    Approve
                  </button>
                </>
              )}
              {/* Feedback section
              <div style={{ marginTop: '20px' }}>
                <textarea
                  value={newFeedback}
                  onChange={handleFeedbackChange}
                  placeholder="Write about your recovery experience or comments"
                  style={{
                    width: '100%',
                    padding: '8px',
                    borderRadius: '5px',
                    border: '1px solid #ccc',
                    fontSize: '14px',
                    minHeight: '60px',
                  }}
                />
                <button
                  onClick={() => handleSubmitFeedback(patient.id)}
                  style={buttonStyle}
                  onMouseEnter={(e) => handleMouseEnter(e, buttonHoverStyle)}
                  onMouseLeave={(e) => handleMouseLeave(e, buttonStyle)}
                >
                  Submit Feedback
                </button>
              </div>
              */}
            </div>
          ))}
        </div>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2 style={{ color: '#333' }}>Patient Feedback</h2>
        <div style={{ marginTop: '10px' }}>
          {patients.map((patient) => (
            <div
              key={patient.id}
              style={{
                backgroundColor: '#ffffff',
                borderRadius: '6px',
                padding: '15px',
                marginBottom: '12px',
                boxShadow: '0 1px 4px rgba(0,0,0,0.1)',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div
                  style={{
                    backgroundColor: '#007bff',
                    color: 'white',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginRight: '10px',
                    fontWeight: 'bold',
                  }}
                >
                  {patient.name.charAt(0)}
                </div>
                <div>
                  <p style={{ margin: 0 }}><strong>{patient.name}</strong></p>
                  <small style={{ color: '#666' }}>Timestamp here</small>
                </div>
              </div>
              <p style={{ marginTop: '10px' }}>{patient.feedback}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

// Input Styles
const inputStyle = {
  padding: '8px',
  marginBottom: '10px',
  width: '100%',
  borderRadius: '5px',
  border: '1px solid #ccc',
  fontSize: '14px',
};
