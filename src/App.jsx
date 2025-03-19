import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import MainLayout from './layoutes/MainLayout';
import AppRoutes from './config/routes/AppRoutes';


function App() {


  return (
    <>
      <Router>
      <MainLayout>
        <AppRoutes />
      </MainLayout>
    </Router>
    </>
  )
}

export default App
