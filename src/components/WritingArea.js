// src/components/WritingArea.js
import React, { useState } from 'react';
import { Container, Grid, Button, TextField, Paper, Typography } from '@mui/material';
import axios from 'axios';
import Footer from '../components/Footer';

const WritingArea = () => {
  const [text, setText] = useState('');

  const handleParaphrase = async () => {
    try {
      const response = await axios.post('http://localhost:5000/paraphrase', { text });
      setText(response.data.paraphrasedText);
    } catch (error) {
      console.error('Error paraphrasing text:', error);
    }
  };

  const handleSoundAcademic = async () => {
    try {
      const response = await axios.post('http://localhost:5000/sound-academic', { text });
      setText(response.data.academicText);
    } catch (error) {
      console.error('Error sounding academic:', error);
    }
  };

  return (
    <Container maxWidth="lg" style={{ marginTop: '20px' }}>
      <Paper elevation={3} style={{ padding: '20px' }}>
        <Typography variant="h5" gutterBottom>
          Writing Assistant
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              label="Write a paragraph"
              multiline
              rows={8}
              variant="outlined"
              fullWidth
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" color="primary" fullWidth onClick={handleParaphrase}>
              Paraphrase
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button variant="contained" color="secondary" fullWidth onClick={handleSoundAcademic}>
              Sound More Academic
            </Button>
          </Grid>
        </Grid>
      </Paper>
      {/* Footer */}
      <Footer />
    </Container>
  );
};

export default WritingArea;
