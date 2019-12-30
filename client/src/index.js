import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import Variables from './components/Variables/variables';

import './index.css';

import App from './App';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: Variables.breakpoints.xs,
      sm: Variables.breakpoints.sm,
      md: Variables.breakpoints.md,
      lg: Variables.breakpoints.lg,
      xl: Variables.breakpoints.xl,
    },
  },
  palette: {
    primary: {
      // light: '#333',
      main: '#71b430',
      dark: '#588c25',
      contrastText: '#fff',
    },
    secondary: {
      // light: '#ff7961',
      main: '#333',
      dark: '#666',
      contrastText: '#fff',
    },
    error: {
      // light: '#333',
      main: '#F9B700',
      dark: '#e00000',
      contrastText: '#fff',
    },
    text: {
      primary: '#1a1a1a',
      secondary: '#e00000',

    },
  },
  background: {
    // paper: "#fff",
    default: '#f1f2f',
  },

});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
  , document.getElementById('root')
);