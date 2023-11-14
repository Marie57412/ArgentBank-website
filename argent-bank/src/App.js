import React from 'react';
import { Routes, Route, Navigate } from "react-router-dom";
import Header from './Components/Header';
import Footer from './Components/Footer';
import Accueil from './Components/accueil/Accueil';
import './App.css';
import Loginpage from './Components/login/Login';
import User from './Components/Users/User'
import { Provider } from 'react-redux';
import { store } from '../src/Redux/Store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Header />
      <Routes>
      <Route path="/" element={<Accueil />} />
        <Route path="/login" element={<Loginpage/>}/>
        <Route path='/profile' element={<User/>}/>
      </Routes>
     <Footer />
    </div>
    </Provider>
  );
}

export default App;
