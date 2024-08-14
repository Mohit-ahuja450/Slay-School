// src/components/AccountMenu.js
import React, { useState } from 'react';
import { Button, Menu, MenuItem, Switch, Typography } from '@mui/material';

const AccountMenu = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <div>
      <Button color="inherit" onClick={handleClick}>
        Account & Settings
      </Button>
      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={toggleDarkMode}>
          <Typography variant="body1">Dark Mode</Typography>
          <Switch checked={darkMode} onChange={toggleDarkMode} />
        </MenuItem>
        <MenuItem onClick={handleClose}>Export Notes</MenuItem>
        <MenuItem onClick={handleClose}>Contact Support</MenuItem>
        <MenuItem onClick={handleClose}>Join Discord</MenuItem>
        <MenuItem onClick={handleClose}>Account Settings</MenuItem>
      </Menu>
    </div>
  );
};

export default AccountMenu;
