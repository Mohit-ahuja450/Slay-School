// src/theme.js

import { createTheme } from '@mui/material/styles';

const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Light mode colors
          primary: {
            main: '#1976d2',
          },
          background: {
            default: '#ffffff',
            paper: '#f5f5f5',
          },
          text: {
            primary: '#000000',
          },
        }
      : {
          // Dark mode colors
          primary: {
            main: '#90caf9',
          },
          background: {
            default: '#121212',
            paper: '#424242',
          },
          text: {
            primary: '#ffffff',
          },
        }),
  },
});

export const createCustomTheme = (mode) => createTheme(getDesignTokens(mode));
