import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import { useRef, useState } from 'react';
import Home from './components/Home';
import { Section } from './components/Home';
import Navbar from './components/Navbar';
function App() {


  return (
    <div className="App">
    <Navbar />
    <Home />
    </div>
  );
}

export default App;