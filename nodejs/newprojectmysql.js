const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bodyParser = require('body-parser');

const app = express();
const port = 9090;

app.use(cors());
app.use(bodyParser.json());

// ✅ MySQL connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root', // your actual MySQL password
  database: 'itbridge'
});

db.connect((err) => {
  if (err) {
    console.error('Database connection failed:', err.stack);
    return;
  }
  console.log('✅ Connected to MySQL database.');
});

app.get('/login/:tel/:password', (req, res) => {
  const { tel, password } = req.params;

  if (!tel || !password) {
    return res.status(400).json({ success: false, message: 'Phone and password required' });
  }

  const query = 'SELECT * FROM patientdata WHERE tel = ? AND password = ?';
  db.query(query, [tel, password], (err, results) => {
    if (err) {
      console.error('Login error:', err);
      return res.status(500).json({ success: false, message: 'Server error' });
    }

    if (results.length > 0) {
      res.status(200).json({ success: true, message: 'Login successful', user: results[0] });
    } else {
      res.status(401).json({ success: false, message: 'Invalid credentials' });
    }
  });
});

  

// ✅ POST route to insert data
app.post('/registerMsqldb', (req, res) => {
  const formData = req.body;

  const requiredFields = [
    'name', 'age', 'gender', 'aadhaar', 'bplNumber', 'income', 'bloodType',
    'illness', 'duration', 'tel', 'address1',
    'assistantName', 'assistantRelation', 'assistantTel', 'assistantAddress1','password'
  ];

  const missingFields = requiredFields.filter(field => !formData[field]?.toString().trim());
  if (missingFields.length > 0) {
    return res.status(400).json({ success: false, message: `Missing fields: ${missingFields.join(', ')}` });
  }

  const sql = `
    INSERT INTO patientdata (
      name, age, gender, aadhaar, bplNumber, income, bloodType,
      illness, duration, diagnosisTest, diagnosisScan, dia
      gnosisReport,
      doctorName, prescription, bp, sugar, kidney, thyroid, allergies,
      tel, altTel, email, address1, address2, address3,
      assistantName, assistantRelation, assistantTel, assistantAddress1, assistantAddress2, assistantAddress3,password
    )
    VALUES (?, ?, ?,?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
  `;

  const values = [
    formData.name, formData.age, formData.gender, formData.aadhaar, formData.bplNumber, formData.income, formData.bloodType,
    formData.illness, formData.duration, formData.diagnosisTest, formData.diagnosisScan, formData.diagnosisReport,
    formData.doctorName, formData.prescription,
    formData.bp ? 1 : 0, formData.sugar ? 1 : 0, formData.kidney ? 1 : 0, formData.thyroid ? 1 : 0, formData.allergies ? 1 : 0,
    formData.tel, formData.altTel, formData.email, formData.address1, formData.address2, formData.address3,
    formData.assistantName, formData.assistantRelation, formData.assistantTel, formData.assistantAddress1, formData.assistantAddress2, formData.assistantAddress3,
    formData.password
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Database insert error:', err);
      return res.status(500).json({ success: false, message: 'Database error.' });
    }
    res.json({ success: true, message: 'Patient registered successfully.' });
  });
});

app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
