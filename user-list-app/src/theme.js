import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#673AB7', // Purple
    },
    secondary: {
      main: '#964734', // Deep Orange
    },
    background: {
      default: '#AFDDE5', // Light Grey
    },
    text: {
      primary: '#000000', // Dark Grey
    },
  },
  typography: {
    h4: {
      fontWeight: 900,
      color: '#964734', // Purple
    },
    h5: {
      fontWeight: 500,
      color: '#964734', // Purple
    },
  },
});

export default theme;
