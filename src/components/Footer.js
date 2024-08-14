// src/components/Footer.js

import React from 'react';
import { Box, Typography } from '@mui/material';

const Footer = () => {
  return (
    <Box component="footer" sx={{ py: 2, textAlign: 'center', backgroundColor: 'background.paper' }}>
      <Typography variant="body2" color="textSecondary">
        © 2024 SlaySchool. All rights reserved.
      </Typography>
      <Typography variant="body2" color="textSecondary">
        <a href="#">Privacy Policy</a> | <a href="#">Terms of Service</a>
      </Typography>
    </Box>
  );
};

export default Footer;