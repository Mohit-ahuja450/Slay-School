import React, { useEffect, useState } from 'react';
import { Container, Paper, Typography, Button, TextField } from '@mui/material';
import Footer from './Footer';  // Import the Footer component

const InviteFriends = () => {
  const [referralCode, setReferralCode] = useState('');

  useEffect(() => {
    // Get referral code from cookies
    const getReferralCode = () => {
      const matches = document.cookie.match(new RegExp('(?:^|; )' + encodeURIComponent('referralCode') + '=([^;]*)'));
      setReferralCode(matches ? decodeURIComponent(matches[1]) : '');
    };

    getReferralCode();
  }, []);

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth="sm" style={{ marginBottom: '5px', marginTop: '-255px' }}>
        <Paper elevation={3} style={{ padding: '20px' }}>
          <Typography variant="h6" gutterBottom>
            Invite Friends
          </Typography>
          <Typography variant="body1">
            Invite a friend to continue uploading! Get a friend to sign up using your referral code to receive 2 free uploads!
          </Typography>
          <TextField
            value={referralCode}
            variant="outlined"
            margin="normal"
            fullWidth
            InputProps={{
              readOnly: true,
            }}
          />
          <Button variant="contained" color="primary" fullWidth>
            Share Invite Link
          </Button>
        </Paper>
      </Container>
      <Footer />
    </div>
  );
};

export default InviteFriends;
