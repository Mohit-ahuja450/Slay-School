import React, { useState } from 'react';
import { Container, Paper, Typography, Button, Grid } from '@mui/material';
import Footer from './Footer';

const AccountMenu = () => {
  const [darkMode] = useState(false);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <Container maxWidth="sm" style={{ marginBottom: '5px', marginTop: '-255px' }}>
        <Paper elevation={3} style={{ padding: '30px', textAlign: 'center' }}>
          <Typography variant="h5" gutterBottom>
            Account & Settings
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth>
                Export Notes
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth>
                Contact Support
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth>
                Join Discord
              </Button>
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary" fullWidth>
                Account Settings
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <Footer />
    </div>
  );
};

export default AccountMenu;
