import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  breakpoints: {
    values: {
      // xs: 0,
      // sm: 320,
      // md: 768,
      // lg: 1200,
      // xl: 1920
      xs: 320,
      sm: 480,
      md: 768,
      lg: 1200,
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

export default theme;