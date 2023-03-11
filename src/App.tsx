import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import MainLayout from './components/layouts/MainLayout';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

function App() {
  const [loggedIn, setLoggedIn] = React.useState(false);

  return (
    <React.Fragment>
      <BrowserRouter>
        <CssBaseline />
        <MainLayout loggedIn={loggedIn}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </MainLayout>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
