import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './features/landing/LandingPage';
import { SignIn, SignUp, ForgotPassword, ResetPassword } from './features/auth';
import { CellarDashboard } from './features/cellar';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/cellar" element={<CellarDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
