// src/pages/HomePage.js

import React from 'react';
import { Container, Typography, Button, Grid, Paper } from '@mui/material';
import Footer from '../components/Footer';
import flashcardsImg from '../assets/images/flashcards.png';  // Import the image
import quizzesImg from '../assets/images/quizzes.png';  // Import the image

const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <Container maxWidth="lg" style={{ padding: '80px 0', textAlign: 'center' }}>
        <Typography variant="h2" style={{ fontWeight: 'bold', marginBottom: '20px' }}>
          Instant flashcards, quizzes, & study material
        </Typography>
        <Typography variant="h6" style={{ marginBottom: '40px' }}>
          Save hours making flashcards and quizzes from any file, video, link, or handwritten note.
          Works in any language, on any device.
        </Typography>
        <Button variant="contained" color="primary" size="large">
          Try it Free
        </Button>
      </Container>

      {/* Feature Section */}
      <Container maxWidth="lg" style={{ padding: '60px 0' }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Paper style={{ padding: '20px', textAlign: 'center', height: '100%' }}>
              <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                Generate Flashcards & Multiple Choice from Lectures & Videos
              </Typography>
              <img
                src={flashcardsImg}  // Use the imported image here
                alt="Generate Flashcards"
                style={{ width: '100%', marginTop: '20px' }}
              />
            </Paper>
          </Grid>
          <Grid item xs={12} md={6}>
            <Paper style={{ padding: '20px', textAlign: 'center', height: '100%' }}>
              <Typography variant="h5" style={{ fontWeight: 'bold' }}>
                Make Quizzes, Chat with AI, Browse Summaries, Get Instant Feedback
              </Typography>
              <img
                src={quizzesImg}  // Use the imported image here
                alt="Make Quizzes"
                style={{ width: '100%', marginTop: '20px' }}
              />
            </Paper>
          </Grid>
        </Grid>

        <Footer />
      </Container>
    </div>
  );
};

export default HomePage;
