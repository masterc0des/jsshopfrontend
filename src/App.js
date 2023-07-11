import './App.css';
import Navbar from './compontents/header/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Stoebern from './pages/Stoebern';
import Startseite from './pages/Startseite';
import Kontakt from './pages/Kontakt';
import Aboutus from './pages/Aboutus';
import Login from './pages/Login';
import Registrieren from './pages/Registrieren';
import TestPage from './pages/testPages/testPage';
import React from 'react';

function App() {
    return (
      <>
        <Router>
         <Navbar />
         <Routes>
           <Route path='/' element={<Startseite />} />
           <Route path='/stoebern' element={<Stoebern />} />
           <Route path='/kontakt' element={<Kontakt />} />
           <Route path='/ueberuns' element={<Aboutus />} />
           <Route path='/login' element={<Login />} />
           <Route path='/registrieren' element={<Registrieren />} />
           <Route path='/testPage' element={<TestPage />} />
         </Routes>
        </Router>
      </>
    )
}

export default App;
