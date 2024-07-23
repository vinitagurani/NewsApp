import NavBar from './Components/NavBar';
import './App.css';
import React, { Component } from 'react';
import News from './Components/News';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default class App extends Component {
  c = 'John';
  
  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <Routes>
            <Route exact path="/" element={<News key = "general" pageSize={3} country="in" category="general" />} />
            <Route exact path="/business" element={<News key = "business" pageSize={3} country="in" category="business" />} />
            <Route exact path="/sciences" element={<News key = "sciences"pageSize={3} country="in" category="sciences" />} />
            <Route exact path="/sports" element={<News key = "sports"pageSize={3} country="in" category="sports" />} />
            <Route exact path="/technology" element={<News key = "technology" pageSize={3} country="in" category="technology" />} />
            <Route exact path="/entertainment" element={<News key = "entertainment" pageSize={3} country="in" category="entertainment" />} />
            <Route exact path="/health" element={<News key = "health"pageSize={3} country="in" category="health" />} />
          </Routes>
        </Router>
      </div>
    );
  }
}
