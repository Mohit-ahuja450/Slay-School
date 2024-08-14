import React, { useState } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, TextField, MenuItem, Typography, Container } from '@mui/material';
import axios from 'axios';
import Footer from './Footer';

const UploadNotes = () => {
  const [open, setOpen] = useState(false);
  const [uploadType, setUploadType] = useState('pdf');
  const [file, setFile] = useState(null);
  const [uploadMessage, setUploadMessage] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setUploadMessage('');
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post('http://localhost:5000/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setUploadMessage(response.data.message);
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadMessage('Error uploading file');
    }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <Container maxWidth="sm" style={{ marginBottom: '5px', marginTop: '-255px', marginRight: '27%' }}>
        <Button variant="contained" color="primary" onClick={handleClickOpen}>
          Upload Notes
        </Button>
        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Upload Notes</DialogTitle>
          <DialogContent>
            <TextField
              select
              label="Select upload type"
              value={uploadType}
              onChange={(e) => setUploadType(e.target.value)}
              fullWidth
            >
              <MenuItem value="pdf">Upload PDF</MenuItem>
              <MenuItem value="url">Import from URL</MenuItem>
              <MenuItem value="manual">Paste Notes</MenuItem>
            </TextField>
            {uploadType === 'pdf' && (
              <TextField
                margin="dense"
                label="Upload PDF"
                type="file"
                fullWidth
                onChange={(e) => setFile(e.target.files[0])}
              />
            )}
            {uploadType === 'url' && (
              <TextField
                margin="dense"
                label="Enter URL"
                type="url"
                fullWidth
              />
            )}
            {uploadType === 'manual' && (
              <TextField
                margin="dense"
                label="Paste your notes"
                multiline
                rows={4}
                fullWidth
              />
            )}
            {uploadMessage && <Typography color="primary">{uploadMessage}</Typography>}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleFileUpload} color="primary">
              Upload
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
      <Footer />
    </div>
  );
};

export default UploadNotes;
