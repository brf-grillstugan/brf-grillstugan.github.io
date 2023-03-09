import React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import MainLayout from './components/layouts/MainLayout';
import { BrowserRouter } from 'react-router-dom';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <React.Fragment>
      <BrowserRouter>
        <CssBaseline />
        <MainLayout loggedIn={loggedIn}>
          <Button variant="contained" onClick={() => setLoggedIn(!loggedIn)}>Hello World</Button>
        </MainLayout>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
