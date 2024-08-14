// src/App.js
import React, { useState, useEffect } from 'react';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import axios from 'axios';
import Navbar from './components/Navbar';
import WritingPage from './pages/WritingPage';
import UploadPage from './pages/UploadPage';
import InviteFriendsPage from './pages/InviteFriendsPage';
import AccountSettingsPage from './pages/AccountSettingsPage';
import Login from './components/Login';
import { createCustomTheme } from './theme'; // Correct import
import HomePage from './pages/HomePage';
import PremiumPage from './pages/PremiumPage';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const checkRememberedUser = async () => {
      const response = await axios.get('http://localhost:5000/check-login', { withCredentials: true });
      if (response.data.isAuthenticated) {
        setIsAuthenticated(true);
      }
    };

    checkRememberedUser();
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <ThemeProvider theme={createCustomTheme(darkMode ? 'dark' : 'light')}>
      <CssBaseline />
      <Router>
        <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
        <Routes>
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          {isAuthenticated ? (
            <>
              <Route path="/" element={<Navigate to="/home" />} />
              <Route path="/home" element={<HomePage />} />
              <Route path="/writing" element={<WritingPage />} />
              <Route path="/upload" element={<UploadPage />} />
              <Route path="/invite-friends" element={<InviteFriendsPage />} />
              <Route path="/account-settings" element={<AccountSettingsPage />} />
              <Route path="/upgrade" element={<PremiumPage />} />
            </>
          ) : (
            <Route path="/" element={<Navigate to="/login" />} />
          )}
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;