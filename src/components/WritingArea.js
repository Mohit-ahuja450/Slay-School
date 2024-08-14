import React, { useState } from 'react';
import { Container, Grid, Button, TextField, Paper, Typography } from '@mui/material';
import Footer from './Footer';

const WritingArea = () => {
  const [text, setText] = useState('');

  const handleParaphrase = () => {
    setText(`Paraphrased: ${text}`);
  };

  const handleSoundMoreAcademic = () => {
    setText(`Sounding academic: ${text}`);
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth="md" style={{ marginBottom: '5px', marginTop: '-75px', width: '100%' }}>
        <Paper elevation={3} style={{ padding: '40px', width: '100%' }}>
          <Typography variant="h4" gutterBottom style={{ textAlign: 'center', marginBottom: '30px' }}>
            Writing Assistant
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <TextField
                label="Write a paragraph"
                multiline
                rows={10}
                variant="outlined"
                fullWidth
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{ marginBottom: '30px' }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                color="primary"
                fullWidth
                onClick={handleParaphrase}
                style={{ padding: '15px 0' }}
              >
                Paraphrase
              </Button>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Button
                variant="contained"
                color="secondary"
                fullWidth
                onClick={handleSoundMoreAcademic}
                style={{ padding: '15px 0' }}
              >
                Sound More Academic
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
      <Footer />
    </div>
  );
};

export default WritingArea;
