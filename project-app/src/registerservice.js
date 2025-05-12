// // src/components/RegistrationForm.js
// import React, { useState } from 'react';

// function RegistrationForm() {
//   const [formData, setFormData] = useState({
//     name: '', age: '', gender: '', aadhaar: '', bplNumber: '', income: '', bloodType: '',
//     illness: '', duration: '', diagnosisTest: '', diagnosisScan: '', diagnosisReport: '',
//     doctorName: '', prescription: '', bp: false, sugar: false, kidney: false, thyroid: false, allergies: false,
//     tel: '', altTel: '', email: '', address1: '', address2: '', address3: '',
//     assistantName: '', assistantRelation: '', assistantTel: '', assistantAddress1: '', assistantAddress2: '', assistantAddress3: ''
//   });

//   const handleChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData((prev) => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const requiredFields = [
//       'name', 'age', 'gender', 'aadhaar', 'bplNumber', 'income', 'bloodType',
//       'illness', 'duration', 'tel', 'address1',
//       'assistantName', 'assistantRelation', 'assistantTel', 'assistantAddress1'
//     ];

//     const missingFields = requiredFields.filter(field => !formData[field]?.toString().trim());

//     if (missingFields.length > 0) {
//       alert('Please fill in all required fields marked with *');
//       return;
//     }

//     try {
//       const response = await fetch('http://localhost:9090/registerMsqldb', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();

//       if (data.success) {
//         alert('Form submitted successfully!');
//         window.location.href = '/loginform';
//       } else {
//         alert('Submission failed: ' + data.message);
//       }
//     } catch (error) {
//       console.error('Submission error:', error);
//       alert('An error occurred during submission.');
//     }
//   };

//   // Styles (unchanged)
//   const container = { maxWidth: '800px', margin: '30px auto', padding: '20px', background: '#fff', borderRadius: '8px', boxShadow: '0 0 10px rgba(0,0,0,0.1)', fontFamily: 'Arial, sans-serif' };
//   const heading = { fontSize: '1.3rem', margin: '25px 0 10px', color: '#333', borderBottom: '1px solid #ccc', paddingBottom: '5px' };
//   const inputStyle = { width: '100%', padding: '8px', marginBottom: '12px', borderRadius: '4px', border: '1px solid #ccc' };
//   const labelStyle = { marginBottom: '5px', display: 'block', fontWeight: 'bold' };
//   const checkboxStyle = { marginRight: '10px' };

//   return (
//     <form style={container} onSubmit={handleSubmit}>
//       <h2 style={{ textAlign: 'center' }}>Patient Registration Form</h2>

//       {/* Sections go here (unchanged) */}

//       {/* Submit */}
//       <button type="submit" style={{ marginTop: '20px', padding: '12px 30px', fontSize: '1rem', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '6px', cursor: 'pointer' }}>
//         Submit
//       </button>
//     </form>
//   );
// }

// export default RegistrationForm;
