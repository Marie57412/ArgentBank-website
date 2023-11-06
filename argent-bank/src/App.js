import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Accueil from './Components/accueil/Accueil';
import './App.css';
import Loginpage from './Components/login/Login';
import Userpage from './Components/Users/User'


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Accueil />} />
        <Route path="/login" element={<Loginpage/>}/>
        <Route path='/profile' element={<Userpage/>}/>
      </Routes>
     <Footer />
    </div>
  );
}

export default App;
