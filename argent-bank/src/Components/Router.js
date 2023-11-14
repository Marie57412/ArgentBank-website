import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Footer';
import Home from '../Components/pages/Accueil';
import User from './pages/User';
import SignInPage from '../Components/pages/SignIn';
import ErrorPage from '../Components/pages/ErrorPage';

export default function Routers() {
  const BrowserRoutes = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sign-in" element={<SignInPage />} />
          <Route path="/user/:userName" element={<User />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  };

  return <BrowserRoutes />;
}
