import React, { useState } from 'react';
import './App.css';
import SignUp from './SignUp';
import Login from './Login';
import Home from './Home';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './UserContext';
import Chatbox from './Chatbox';
import HomePage from './HomePage';


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <UserProvider>
      <Router>
        {isLoggedIn && <Navbar isLoggedIn={isLoggedIn} />}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/login"
            element={<Login setIsLoggedIn={setIsLoggedIn} />}
          />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/homie" element={<HomePage />} />
          <Route path="/chat" element={<Chatbox />} />
        </Routes>
      </Router>
      </UserProvider>
  );
}


export default App;
