import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignUp from './components/signup/SignUp';
import Login from './components/login/Login';
import Dashboard from './components/dashboard/Dashboard';
import CompanyInfo from './components/companyinfo/CompanyInfo';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/company-info" element={<CompanyInfo />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
