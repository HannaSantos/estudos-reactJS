import React from "react";
import { Button, createMuiTheme, ThemeProvider } from '@mui/material'

function App() {
  const theme = createMuiTheme({
    palette: {
      primary:{
        main: '#f44336'
      },
      secondary: {
        main: '#3f51b5'
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      
    </ThemeProvider>
  );
}

export default App;
