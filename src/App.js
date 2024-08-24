import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Hero from './Hero';
import Submenu from './Submenu';
import LoginPage from './LoginPage';
import Home from './Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      {isLoggedIn ? (
        <>
          <Navbar />
          <Sidebar />
          <Hero />
          <Submenu />
          <Routes>
            <Route path="/" element={<Home />} />
            {/* Diğer rotalar */}
          </Routes>
        </>
      ) : (
        <LoginPage onLogin={() => setIsLoggedIn(true)} />
      )}
    </Router>
  );
}

export default App;
