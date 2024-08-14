// src/pages/PremiumPage.js
import React from 'react';
import { Container, Typography } from '@mui/material';
import Footer from '../components/Footer';

const PremiumPage = () => {
  return (
    
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth="sm" style={{ marginBottom: '5px', marginTop: '-255px', marginRight: '31%' }}>
        <Typography variant="h1" gutterBottom style={{ marginBottom: '-25px',  paddingLeft:'-10px' }}>
          Coming
        </Typography>
        <Typography variant="h1" gutterBottom style={{ marginBottom: '-1px', marginRight: '4px', paddingLeft:'50px' }}>
          Soon
        </Typography>
      </Container>
      <Footer />
    </div>
  );
};

export default PremiumPage;
