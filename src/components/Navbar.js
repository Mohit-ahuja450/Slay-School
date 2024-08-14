// src/components/Navbar.js

import React from 'react';
import { AppBar, Toolbar, Typography, Button, Switch, FormControlLabel } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleDarkMode, darkMode }) => {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: darkMode ? '#333' : 'white',
        color: darkMode ? 'white' : 'black',
        boxShadow: 'none',
        borderBottom: darkMode ? '1px solid #555' : '1px solid #ddd',
      }}
    >
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Typography
          variant="h6"
          style={{
            fontWeight: 'bold',
            fontFamily: 'Roboto, sans-serif',
          }}
        >
          SlaySchool
        </Typography>
        <div>
          <Button color="inherit" style={{ color: darkMode ? 'white' : 'black' }} component={Link} to="/home">
            Home
          </Button>
          <Button color="inherit" style={{ color: darkMode ? 'white' : 'black' }} component={Link} to="/writing">
            Writing
          </Button>
          <Button color="inherit" style={{ color: darkMode ? 'white' : 'black' }} component={Link} to="/upload">
            Upload
          </Button>
          <Button color="inherit" style={{ color: darkMode ? 'white' : 'black' }} component={Link} to="/invite-friends">
            Invite Friends
          </Button>
          <Button color="inherit" style={{ color: darkMode ? 'white' : 'black' }} component={Link} to="/account-settings">
            Account & Settings
          </Button>
          <Button color="inherit" style={{ color: darkMode ? 'white' : 'black' }} component={Link} to="/upgrade">
            Upgrade to Premium
          </Button>
          <FormControlLabel
            control={<Switch checked={darkMode} onChange={toggleDarkMode} />}
            label="Dark Mode"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
