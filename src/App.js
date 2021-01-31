import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from './components/temaConfig';
import { BrowserRouter as Router } from 'react-router-dom';
import Routes from './Router/Routes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <Routes />
      </Router>
    </ThemeProvider>
  );
}

export default App;
