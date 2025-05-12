import React from 'react';
import {Route, Routes } from 'react-router-dom';
import HospitalHomePage from './home'
import RegistrationForm from './register';
import LoginPage from './loginform';
import Hospitallist from './hospitals'
import AdminDashboard from './admin'

function App() {
  return (
      <Routes>
        <Route path="/" element={<HospitalHomePage/>} />
        <Route path="/register" element={<RegistrationForm/>}/>
        <Route path="/loginform" element={<LoginPage/>}/>
        <Route path="/hospitallist" element={<Hospitallist/>}/>
        <Route path="/admin" element={<AdminDashboard/>} />
        

       

      </Routes>
  );
}

export default App;