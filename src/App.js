import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// import SearchCourse from './components/SearchCourse';

import './App.css';

import SearchCourse from './components/navbar/search/searchComponent';
import Navbar from './components/navbar/navbar/navbar';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Portal from './pages/portal/portal';

function App() {
  return (
    <Router>
      <div className="App">
      <div className="logo">
        <h1 style={{textAlign:"start",paddingLeft:"2rem"}}>How To Abroad</h1>
      </div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search-course" element={<SearchCourse />} />
          <Route path="/login" element={<Login />} />
          <Route path="/portal" element={<Portal />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
