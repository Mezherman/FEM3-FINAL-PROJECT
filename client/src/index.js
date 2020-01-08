import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import { ThemeProvider } from '@material-ui/styles';
import { createMuiTheme } from '@material-ui/core';
import configureStore from './store/configureStore';
import Variables from './components/Variables/variables';

import './index.css';

import App from './App';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 320,
      sm: 480,
      md: 768,
      lg: 996,
      xl: 1280,
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
    background: {
    // paper: '#000',
      default: '#e2e2e2',
    },
  },
});

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>
  , document.getElementById('root')
);