import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './features/landing/LandingPage';
import { SignIn, SignUp, ForgotPassword, ResetPassword } from './features/auth';
import { CellarDashboard } from './features/cellar';
import { Dashboard } from './features/dashboard';
import { SommelierPage } from './features/sommelier';
import { StoriesPage } from './features/stories';
import { EventsPage } from './features/events';
import { WineClubPage } from './features/wine-club';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cellar" element={<CellarDashboard />} />
        <Route path="/sommelier" element={<SommelierPage />} />
        <Route path="/stories" element={<StoriesPage />} />
        <Route path="/events" element={<EventsPage />} />
        <Route path="/wines" element={<WineClubPage />} />
      </Routes>
    </Router>
  );
}

export default App;
