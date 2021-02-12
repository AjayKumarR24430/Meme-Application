import React, { useState } from 'react';
import './App.css';
import MemeForm from './components/memeForm';
import Routes from './components/Routes'
import { BrowserRouter } from 'react-router-dom';

function App() {
    return (
      <>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </>
    );
}

export default App;
