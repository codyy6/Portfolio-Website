import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from "./pages/home.js";
import './App.css';

function App() {
    return (
          <Router>
              <Routes>
                  <Route path="/Portfolio-Website" element={<Home />} />
              </Routes>
          </Router>
    );
}

export default App;
